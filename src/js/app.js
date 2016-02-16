/**
 * 全局入口
 * @author kelvshi
 */
define('app', function(require, exports, module) {
	var undf;
	var app = {};
	var Menu = require("widget/menu");
	// var Water = require("widget/waterfall");

	var Model = Backbone.Model.extend({
		defaults:{
			boxWidth: undf, //右侧的宽度
			boxHeight: undf, //右侧的高度
			imgs: undf,
			total:undf, //总数
			lastIndex: undf, //可视区域内最后一张
			cols: undf, //列数
			colWidth:undf, //每一列的宽度
		},
		calcCols:function () {
			var width = this.get("boxWidth");
			var cols = Math.floor(width / 250);
			if(cols == 0){
				cols = 1;
			}
			this.set("cols", cols);
		},
		calColWidth:function () {
			var width = this.get("boxWidth");
			var cols = this.get("cols");
			var colWidth = Math.floor(100 / cols);
			this.set("colWidth", colWidth);
		},
		calColTotal:function () {
			var total = this.get("imgs");
			this.set("total", total.length);
		},
		initialize:function(){
			this.on("change:boxWidth", this.calcCols);
			this.on("change:cols", this.calColWidth);
			this.on("change:imgs", this.calColTotal);
		}
	});


	var MainView = Backbone.View.extend({
		el:document.body,
		events:{
			"click .p_header .totals": function(e){
				var dom = $(e.currentTarget);
				var totals = dom.find(".js-totals").html();
				if(totals !== "0"){
					var status = dom.hasClass('active');
					if(status){
						dom.removeClass('active');
						this.filterOff();
					}else{
						dom.addClass('active');
						this.filterOn();
					}
				}
			},
			"click .p_totals>span":function (e) {
				var dom = $(e.currentTarget);
				dom.siblings('span').removeClass('active');
				dom.addClass('active');
				var title = $.trim(dom.html());
				$(".img-box").each(function(index, el) {
					var this_a = $(this).find("a");
					if(this_a.attr("title") == title){
						$(".img-box").removeClass('active');
						$(this).addClass('active');
						return false;
					}
				});
				this.scollActive();
				$(".p_header .totals").trigger('click');
			},
			"click .p_menu_btn":function (e) {
				var dom = $(e.currentTarget);
				if(dom.hasClass('active')){
					this.menuOff();
				}else{
					this.menuOn();
				}
			}
		},
		menuOff:function () {
			$(".p_menu_btn").removeClass('active');
			$(".p_left").removeClass('active');
			$(".p_header").removeClass('active');
			$(".p_right").removeClass('active');
			$(".p_totals").removeClass('menu-active');
		},
		menuOn:function () {
			$(".p_menu_btn").addClass('active');
			$(".p_left").addClass('active');
			$(".p_header").addClass('active');
			$(".p_right").addClass('active');
			$(".p_totals").addClass('menu-active');
		},
		filterOff:function () {
			$(".p_totals").slideUp("fast",function () {
				$(this).removeClass('active');
			})
		},
		filterOn:function () {
			$(".p_totals").slideDown("fast",function () {
				$(this).addClass('active');
			})
		},
		minHeightCol:function () {
			var mindom = $(".water-fall:eq(0)");
			var min = mindom.height();
			$(".water-fall").each(function(index, el) {
				var dom = $(this);
				var heig = dom.height();
				if(heig < min){
					min = heig;
					mindom = dom;
				}
			});
			return mindom;
		},
		appendImg:function (path) {
			var self = this;
			var last = this.model.get("lastIndex");
			var cols = this.model.get("cols");
			var imgs = this.model.get("imgs");
			var tpl = $("#tpl_img_simgle").html();
			for (var i = 0; i < imgs.length; i++) {
				var img = new Image();
				img.src = path + "/" + imgs[i];
				img.title = imgs[i];
				img.onload = function () {
					var minDom = self.minHeightCol();
					var name = this.src;
					var title = this.title;
					var imgBlock = _.template(tpl)({
						path:path,
						name:title,
					});
					minDom.append(imgBlock);
				}
			}
		},
		calBoxWidth:function () {
			var boxWidth = this.$el.find(".p_right").width();
			this.model.set("boxWidth", boxWidth);
			var boxHeight = this.$el.find(".p_right").height();
			this.model.set("boxHeight", boxHeight);
		},
		randerRight:function () {
			// 根据列数生成容器
			var cols = this.model.get("cols");
			var colWidth = this.model.get("colWidth");
			var colsHtml = "";
			var colsItem = '<div class="water-fall" style="width:'+ colWidth +'%"></div>';
			for (var i = 0; i < cols; i++) {
				colsHtml += colsItem;
			}
			this.$el.find('.p_right').html(colsHtml);

			var data = this.menu.getActiveLi();
			var path = data.path;
			var files = data.files;
			if(!path || !files){
				return false;
			}
			// 设置model
			files = files.split(",");
			this.model.set("imgs", files);
			this.model.set("lastIndex", 0);
			this.appendImg(path);

			// 当前位置
			var position = path.replace("images/" ,"");
			this.$el.find(".p_header .crumbs>span").html(position.replace("/"," / "));
			// 顶部筛选
			var spanHtml = "";
			_.each(files, function(value){
				spanHtml += "<span>" + value + "</span>"
			});
			this.$el.find('.p_totals').html($.trim(spanHtml));
			// 总数
			$(".p_header .totals .js-totals").html(files.length);
		},
		// 滚动到被选中的img
		scollActive:function () {
			var activeDom = $(".img-box.active");
			var posiTop = activeDom.offset().top;
			var curTop = $(".p_right").scrollTop();
			$(".p_right").animate({
				scrollTop:posiTop + curTop - 40
			}, 400);
		},
		// 重置一些状态
		resetPage:function () {
			this.$el.find('.p_header .totals').removeClass("active");
			this.filterOff();
		},

		initialize:function(options, param){
			var view = this;
			this.menu = new Menu();
			this.model = new Model();
			// 计算容器的宽度
			view.calBoxWidth();
			// 监听容器宽度变化
			this.model.on("change:boxWidth", view.randerRight, view);

			// 定义几个niceScroll
			$(".p_left").niceScroll({
		        cursorcolor:"rgba(122,122,122,0.6)",
		        cursorborder: "0",
		    });
		    $(".p_right").niceScroll({
		        cursorcolor:"rgba(122,122,122,0.6)",
		        cursorborder: "0",
		    });
		    $(".p_totals").niceScroll({
		        cursorcolor:"rgba(122,122,122,0.6)",
		        cursorborder: "0",
		    });
		}
	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			"images/*param":"randerRight"
		},
		randerRight:function () {
			// 重置状态
			app.mainView.resetPage();
			app.mainView.randerRight();
		}
	});
	app.mainView = new MainView();
	app.mainRouter = new AppRouter();
	Backbone.history.start();
	module.exports = app;
})