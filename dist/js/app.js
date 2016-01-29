/**
 * 左侧菜单插件
 * @author kelvshi
 */
define('data/files', function(require, exports, module) {
    var menuJson = [{
        "id": 0,
        "name": "assets",
        "covers": [],
        "children": [
            {
                "id": 1,
                "name": "images",
                "pid": 0,
                "covers": [],
                "children": [
                    {
                        "id": 2,
                        "name": "3D",
                        "pid": 1,
                        "covers": [],
                        "children": [
                            {
                                "id": 4,
                                "name": "ABC",
                                "pid": 2,
                                "covers": [
                                    "test1.txt",
                                    "test2.txt"
                                ]
                            },
                            {
                                "id": 5,
                                "name": "XYZ",
                                "pid": 2,
                                "covers": [
                                    "test3.txt"
                                ]
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "One",
                        "pid": 1,
                        "covers": [],
                        "children": [
                            {
                                "id": 6,
                                "name": "201301",
                                "pid": 3,
                                "covers": [
                                    "ada.txt",
                                    "adadddd.txt"
                                ]
                            },
                            {
                                "id": 7,
                                "name": "201501",
                                "pid": 3,
                                "covers": []
                            }
                        ]
                    }
                ]
            }
        ]
    }];

    module.exports = menuJson;
});
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