# ebaz
ebaz是一个基于nodejs的工具,它可以将本地的图片按文件夹整理用网页的形式展示

## 使用方法
整个项目的构建基于grunt，使用前请先确认装有nodejs的环境并装好grunt
### 1. 将项目clone到本地
``` javascript
git clone git@github.com:kelvshi/ebaz.git
```
或者直接下载也行
### 2. 安装依赖
执行
``` javascript
npm install
```

### 3. 设置图片文件夹
将整理后的图片文件夹放在 **src** 的 **images** 文件夹下

### 4. 生成项目
执行
``` javascript
grunt release
```

### 5. 效果预览
打开 **assets** 文件夹下的 **index.html** 即可看到效果