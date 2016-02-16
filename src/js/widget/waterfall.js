/**
 * 右侧图片布局
 * @author kelvshi
 */
define('widget/waterfall', function(require, exports, module) {
	var undef;
	var model = Backbone.Model.extend({
		defaults:{
			
		}
	});

	var Water = Backbone.View.extend({
		el:".p_right",
		events:{
			"scroll": function(e){
				console.log("hh");
			},
		},

		initialize:function(options, param){
			console.log("shisi");
		}
	});
	module.exports = Water;
});