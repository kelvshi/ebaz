var fs = require("fs");
var path = require("path");

// 一些路径配置
var basePath = "dist/images"; //要遍历的根目录
var ImgBaseUrl = "images"; // 图片要使用的url的根目录
var menutpl = "src/js/data/files.tpl"; //生成符合cmd模块的菜单数据的模板
var menuJs = "src/js/data/files.js"; //可以使用的menu js

var idCount = 0;
var FileObj = {};
var menuObj = new Array();
// 读取文件目录信息的函数
var DirList = {
	searchDir: function (pth) {
		var self = this;
		FileObj[pth] = {
			id: idCount++,
			name: path.basename(pth),
			path: pth.replace(/\\/g,"/").replace(basePath, "images")
		}
		var parent = path.dirname(pth);
		if(!FileObj[pth].pid){
			if(FileObj[parent] && typeof FileObj[parent].id !=="undefined"){
				FileObj[pth].pid = FileObj[parent].id;
			}
		}
		if(!FileObj[pth].covers){
			FileObj[pth].covers = new Array();
		}
		var files = fs.readdirSync(pth);
		files.forEach(function (item) {
			var nowPath = path.join(pth, item);
			var infor = fs.statSync(nowPath);
			var flag = infor.isDirectory();
			if(flag){
				self.searchDir(nowPath);
			}else{
				FileObj[pth].covers.push(item);
			}
		});
	},

	createMenu:function () {
		var self = this;
		console.log("正在遍历" + basePath + "...");
		var formatBasePath = basePath.replace(/\//, "\\");
		self.searchDir(formatBasePath);
		var dirObj = FileObj;
		for(var key in dirObj){
			menuObj.push(dirObj[key]);
		}
		self.findChildren(menuObj[0]);
		self.generateMenu(JSON.stringify(menuObj[0], null, 4));
	},

	// 查询子元素的递归
	findChildren:function (item) {
		var self = this;
		var thisId = item.id;
		menuObj.forEach(function (value) {
			if(value.pid == thisId){
				// 判断是否有子元素，有继续往下，没有存下
				if(self.isHasParent(value)){
					self.findChildren(value);
				}
				if(!item.children){
					item.children = new Array();
				}
				item.children.push(value);
			}
		})
	},

	// 生产可用于本地的files.js
	generateMenu:function (menuString) {
		console.log("正在渲染" + menutpl + "模板...");
		var info = fs.readFileSync(menutpl).toString();
		var files = info.replace("/**includeMenu**/", menuString);
		fs.writeFileSync(menuJs, files);
		console.log(menuJs + "生成成功！");
	},

	isHasParent:function (item) {
		var flag = false;
		var thisId = item.id;
		menuObj.forEach(function (value) {
			if(value.pid == thisId){
				flag = true;
			}
		});
		return flag;
	}
}

DirList.createMenu();
module.exports = DirList;