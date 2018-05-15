var GaugesView = Backbone.View.extend({

    initialize:function(highchartsID, data, paletteID){
        var self = this;
        this.highchartsID = highchartsID;
        this.data = data;
        this.paletteID = paletteID;
        this.objParamsHighcharts = "";
    },

    render:function(){
    	var self = this;

    	this.gaugesOptions1 = {
		    chart: {
		        type: 'solidgauge',
		        renderTo: 'highcharts-gauge1',
		        backgroundColor:'transparent',
		    },
		    title: {
		        text: this.data.title,
		        style:App.utils.highchartsParams.title.style
		    },
		    subtitle:{
		    	text: this.data.subtitle,
		    	style:App.utils.highchartsParams.subtitle.style
		    },
		    credits:{
		    	enabled:false
		    },
		    pane: {
		        center: ['50%', '60%'],
		        size: '120%',
		        startAngle: -90,
		        endAngle: 90,
		        background: {
		            backgroundColor: App.utils.palettes[this.paletteID][1],
		            innerRadius: '60%',
		            outerRadius: '100%',
		            shape: 'arc'
		        }
		    },

		    tooltip: {
		        enabled: false
		    },

		    // the value axis
		    yAxis: {
		    	stops: [
		            [0, App.utils.palettes[this.paletteID][0]],
		            [1, App.utils.palettes[this.paletteID][0]]
		        ],
		        lineWidth: 0,
		        minorTickInterval: null,
		        tickAmount: 2,
		        labels: {
		            y: 16
		        },
		        min: 0,
		        max: 100
		    },

		    plotOptions: {
		        solidgauge: {
		            dataLabels: {
		                y: -45,
		                borderWidth: 0,
		                useHTML: true
		            }
		        }
		    },

		    series:[{
		    	name:"Hommes",
		    	data:[18],
		    	color:App.utils.palettes[this.paletteID][0],
		    	dataLabels: {
		            format: "<div style='text-align:center'><span style='font-size:14px;color:#222;font-weight:normal;font-family:LatoWeb'>Hommes</span><br/><span style='font-size:24px;color:#222'>{y}%</span></div>"
		        },
		    }]
		};

		this.gaugesOptions2 = {
			chart: {
		        type: 'solidgauge',
		        renderTo: 'highcharts-gauge2',
		        backgroundColor:'transparent',
		    },

		    title: null,
		    credits:{
		    	enabled:false
		    },
		    pane: {
		        center: ['50%', '50%'],
		        size: '100%',
		        startAngle: -90,
		        endAngle: 90,
		        background: {
		            backgroundColor: App.utils.palettes[this.paletteID][1],
		            innerRadius: '60%',
		            outerRadius: '100%',
		            shape: 'arc'
		        }
		    },

		    tooltip: {
		        enabled: false
		    },

		    // the value axis
		    yAxis: {
		    	stops: [
		            [0, App.utils.palettes[this.paletteID][0]],
		            [1, App.utils.palettes[this.paletteID][0]]
		        ],
		        lineWidth: 0,
		        minorTickInterval: null,
		        tickAmount: 2,
		        labels: {
		            y: 16
		        },
		        min: 0,
		        max: 100
		    },

		    plotOptions: {
		        solidgauge: {
		            dataLabels: {
		                y: -45,
		                borderWidth: 0,
		                useHTML: true
		            }
		        }
		    },

		    series:[{
		    	name:"Femmes",
		    	data:[13],
		    	dataLabels: {
		            format: "<div style='text-align:center'><span style='font-size:14px;color:#222;font-weight:normal;font-family:LatoWeb'>Femmes</span><br/><span style='font-size:24px;color:#222'>{y}%</span></div>"
		        },
		    }]	
		}

    	this.highchartsGraph1 = new Highcharts.chart(this.gaugesOptions1);
    	this.highchartsGraph2 = new Highcharts.chart(this.gaugesOptions2);
    },

    bindEvents:function(){
        var self = this;
    },

});

module.exports = GaugesView;