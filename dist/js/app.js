/**
 * 左侧菜单插件
 * @author kelvshi
 */
define('data/files', function(require, exports, module) {
    var menuJson = [{
    "id": 0,
    "name": "images",
    "path": "images",
    "covers": [],
    "children": [
        {
            "id": 1,
            "name": "3D",
            "path": "images/3D",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 4,
                    "name": "ABC",
                    "path": "images/3D/ABC",
                    "pid": 1,
                    "covers": [
                        "test1.txt",
                        "test2.txt"
                    ]
                },
                {
                    "id": 5,
                    "name": "XYZ",
                    "path": "images/3D/XYZ",
                    "pid": 1,
                    "covers": [
                        "test3.png",
                        "test3.txt",
                        "test4.jpg",
                        "test5.jpg"
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "JLB",
            "path": "images/JLB",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 6,
                    "name": "2013",
                    "path": "images/JLB/2013",
                    "pid": 2,
                    "covers": [],
                    "children": [
                        {
                            "id": 11,
                            "name": "201301",
                            "path": "images/JLB/2013/201301",
                            "pid": 6,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 12,
                            "name": "201308",
                            "path": "images/JLB/2013/201308",
                            "pid": 6,
                            "covers": [
                                "SSS - 副本 (2).txt",
                                "SSS - 副本 (3).txt",
                                "SSS - 副本.txt",
                                "SSS.txt",
                                "SSS2 - 副本 (2).txt",
                                "SSS2 - 副本 (3).txt",
                                "SSS2 - 副本.txt",
                                "SSS2.txt"
                            ]
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "2014",
                    "path": "images/JLB/2014",
                    "pid": 2,
                    "covers": [],
                    "children": [
                        {
                            "id": 13,
                            "name": "201401",
                            "path": "images/JLB/2014/201401",
                            "pid": 7,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 14,
                            "name": "201402",
                            "path": "images/JLB/2014/201402",
                            "pid": 7,
                            "covers": [
                                "SSS - 副本 (2).txt",
                                "SSS - 副本 (3).txt",
                                "SSS - 副本.txt",
                                "SSS.txt",
                                "SSS2 - 副本 (2).txt",
                                "SSS2 - 副本 (3).txt",
                                "SSS2 - 副本.txt",
                                "SSS2.txt"
                            ]
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "2015",
                    "path": "images/JLB/2015",
                    "pid": 2,
                    "covers": [
                        "test1.png",
                        "test2.png"
                    ],
                    "children": [
                        {
                            "id": 15,
                            "name": "201501",
                            "path": "images/JLB/2015/201501",
                            "pid": 8,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 16,
                            "name": "201508",
                            "path": "images/JLB/2015/201508",
                            "pid": 8,
                            "covers": [
                                "SSS - 副本 (2).txt",
                                "SSS - 副本 (3).txt",
                                "SSS - 副本.txt",
                                "SSS.txt",
                                "SSS2 - 副本 (2).txt",
                                "SSS2 - 副本 (3).txt",
                                "SSS2 - 副本.txt",
                                "SSS2.txt"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "One",
            "path": "images/One",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 9,
                    "name": "201301",
                    "path": "images/One/201301",
                    "pid": 3,
                    "covers": [
                        "ada.txt",
                        "adadddd.txt"
                    ]
                },
                {
                    "id": 10,
                    "name": "201501",
                    "path": "images/One/201501",
                    "pid": 3,
                    "covers": []
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