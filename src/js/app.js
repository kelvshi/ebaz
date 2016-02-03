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
			var files = data.files.split(",");
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
		// 重置一些状态
		resetPage:function () {
			this.$el.find('.p_header .totals').removeClass("active");
			this.filterOff();
		},

		initialize:function(options, param){
			this.menu = new Menu();
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