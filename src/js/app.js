/**
 * 全局入口
 * @author kelvshi
 */
define('app', function(require, exports, module) {
	var app = {};
	var Menu = require("widget/menu");
	var MainView = Backbone.View.extend({
		el:document.body,
		events:{
			"click img": function(e){
				console.log(this.menu.getActiveLi());
			},
		},
		initialize:function(options, param){
			this.menu = new Menu();
		}
	});
	app.mainView = new MainView();
	module.exports = app;
})