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