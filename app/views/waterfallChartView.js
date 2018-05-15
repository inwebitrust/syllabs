var WaterfallChartView = Backbone.View.extend({

    initialize:function(highchartsID, data, paletteID){
        var self = this;
        this.highchartsID = highchartsID;
        this.data = data;
        this.paletteID = paletteID;
        this.objParamsHighcharts = "";
    },

    render:function(){
    	var self = this;

    	this.objParamsHighcharts = {
		    chart: {
		        type: 'waterfall',
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
			xAxis: {
				lineColor:"#bfbfbf",
				type: 'category',
				tickWidth:0,
				useHTML:true,
				reversed:true,
				labels: {
		            style:{
			        	"color":"#222",
			        	"fontSize":"14px",
			        	"fontFamily":"LatoWeb"
			        }
		        },
		        formatter:function(){
		        	return "<span class='label_waterfall'>"+this.value+"</span>";
		        }
			},
			yAxis: {
				gridLineWidth:1,
		        gridLineColor:"#bfbfbf",
				title: {
					text: ''
				},
				labels: {
		            style:{
			        	"color":"#666666",
			        	"fontSize":"12px",
			        	"fontFamily":"LatoWeb",
			        }
			    }
			},
			legend: {
				enabled: false
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
		    		console.log(this.point);
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.point.name+"</span><br /><span class='syllabs_tooltip_value'>"+this.point.y+"</span></div>";
		    	}
		    },
			plotOptions:{
				series:{
					borderWidth:0,
					borderRadius:5
				}
			},
			series: [{
				data: [
					{
						name: this.data.series.solde.name,
						y: this.data.series.solde.value,
						color:App.utils.palettes[this.paletteID][0]
					}, {
						name: this.data.series.deces.name,
						y: this.data.series.deces.value,
						color:App.utils.palettes[this.paletteID][1]
					}, {
						name: this.data.series.naissances.name,
						y: this.data.series.naissances.value,
						color:App.utils.palettes[this.paletteID][2],
						isIntermediateSum: true,
					}
				],
				pointPadding: 0
			}]
		};

    	this.highchartsGraph = new Highcharts.chart(this.objParamsHighcharts);
    },

    bindEvents:function(){
        var self = this;
    },

});

module.exports = WaterfallChartView;