var DonutView = Backbone.View.extend({

    initialize:function(highchartsID, data, paletteID){
        var self = this;
        this.highchartsID = highchartsID;
        this.data = data;
        this.paletteID = paletteID;
        this.objParamsHighcharts = "";
    },

    render:function(){
    	var self = this;

    	this.seriesArray = _.map(this.data.series, function(o){ o.y = o.value; return o; });

    	this.objParamsHighcharts = {
		    chart: {
		        type: 'pie',
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
		    tooltip:{
		    	backgroundColor:"#fff",
		    	borderWidth:0,
		    	useHTML:true,
		    	style:{
		    		fontSize:"12px",
		    		color:"#222"
		    	},
		    	formatter:function(){
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.point.name+"</span><br /><span class='syllabs_tooltip_value'>"+this.point.y+"%</span></div>";
		    	}
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: true,
		            cursor: 'pointer',
		            dataLabels: {
		                enabled: true,
		                useHTML:true,
		                formatter:function(){
		                	return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.point.name + "</span> <span class='syllabs_tooltip_value'>" + this.point.percentage + "%</span></div>";
		                },
		                style: {
		                    color:"#222222",
				    		"fontSize":"14px",
				        	"fontFamily":"LatoWeb",
				        	"fontWeight":"normal",
				        	"textOutline":"0px"
		                }
		            },
		            states:{
		            	hover:{
		            		brightness:0.1,
		            		halo:{
		            			opacity:0,
		            			size:0
		            		}
		            	}
		            }
		        }
		    },
		    series: [{
		    	colorByPoint:true,
		    	innerSize: '80%',
		    	data:this.seriesArray
		    }]
		};

    	this.highchartsGraph = new Highcharts.chart(this.objParamsHighcharts);
    },

    bindEvents:function(){
        var self = this;
    },

});

module.exports = DonutView;