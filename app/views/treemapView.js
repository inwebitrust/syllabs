var TreemapView = Backbone.View.extend({

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

    	var seriesWithColors = [];
    	_.each(this.data.series, function(s, index){
    		s.color = App.utils.palettes[self.paletteID][index];
    		seriesWithColors.push(s);
    	});

    	this.objParamsHighcharts = {
		    chart: {
		        type: 'treemap',
		        renderTo: this.highchartsID,
		        backgroundColor:'transparent',
		        animation:false
		    },
		    title: {
		        text: this.data.title,
		        style:App.utils.highchartsParams.title.style
		    },
		    subtitle:{
		    	text: this.data.subtitle,
		    	style:App.utils.highchartsParams.subtitle.style
		    },
		    credits:{ enabled:false },
		    tooltip:{
		    	backgroundColor:"#fff",
		    	borderWidth:0,
		    	useHTML:true,
		    	padding:8,
		    	formatter:function(){
		    		console.log(this);
		    		return "<div class='syllabs_tooltip_div'><span class='syllabs_tooltip_label'>"+this.key+"</span><br /><span class='syllabs_tooltip_value'>"+this.point.value.toFixed(1).replace(".",",")+"%</span></div>";
		    	}	
		    },
		    plotOptions:{
		    	series:{
		    		borderRadius:5,
		    		borderWidth:1,
		    		dataLabels:{
		    			style: {
		                    color:"#fff",
				    		"fontSize":"14px",
				        	"fontFamily":"LatoWeb",
				        	"fontWeight":"normal",
				        	"textOutline":"0px"
		                }
		    		}
		    	}
		    },
		    series: [{
		    	layoutAlgorithm: 'squarified',
		    	data:seriesWithColors
		    }]
		};

    	this.highchartsGraph = new Highcharts.chart(this.objParamsHighcharts);
    },

    bindEvents:function(){
        var self = this;
    },

});

module.exports = TreemapView;