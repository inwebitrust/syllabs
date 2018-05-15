var StackedBarView = Backbone.View.extend({

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
    		return c.label;
    	});

    	var seriesObj = {};
    	_.each(this.data.categories, function(c){
    		_.each(c.metrics, function(metricValue, metricID){
    			if(seriesObj[metricID] == undefined){
    				seriesObj[metricID] = {
    					name:self.data[metricID].label,
    					data:[]
    				};
    			}
    			seriesObj[metricID].data.push(metricValue);
    		});
    	});

    	this.seriesArray = _.map(seriesObj, function(o){ return o; });

    	this.objParamsHighcharts = {
		    chart: {
		        type: 'bar',
		        renderTo: this.highchartsID,
		        backgroundColor:'transparent',
		        spacing:[20,20,20,20]
		    },
		    colors: App.utils.palettes[this.paletteID],
		    title: {
		        text: this.data.title,
		        style:App.utils.highchartsParams.title.style
		    },
		    subtitle:{
		    	text: this.data.subtitle,
		    	style:App.utils.highchartsParams.subtitle.style
		    },
		    credits:{ enabled:false },
		    xAxis: {
		        categories: this.categories,
		        tickWidth:0,
		        lineColor:"#bfbfbf",
		        labels:{
		        	padding:0,
		        	style:{
			        	"color":"#222222",
			        	"fontSize":"14px",
			        	"fontFamily":"LatoWeb"
			        }
		        }
		    },
		    yAxis: {
		        min: 0,
		        gridLineWidth:1,
		        gridLineColor:"#bfbfbf",
		        title: {
		            enabled:false
		        },
		        labels:{
		        	style:{
		        		color:"#666666",
		        		fontSize:"12px"
		        	},
		        	format:"{value}%"
		        },
		    },
		    legend: {
		    	useHTML:true,
		        reversed: true,
		        verticalAlign:'top',
		        itemStyle:App.utils.highchartsParams.legend.itemStyle,
		        symbolHeight:16,
		        symbolWidth:16,
		        symbolRadius:3,
		        labelFormatter:function(){
		        	return "<div class='syllabs_stackedbar_legend'>"+this.name+"</div>";
		        }
		    },
		    plotOptions: {
		        series: {
		            stacking: 'percent',
		            borderWidth:0,
		            groupPadding:0.1,
		        }
		    },
		    tooltip:{
		    	backgroundColor:"#fff",
		    	borderWidth:0,
		    	useHTML:true,
		    	padding:8,
		    	formatter:function(){
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.x+"</span><br /><span class='syllabs_tooltip_value'>"+this.point.percentage.toFixed(1).replace(".",",")+"%</span></div>";
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

module.exports = StackedBarView;