module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			main: {
				expand: true,
				cwd: 'src/less/',
				src: ['**/!(common).less'],
				dest: 'src/css/',
				ext: '.css'
			}
		},
		concat: {//文件合并
		    css: {
		      	src: ['vendors/normalize.css/normalize.css',
		      			'vendors/iconfont/iconfont.css',
		      			'vendors/jquery.blueimp-gallery/css/blueimp-gallery.css',
		      			'vendors/jquery.blueimp-gallery/css/blueimp-gallery-indicator.css',
		      			'src/css/*.css'
		      		],
		      	dest: 'dist/css/style.css'
		    },
		    lib: {
		    	src: ['vendors/jquery/*.js',
		    		"vendors/underscore/*.js",
		    		"vendors/backbone/*.js",
		    		"vendors/seajs/*.js",
		    		"vendors/jquery.lazyload/jquery.lazyload.js",
		    		"vendors/jquery.blueimp-gallery/js/blueimp-gallery.js",
		    		"vendors/jquery.blueimp-gallery/js/blueimp-gallery-indicator.js",
		    		"vendors/jquery.blueimp-gallery/js/jquery.blueimp-gallery.js",
		    		"vendors/jquery.nicescroll/jquery.nicescroll.js",
		    	],
		      	dest: 'dist/js/lib.js'
		    },
		    app: {
		    	src: ['src/js/data/files.js', 'src/js/widget/menu.js', 'src/js/widget/waterfall.js', 'src/js/app.js'],
		      	dest: 'dist/js/app.js'
		    },
		    js: {
				expand: true,
				cwd: 'src/js/',
				src: ['**/!(app).js'],
				dest: 'dist/js/',
				ext: '.js'
		    }
		},
		cssmin: {
		  	target: {
		    	files: [{
		      		expand: true,
		      		cwd: 'dist/css',
		      		src: ['*.css', '!*.min.css'],
		      		dest: 'assets/css',
		      		ext: '.css'
		    	}]
		  	}
		},
		uglify: {
		 	release: {
		      	files: [{
		          	expand: true,
		          	cwd: 'dist/js',
		          	src: '*.js',
		          	dest: 'assets/js',
		      		ext: '.js'
		      	}]
		    }
		},
		copy: {
		  	main: {
		    	expand: true,
		    	cwd: 'dist/',
		    	src: ['**', '!js/**', '!css/**'],
		    	dest: 'assets/',
		  	},
		},
		watch: {
			less: {
				files: 'src/less/*.less',
				tasks: 'less',
				options: {
					debounceDelay: 100
				}
			},
			concat: {
				files: 'src/css/*.css',
				tasks: 'concat:css',
				options: {
					debounceDelay: 100
				}
			},
			concat_app: {
				files: 'src/js/**/*.js',
				tasks: 'concat:app',
				options: {
					debounceDelay: 100
				}
			},
			// concat_js: {
			// 	files: 'src/js/**/!(app).js',
			// 	tasks: 'concat:js',
			// 	options: {
			// 		debounceDelay: 100
			// 	}
			// }
		},
		menu: {
			options:{
				searchRoot:"dist/images",
				urlBath:"images",
				menuTpl:"src/js/data/files.tpl",
				menuJs:"src/js/data/files.js"
			},
			build: {
				src:"src/js/data/files.tpl",
				dest:"src/js/data/files.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-file-menu');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['less', 'concat:css', 'menu' , 'concat:app', 'watch']);
	grunt.registerTask('release', ['less', 'concat:css', 'cssmin', 'menu' , 'concat:lib', 'concat:app', 'uglify', 'copy']);
};