/**
 * 全局入口
 * @author kelvshi
 */
define('app', function(require, exports, module) {

	var app = {};
	var MainView = Backbone.View.extend({
		el:document.body,
		events:{
			"click h1": function(e){
				this.model.set("id",2);
			},
		},
		initialize:function(options){
			console.log("tex");
		}
	});
	app.mainView = new MainView();
	module.exports = app;
})