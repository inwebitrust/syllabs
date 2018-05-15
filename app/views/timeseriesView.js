var TimeseriesView = Backbone.View.extend({

    initialize:function(highchartsID, data, paletteID){
        var self = this;
        this.highchartsID = highchartsID;
        this.data = data;
        this.paletteID = paletteID;
        this.objParamsHighcharts = "";
    },

    render:function(){
    	var self = this;

    	this.seriesArray = _.map(this.data.series, function(o){ return o; });

    	this.objParamsHighcharts = {
		    chart: {
		        type: 'line',
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
		    xAxis:{
		    	lineColor:"#bfbfbf",
		    	tickWidth:0,
		    	labels:{
		    		style:{
			    		color:"#222222",
			    		"fontSize":"12px",
			        	"fontFamily":"LatoWeb",
			    	}
		    	}
		    },
		    yAxis: {
		    	gridLineWidth:1,
		        gridLineColor:"#bfbfbf",
		    	title:{
		    		text:''
		    	},
		        labels: {
		            style:{
			        	"color":"#666666",
			        	"fontSize":"12px",
			        	"fontFamily":"LatoWeb",
			        },
			        format:"{value}‰"
		        }
		    },
		    legend: {
		    	useHTML:true,
		        verticalAlign: 'top',
		        itemStyle:App.utils.highchartsParams.legend.itemStyle,
		        labelFormatter:function(){
		        	return "<div class='syllabs_timeseries_legend'>"+this.name+"</div>";
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
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.point.x+"</span><br /><span class='syllabs_tooltip_value'>"+this.point.y+"‰</span></div>";
		    	}
		    },
		    plotOptions: {
		        series: {
		            marker:{
		            	enabled:false,
		            	lineWidth:0,
		            	symbol:"circle",
		            	states:{
		            		hover:{
		            			radius:5,
		            			lineWidth:0,
		            			radiusPlus:0,
		            		}
		            	}
		            },
		            states:{
		            	hover:{
		            		halo:{
		            			opacity:0,
		            			size:0
		            		}
		            	}
		            },
		            pointStart: 1982
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

module.exports = TimeseriesView;