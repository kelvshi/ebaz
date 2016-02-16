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
            "name": "3DXS",
            "path": "images/3DXS",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 2,
                    "name": "ABC",
                    "path": "images/3DXS/ABC",
                    "pid": 1,
                    "covers": [
                        "test1.txt",
                        "test2.txt"
                    ]
                },
                {
                    "id": 3,
                    "name": "XYZ",
                    "path": "images/3DXS/XYZ",
                    "pid": 1,
                    "covers": [
                        "test4 - 副本 (2).jpg",
                        "test4 - 副本.jpg",
                        "test4.jpg",
                        "test411这是埃杜阿多阿斯顿撒 - 副本 (2).jpg",
                        "test411这是埃杜阿多阿斯顿撒 - 副本.jpg",
                        "test411这是埃杜阿多阿斯顿撒.jpg",
                        "test5 - 副本 (2).jpg",
                        "test5 - 副本.jpg",
                        "test5.jpg",
                        "test6 - 副本 (2).jpg",
                        "test6 - 副本.jpg",
                        "test6.jpg",
                        "这是阿迪斯AADD但是的撒大大 - 副本 (2).png",
                        "这是阿迪斯AADD但是的撒大大 - 副本.png",
                        "这是阿迪斯AADD但是的撒大大.png",
                        "阿达阿达萨达aa - 副本 (2).jpg",
                        "阿达阿达萨达aa - 副本.jpg",
                        "阿达阿达萨达aa.jpg"
                    ]
                }
            ]
        },
        {
            "id": 4,
            "name": "JLB",
            "path": "images/JLB",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 5,
                    "name": "2013",
                    "path": "images/JLB/2013",
                    "pid": 4,
                    "covers": [],
                    "children": [
                        {
                            "id": 6,
                            "name": "201301",
                            "path": "images/JLB/2013/201301",
                            "pid": 5,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 7,
                            "name": "201308",
                            "path": "images/JLB/2013/201308",
                            "pid": 5,
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
                    "name": "2014",
                    "path": "images/JLB/2014",
                    "pid": 4,
                    "covers": [],
                    "children": [
                        {
                            "id": 9,
                            "name": "201401",
                            "path": "images/JLB/2014/201401",
                            "pid": 8,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 10,
                            "name": "201402",
                            "path": "images/JLB/2014/201402",
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
                },
                {
                    "id": 11,
                    "name": "2015",
                    "path": "images/JLB/2015",
                    "pid": 4,
                    "covers": [
                        "test1.png",
                        "test2.png"
                    ],
                    "children": [
                        {
                            "id": 12,
                            "name": "201501",
                            "path": "images/JLB/2015/201501",
                            "pid": 11,
                            "covers": [
                                "SSS.txt"
                            ]
                        },
                        {
                            "id": 13,
                            "name": "201508",
                            "path": "images/JLB/2015/201508",
                            "pid": 11,
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
            "id": 14,
            "name": "One",
            "path": "images/One",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 15,
                    "name": "201301",
                    "path": "images/One/201301",
                    "pid": 14,
                    "covers": [
                        "ada.txt",
                        "adadddd.txt"
                    ]
                },
                {
                    "id": 16,
                    "name": "201501",
                    "path": "images/One/201501",
                    "pid": 14,
                    "covers": []
                }
            ]
        }
    ]
}];

    module.exports = menuJson;
});