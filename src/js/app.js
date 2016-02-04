/**
 * 全局入口
 * @author kelvshi
 */
define('app', function(require, exports, module) {
	var undf;
	var app = {};
	var Menu = require("widget/menu");
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
		randerRight:function () {
			var data = this.menu.getActiveLi();
			var path = data.path;
			var files = data.files;
			if(!path || !files){
				return false;
			}
			files = files.split(",");
			var tpl = $("#tpl_img").html();
			var html = _.template(tpl)({
				path:path,
				files:files
			});
			this.$el.find('.p_right').html(html);
			$('img.lazy').lazyload({
			    threshold: 100,
			    event: "scroll",
			    effect: "fadeIn",
			    container: ".p_right",
			    placeholder: "img/loading2.gif"
			});
			// 添加图片的效果
			$("img").load(function() {
				// 调整描述文字大小
				var infor = $(this).parent("a").siblings('.img-info');
				var imgWidth = $(this).width();
				if(infor.width() > imgWidth){
					infor.width(imgWidth-10);
				}
			});
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
			this.menu = new Menu();
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