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