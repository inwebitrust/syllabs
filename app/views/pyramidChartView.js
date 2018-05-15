var PyramidChartView = Backbone.View.extend({

    initialize:function(highchartsID, data, paletteID){
        var self = this;
        this.highchartsID = highchartsID;
        this.data = data;
        this.paletteID = paletteID;
        this.objParamsHighcharts = "";
    },

    render:function(){
    	var self = this;

    	this.categories = _.map(this.data.categories, function(c){
    		return c.label
    	});

    	var totalPopulation = 0;
    	_.each(this.data.categories, function(c){
    		totalPopulation += c.metrics.metric1;
    		totalPopulation += c.metrics.metric2;
    	});
    	console.log(totalPopulation);

    	var seriesObj = {};
    	_.each(this.data.categories, function(c){
    		_.each(c.metrics, function(metricValue, metricID){
    			if(seriesObj[metricID] == undefined){
    				seriesObj[metricID] = {
    					name:self.data[metricID].label,
    					data:[]
    				};
    			}
    			var pctValue = (metricValue/totalPopulation)*100;
    			if(metricID == "metric1") seriesObj[metricID].data.push(-pctValue);
    			else seriesObj[metricID].data.push(pctValue);
    		});
    	});

    	this.seriesArray = _.map(seriesObj, function(o){ return o; });
    	this.objParamsHighcharts = {
		    chart: {
		        type: 'bar',
		        renderTo: this.highchartsID,
		        backgroundColor:'transparent'
		    },
		    title: {
		        text: this.data.title,
		        style:App.utils.highchartsParams.title.style
		    },
		    subtitle:{
		    	text: this.data.subtitle,
		    	style:App.utils.highchartsParams.subtitle.style
		    },
		    colors: App.utils.palettes[this.paletteID],
		    credits:{ enabled:false  },
		    xAxis: [{
		        categories: this.categories,
		        reversed: false,
		        tickWidth:0,
		        lineColor:"#bfbfbf",
		        labels: {
		            step: 1,
		            style:{
			        	"color":"#222222",
			        	"fontSize":"10px",
			        	"fontFamily":"LatoWeb"
			        }
		        }
		    }, { // mirror axis on right side
		        opposite: true,
		        reversed: false,
		        categories: this.categories,
		        linkedTo: 0,
		        tickWidth:0,
		        lineColor:"#bfbfbf",
		        labels: {
		            step: 1,
		            style:{
			        	"color":"#222222",
			        	"fontSize":"10px",
			        	"fontFamily":"LatoWeb"
			        }
		        }
		    }],
		    yAxis: {
		    	gridLineWidth:1,
		        gridLineColor:"#bfbfbf",
		        title: {
		            text: null
		        },
		        labels: {
		        	style:{
			        	"color":"#222222",
			        	"fontSize":"12px",
			        	"fontFamily":"LatoWeb"
			        },
		            formatter: function () {
		                return Math.abs(this.value);
		            }
		        }
		    },
		    legend:{
		    	verticalAlign:'top',
		    	useHTML:true,
		    	itemStyle:App.utils.highchartsParams.legend.itemStyle,
		    	symbolHeight:16,
		        symbolWidth:16,
		        symbolRadius:3,
		        labelFormatter:function(){
		        	return "<div class='syllabs_pyramid_legend'>"+this.name+"</div>";
		        }
		    },
		    plotOptions: {
		        series: {
		            stacking: 'normal',
		            borderWidth:0
		        }
		    },
		    tooltip:{
		    	backgroundColor:"#fff",
		    	borderWidth:0,
		    	useHTML:true,
		    	style:{
		    		fontSize:"12px",
		    		color:"#222"
		    	},
		    	formatter:function(){
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.point.category+" ans</span><br /><span class='syllabs_tooltip_value'>"+Math.abs(this.point.y).toFixed(2)+"%</span></div>";
		    	}
		    },

		    series: this.seriesArray
		};

    	this.highchartsGraph = new Highcharts.chart(this.objParamsHighcharts);
    },

    bindEvents:function(){
        var self = this;
    },

});

module.exports = PyramidChartView;