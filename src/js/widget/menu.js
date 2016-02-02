/**
 * 左侧菜单插件
 * @author kelvshi
 */
define('widget/menu', function(require, exports, module) {
	var menuJson = require("data/files");
	var Menu = Backbone.View.extend({
		className:"w_menu",
		events:{
			"click li": function(e){
				var thisLi = $(e.currentTarget);
				if(thisLi.hasClass('active')){
					this.unActive(thisLi);
				}else{
					this.beActive(thisLi);
				}
				return false;
			},
			"click li.end-li": function (e) {
				var thisLi = $(e.currentTarget);
				var router = thisLi.find(">a").data("path");
				location.hash = router;
				return false;
			}
		},

		// 激活状态
		beActive:function (item) {
			this.unActive(item.siblings('li.active'));
			item.find(">ul").slideDown('fast', function() {
				item.addClass('active');
			});
			this.$el.find('a.selected').removeClass('selected');
			item.children('a').addClass('selected');
		},

		unActive:function (item) {
			if(item.hasClass('end-li')){
				return false;
			}
			item.find(">ul").slideUp('fast', function() {
				item.removeClass('active');
			});
		},

		getActiveLi:function () {
			var obj = {};
			var item = this.$el.find('.end-li>a.selected');
			obj.path = item.data("path");
			obj.files = item.data("files");
			return obj;
		},

		initialize:function(options, param){
			var tpl = $("#tpl_menu").html();
			var menuHtml = _.template(tpl)({
				menu:menuJson[0]
			});
			var html = this.$el.html(menuHtml);
			// this.$el.addClass('w_menu');
			$(".sidemenu .bottom").html(html);
		}
	});
	module.exports = Menu;
});