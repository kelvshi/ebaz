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
			"click h1": function(e){
				// this.model.set("id",2);
			},
		},
		initialize:function(options, param){
			var menu = new Menu();
			// djda
		}
	});
	app.mainView = new MainView();
	module.exports = app;
})