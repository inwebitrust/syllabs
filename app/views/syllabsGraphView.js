var SyllabsGraphView = Backbone.View.extend({

    initialize:function(id, type, name, data){
        var self = this;
        this.id = id;
        this.type = type;
        this.name = name;
        this.data = data;
        this.selectedPalette = 1;
        console.log("initialize", id, type);
    },

    render:function(){
    	this.highchartsGraphID = this.id+"-highcharts";
    	this.$Container = $("<div class='syllabsgraph_container' id='"+this.id+"'><div class='container_mask'></div><div class='palette_picker'><div class='palette_pick' data-palette='1'></div><div class='palette_pick' data-palette='2'></div><div class='palette_pick' data-palette='3'></div></div><div class='syllabsgraph_wrapper'><div class='syllabsgraph_name'>"+this.name+"</div><div class='syllabsgraph_highcharts' id='"+this.highchartsGraphID+"'></div></div><div class='syllabsgraph_actions'><button class='seecode_bt'>Voir le code</button></div><div class='seecode_modal'><pre></pre></div></div>");

        if(this.id == "gauges"){
            this.$Container = $("<div class='syllabsgraph_container' id='"+this.id+"'><div class='container_mask'></div><div class='palette_picker'><div class='palette_pick' data-palette='1'></div><div class='palette_pick' data-palette='2'></div><div class='palette_pick' data-palette='3'></div></div><div class='syllabsgraph_wrapper'><div class='syllabsgraph_name'>"+this.name+"</div><div class='syllabsgraph_highcharts syllabsgraph_gauge' id='highcharts-gauge1'></div><div class='syllabsgraph_highcharts syllabsgraph_gauge' id='highcharts-gauge2'></div></div><div class='syllabsgraph_actions'><button class='seecode_bt'>Voir le code</button></div><div class='seecode_modal'><pre></pre></div></div>");
        }
    	App.$AppGraphs.append(this.$Container);

    	this.renderGraph();

        this.bindEvents();
    },

    renderGraph:function(){
    	switch(this.type){
    		case "stacked-bar":
    			this.highchartsView = new App.StackedBarView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			//this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(JSON.stringify(this.highchartsView.objParamsHighcharts, undefined, 4))+")");
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+JSON.stringify(this.highchartsView.objParamsHighcharts, undefined, 4)+")");
    		break;
    		case "pyramid":
    			this.highchartsView = new App.PyramidChartView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
    		break;
    		case "timeseries":
    			this.highchartsView = new App.TimeseriesView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
    		break;
    		case "waterfall":
    			this.highchartsView = new App.WaterfallChartView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
    		break;
    		case "donut":
    			this.highchartsView = new App.DonutView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
    		break;
    		case "stacked-column":
    			this.highchartsView = new App.StackedColumnView(this.highchartsGraphID, this.data, this.selectedPalette);
    			this.highchartsView.render();
    			this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
    		break;
            case "treemap":
                this.highchartsView = new App.TreemapView(this.highchartsGraphID, this.data, this.selectedPalette);
                this.highchartsView.render();
                this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
            break;
            case "area-chart":
                this.highchartsView = new App.AreaChartView(this.highchartsGraphID, this.data, this.selectedPalette);
                this.highchartsView.render();
                this.$Container.find(".seecode_modal pre").html("var myChart = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.objParamsHighcharts))+")");
            break;
            case "gauges":
                this.highchartsView = new App.GaugesView(this.highchartsGraphID, this.data, this.selectedPalette);
                this.highchartsView.render();
                this.$Container.find(".seecode_modal pre").html("var myChart1 = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.gaugesOptions1))+") \nvar myChart2 = new Highcharts.chart("+App.utils.syntaxHighlight(App.utils.deepStringify(this.highchartsView.gaugesOptions2))+") ");
            break;
    	}

    	this.$Container.find(".palette_pick").removeClass("selected");
    	this.$Container.find(".palette_pick[data-palette='"+this.selectedPalette+"']").addClass("selected");
    },

    bindEvents:function(){
        var self = this;

        this.$Container.find(".seecode_bt").on("click", function(){
        	self.displayCodeModal();
        	return false;
        });

        this.$Container.find(".container_mask").on("click", function(){
        	self.hideCodeModal();
        });

        this.$Container.find(".palette_pick").on("click", function(){
        	console.log($(this).attr("data-palette"));
        	self.selectPalette($(this).attr("data-palette"));
        	return false;
        });
    },

    displayCodeModal:function(){
    	this.$Container.find(".seecode_modal").addClass("displayed");
    	this.$Container.find(".container_mask").addClass("displayed");
    },

    hideCodeModal:function(){
    	this.$Container.find(".seecode_modal").removeClass("displayed");
    	this.$Container.find(".container_mask").removeClass("displayed");
    },

    selectPalette:function(paletteID){
    	console.log("selectPalette", paletteID);
    	this.selectedPalette = paletteID;
    	this.renderGraph();
    }

});

module.exports = SyllabsGraphView;