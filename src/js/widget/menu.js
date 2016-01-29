/**
 * 左侧菜单插件
 * @author kelvshi
 */
define('widget/menu', function(require, exports, module) {
	var menuJson = require("data/files");
	var Menu = Backbone.View.extend({
		el:".w_menu",
		events:{
			"click h1": function(e){
				// this.model.set("id",2);
			},
		},
		initialize:function(options, param){
			var tpl = $("#tpl_menu").html();
			var html = _.template(tpl)({
				title:"这是表土"
			});
			$(".sidemenu .bottom").html(html);
		}
	});
	module.exports = Menu;
});