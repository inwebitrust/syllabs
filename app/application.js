var App = {
    $body:$("body"),

    init: function init() {
        this.$App = $("#App");
        this.$AppGraphs = $("#AppGraphs");

        this.syllabsGraphsParams = {
            "stacked-bar":{
                id:"stacked-bar",
                type:"stacked-bar",
                name:"Stacked Bars",
                data:{
                    title:"Une part de chômeurs prépondérante parmi les ouvriers",
                    subtitle:"Répartition des actifs par secteur, en % en 2016",
                    categories:{
                        "agriculteurs":{
                            id:"agriculteurs",
                            label:"Agriculteurs",
                            metrics:{
                                metric1:20,
                                metric2:5
                            }
                        },
                        "art_com_chef":{
                            id:"art_com_chef",
                            label:"Artisans, commerçants, chefs d’entreprise",
                            metrics:{
                                metric1:1251,
                                metric2:208
                            }
                        },
                        "cadre":{
                            id:"cadre",
                            label:"Cadres",
                            metrics:{
                                metric1:8030,
                                metric2:358
                            }
                        },
                        "prof_inter":{
                            id:"prof_inter",
                            label:"Professions intermédiaires",
                            metrics:{
                                metric1:10007,
                                metric2:1376
                            }
                        },
                        "employe":{
                            id:"employe",
                            label:"Employés",
                            metrics:{
                                metric1:10170,
                                metric2:2714
                            }
                        },
                        "ouvrier":{
                            id:"ouvrier",
                            label:"Ouvriers",
                            metrics:{
                                metric1:6671,
                                metric2:2477
                            }
                        }
                    },
                    metric1:{
                        label:"en emploi"
                    },
                    metric2:{
                        label:"en recherche d'emploi"
                    }
                }
            },
            "pyramid":{
                id:"pyramid",
                type:"pyramid",
                name:"Pyramid Chart",
                data:{
                    title:"Les femmes, plus nombreuses dans les tranches d’âge élevées",
                    subtitle:"Répartition de la population par sexe et par tranche d’âge, en 2015",
                    categories:{
                        "0_4":{
                            id:"0_4",
                            label:"0-4",
                            metrics:{
                                metric1:4295.6082391014,
                                metric2:4011.7072697132
                            }
                        },
                        "5_9":{
                            id:"5_9",
                            label:"5-9",
                            metrics:{
                                metric1:3997.5918894037,
                                metric2:3706.0460737371
                            }
                        },
                        "10_14":{
                            id:"10_14",
                            label:"10-14",
                            metrics:{
                                metric1:3692.1754463615,
                                metric2:3609.6662371997
                            }
                        },
                        "15_19":{
                            id:"15_19",
                            label:"15-19",
                            metrics:{
                                metric1:5379.8330548345,
                                metric2:5643.3913716368
                            }
                        },
                        "20_24":{
                            id:"20_24",
                            label:"20-24",
                            metrics:{
                                metric1:7558.3765292462,
                                metric2:8531.1215698988
                            }
                        },
                        "25_29":{
                            id:"25_29",
                            label:"25-29",
                            metrics:{
                                metric1:5865.9384007114,
                                metric2:5796.6335597594
                            }
                        },
                        "30_34":{
                            id:"30_34",
                            label:"30-34",
                            metrics:{
                                metric1:4641.0494224737,
                                metric2:4406.0507117303
                            }
                        },
                        "35_39":{
                            id:"35_39",
                            label:"35-39",
                            metrics:{
                                metric1:4079.1226704934,
                                metric2:4169.1003613409
                            }
                        },
                        "40_44":{
                            id:"40_44",
                            label:"40-44",
                            metrics:{
                                metric1:3849.8952403884,
                                metric2:4031.7547303232
                            }
                        },
                        "45_49":{
                            id:"45_49",
                            label:"45-49",
                            metrics:{
                                metric1:3520.5121564451,
                                metric2:3885.7425582986
                            }
                        },
                        "50_54":{
                            id:"50_54",
                            label:"50-54",
                            metrics:{
                                metric1:3212.6138048644,
                                metric2:4143.2456813561
                            }
                        },
                        "55_59":{
                            id:"55_59",
                            label:"55-59",
                            metrics:{
                                metric1:3210.2824326412,
                                metric2:3907.2710722249
                            }
                        },
                        "60_64":{
                            id:"60_64",
                            label:"60-64",
                            metrics:{
                                metric1:2839.9201628325,
                                metric2:3533.2134484488
                            }
                        },
                        "65_69":{
                            id:"65_69",
                            label:"65-69",
                            metrics:{
                                metric1:1842.4615829203,
                                metric2:2342.1354440509
                            }
                        },
                        "70_74":{
                            id:"70_74",
                            label:"70-74",
                            metrics:{
                                metric1:1636.6852779496,
                                metric2:2320.8755665378
                            }
                        },
                        "75_79":{
                            id:"75_79",
                            label:"75-79",
                            metrics:{
                                metric1:1431.5378781567,
                                metric2:2240.2752747125
                            }
                        },
                        "80_84":{
                            id:"80_84",
                            label:"80-84",
                            metrics:{
                                metric1:1041.4069427453,
                                metric2:1876.2307455174
                            }
                        },
                        "85_89":{
                            id:"85_89",
                            label:"85-89",
                            metrics:{
                                metric1:702.3583208677,
                                metric2:1494.1074571902
                            }
                        },
                        "90_94":{
                            id:"90_94",
                            label:"90-94",
                            metrics:{
                                metric1:150.2544848179,
                                metric2:505.3813386443
                            }
                        },
                        "95+":{
                            id:"95+",
                            label:"95+",
                            metrics:{
                                metric1:37.1580348129,
                                metric2:203.0479606117
                            }
                        }
                    },
                    metric1:{
                        label:"Hommes"
                    },
                    metric2:{
                        label:"Femmes"
                    }
                }
            },
            "timeseries":{
                id:"timeseries",
                type:"timeseries",
                name:"Timeseries",
                data:{
                    title:"Un taux de natalité plus fort à Amiens que dans le département ou le territoire français",
                    subtitle:"Évolution du taux de natalité, en ‰",
                    series:{
                        "Amiens":{
                            name:"Amiens",
                            data:[24.4,22.5,22.6,22.6,22.6,22,21.9,21.7,21.3,21,20.5,19.5,19.3,21.6,21.3,20.9,20.9,20.9,21.3,20.9,20.4,20.2,20.1,20,20.4,19.9,19.9,19.7,21.8,21.2,20.8,20.1,19.9,19.9,19.1,18.5,18]
                        },
                        "Département":{
                            name:"Département (Somme)",
                            data:[17.9,16.4,16.4,16.4,16.3,15.8,15.7,15.5,15.2,15,14.6,13.8,13.7,13.9,13.9,16.1,15.8,15.6,15.8,15.4,15,14.7,14.6,14.5,14.7,14.3,14.3,14.1,14.2,13.9,13.7,13.3,15.6,15.3,14.5,13.9,13.4]
                        },
                        "France":{
                            name:"France",
                            data:[14.8,13.8,14,14.1,14.2,13.9,13.9,13.8,13.6,13.5,13.2,12.6,12.5,12.8,12.8,12.7,12.8,12.9,13.3,13.1,12.9,12.8,12.8,12.8,13.1,12.8,12.9,12.8,12.9,12.7,12.6,12.3,12.3,12.4,12,11.7,11.4]
                        }
                    }
                }
            },
            "waterfall":{
                id:"waterfall",
                type:"waterfall",
                name:"Waterfall",
                data:{
                    title:"Un solde naturel positif",
                    subtitle:"Solde naturel, en nombre d’habitants en 2015",
                    series:{
                        "naissances":{
                            id:"naiassances", 
                            name:"Naissances",
                            value:1689
                        },
                        "deces":{
                            id:"deces", 
                            name:"Décès",
                            value:1048
                        },
                        "solde":{
                            id:"solde", 
                            name:"Solde naturel",
                            value:641
                        },
                    }
                }
            },
            "donut":{
                id:"donut",
                type:"donut",
                name:"Donut",
                data:{
                    title:"Une majorité de T3 dans les logements",
                    subtitle:"Répartition du nombre logements par nombre de pièces, 2015",
                    series:{
                        "Studio":{
                            name:"Studio",
                            value:22
                        },
                        "T2":{
                            name:"T2",
                            value:18
                        },
                        "T3":{
                            name:"T3",
                            value:34
                        },
                        "T4 et plus":{
                            name:"T4 et plus",
                            value:26
                        }
                    }
                }
            },
            "stacked-column":{
                id:"stacked-column",
                type:"stacked-column",
                name:"Stacked columns",
                data:{
                    title:"Une part de bacheliers scientifiques plus grande à Amiens qu’au niveau du département",
                    subtitle:"Répartition du nombre bacheliers par série, en 2015",
                    suffix:"%",
                    categories:{
                        "amiens":{
                            id:"amiens",
                            label:"Amiens",
                            metrics:{
                                metric1:30,
                                metric2:12,
                                metric3:57
                            }
                        },
                        "departement":{
                            id:"departement",
                            label:"Département",
                            metrics:{
                                metric1:21,
                                metric2:27,
                                metric3:52
                            }
                        },
                        "france":{
                            id:"france",
                            label:"France",
                            metrics:{
                                metric1:68,
                                metric2:5,
                                metric3:26
                            }
                        }
                    },
                    metric1:{
                        label:"Série ES"
                    },
                    metric2:{
                        label:"Série L"
                    },
                    metric3:{
                        label:"Série S"
                    }
                }
            },
            "stacked-column-2":{
                id:"stacked-column-2",
                type:"stacked-column",
                name:"Stacked columns 2",
                data:{
                    title:"Des impôts locaux globalement supérieurs à la moyenne départementale",
                    subtitle:"Impôts locaux, en euros en 2015",
                    suffix:"€",
                    categories:{
                        "amiens":{
                            id:"amiens",
                            label:"Amiens",
                            metrics:{
                                metric1:619,
                                metric2:402,
                            }
                        },
                        "departement":{
                            id:"departement",
                            label:"Département",
                            metrics:{
                                metric1:602,
                                metric2:413,
                            }
                        },
                        "france":{
                            id:"france",
                            label:"France",
                            metrics:{
                                metric1:590,
                                metric2:390,
                            }
                        }
                    },
                    metric1:{
                        label:"Taxe d'habitation"
                    },
                    metric2:{
                        label:"Taxe foncière"
                    }
                }
            },
            "treemap":{
                id:"treemap",
                type:"treemap",
                name:"Treemap",
                data:{
                    title:"Une majorité d’entreprises dans le secteur des transports",
                    subtitle:"Répartition du nombre d’entreprises par secteur, en 2015",
                    series:[{
                        name: 'Construction',
                        value: 7.8
                    }, {
                        name: 'Industries',
                        value: 5,
                        colorValue: 2
                    }, {
                        name: 'Commerce',
                        value: 19.4,
                        colorValue: 3
                    }, {
                        name: 'Administration publique',
                        value: 20,
                        colorValue: 4
                    }, {
                        name: 'Transports',
                        value: 47.7,
                        colorValue: 5
                    }]
                }
            },
            "area-chart":{
                id:"area-chart",
                type:"area-chart",
                name:"Area Chart",
                data:{
                    title:"Les transports : un secteur en croissance à Amiens",
                    subtitle:"Répartition par année des créations d’entreprises par secteur",
                    categories:{
                        "2012":{
                            label:"2012",
                            metrics:{
                                metric1:7.8,
                                metric2:5,
                                metric3:19.4,
                                metric4:20,
                                metric5:47.7
                            }
                        },
                        "2013":{
                            label:"2013",
                            metrics:{
                                metric1:7.3,
                                metric2:5.5,
                                metric3:20.4,
                                metric4:19.5,
                                metric5:47.3
                            }
                        },
                        "2014":{
                            label:"2014",
                            metrics:{
                                metric1:6.8,
                                metric2:6,
                                metric3:19.9,
                                metric4:19,
                                metric5:48.3
                            }
                        },
                        "2015":{
                            label:"2015",
                            metrics:{
                                metric1:6.3,
                                metric2:6.5,
                                metric3:19.4,
                                metric4:18.5,
                                metric5:49.3
                            }
                        },
                        "2016":{
                            label:"2016",
                            metrics:{
                                metric1:5.8,
                                metric2:7,
                                metric3:20.4,
                                metric4:18,
                                metric5:48.8
                            }
                        },
                        "2017":{
                            label:"2017",
                            metrics:{
                                metric1:4.8,
                                metric2:7.5,
                                metric3:19.4,
                                metric4:17,
                                metric5:51.3
                            }
                        }
                    },
                    metric1:{
                        label:"Construction"
                    },
                    metric2:{
                        label:"Industries"
                    },
                    metric3:{
                        label:"Commerce"
                    },
                    metric4:{
                        label:"Administration publique"
                    },
                    metric5:{
                        label:"Transports"
                    }
                }
            },
            "gauges":{
                id:"gauges",
                type:"gauges",
                name:"Gauges",
                data:{
                    title:"Les hommes davantage touchés par le chômage",
                    subtitle:"Répartition des chômeurs par sexe, en %"
                }
            }
        };


        this.syllabsGraphs = {};

        var Utils = require("utils");
        this.utils = new Utils();

        var HeaderView = require("views/headerView");
        this.headerView = new HeaderView();

        this.SyllabsGraphView = require("views/syllabsGraphView");

        this.StackedBarView = require("views/stackedBarView");
        this.PyramidChartView = require("views/pyramidChartView");
        this.TimeseriesView = require("views/timeseriesView");
        this.WaterfallChartView = require("views/waterfallChartView");
        this.DonutView = require("views/donutView");
        this.StackedColumnView = require("views/stackedColumnView");
        this.TreemapView = require("views/treemapView");
        this.AreaChartView = require("views/areaChartView");
        this.GaugesView = require("views/gaugesView");

        var Router = require("router");
        this.router = new Router();

        Backbone.history.start();
    },

    updateFromRouter:function(){
        var self = this;
        this.utils.gatherData(function(){
            self.render();
        });
    },

    render:function(){
        this.renderSyllabsGraphs();

        this.bindEvents();
        this.update();
    },

    renderSyllabsGraphs:function(){
        var self = this
        _.each(this.syllabsGraphsParams, function(sg){
            self.syllabsGraphs[sg.id] = new self.SyllabsGraphView(sg.id, sg.type, sg.name, sg.data);
            self.syllabsGraphs[sg.id].render();
        });
    },

    update:function(){
        var self = this;
        
        this.router.updateRoute();
    },

    bindEvents:function(){
        var self = this;
    },

    testCode:function(){
        var myChart = new Highcharts.chart({
            "chart": {
                "type": "bar",
                "renderTo": "TestCode",
                "backgroundColor": "transparent"
            },
            "title": {
                "text": "Les femmes, plus nombreuses dans les tranches d’âge élevées"
            },
            "subtitle": {
                "text": "Répartition de la population par sexe et par tranche d’âge, en 2015"
            },
            "colors": [
                "#81beec",
                "#547a98"
            ],
            "credits": {
                "enabled": false
            },
            "xAxis": [
                {
                    "categories": [
                        "0-4",
                        "5-9",
                        "10-14",
                        "15-19",
                        "20-24",
                        "25-29",
                        "30-34",
                        "35-39",
                        "40-44",
                        "45-49",
                        "50-54",
                        "55-59",
                        "60-64",
                        "65-69",
                        "70-74",
                        "75-79",
                        "80-84",
                        "85-89",
                        "90-94",
                        "95+"
                    ],
                    "reversed": false,
                    "labels": {
                        "step": 1
                    },
                    "index": 0,
                    "isX": true
                },
                {
                    "opposite": true,
                    "reversed": false,
                    "categories": [
                        "0-4",
                        "5-9",
                        "10-14",
                        "15-19",
                        "20-24",
                        "25-29",
                        "30-34",
                        "35-39",
                        "40-44",
                        "45-49",
                        "50-54",
                        "55-59",
                        "60-64",
                        "65-69",
                        "70-74",
                        "75-79",
                        "80-84",
                        "85-89",
                        "90-94",
                        "95+"
                    ],
                    "linkedTo": 0,
                    "labels": {
                        "step": 1
                    },
                    "index": 1,
                    "isX": true
                }
            ],
            "yAxis": {
                "title": {
                    "text": null
                },
                "labels": {
                    "formatter": function () {                   return Math.abs(this.value);               }
                }
            },
            "legend": {
                "verticalAlign": "top"
            },
            "plotOptions": {
                "series": {
                    "stacking": "normal"
                }
            },
            "tooltip": {
                "backgroundColor": "#fff",
                "borderWidth": 0,
                "useHTML": true,
                "formatter": function(){         return "<div class='highcharts-tooltip_div'><span class='tooltip_label'>"+this.point.category+"</span><br /><span class='tooltip_value'>"+Math.abs(this.point.y).toFixed(0)+"</span></div>";        }
            },
            "series": [
                {
                    "name": "Hommes",
                    "data": [
                        -4295.6082391014,
                        -3997.5918894037,
                        -3692.1754463615,
                        -5379.8330548345,
                        -7558.3765292462,
                        -5865.9384007114,
                        -4641.0494224737,
                        -4079.1226704934,
                        -3849.8952403884,
                        -3520.5121564451,
                        -3212.6138048644,
                        -3210.2824326412,
                        -2839.9201628325,
                        -1842.4615829203,
                        -1636.6852779496,
                        -1431.5378781567,
                        -1041.4069427453,
                        -702.3583208677,
                        -150.2544848179,
                        -37.1580348129
                    ],
                    "_colorIndex": 0
                },
                {
                    "name": "Femmes",
                    "data": [
                        4011.7072697132,
                        3706.0460737371,
                        3609.6662371997,
                        5643.3913716368,
                        8531.1215698988,
                        5796.6335597594,
                        4406.0507117303,
                        4169.1003613409,
                        4031.7547303232,
                        3885.7425582986,
                        4143.2456813561,
                        3907.2710722249,
                        3533.2134484488,
                        2342.1354440509,
                        2320.8755665378,
                        2240.2752747125,
                        1876.2307455174,
                        1494.1074571902,
                        505.3813386443,
                        203.0479606117
                    ],
                    "_colorIndex": 1
                }
            ]
        });
    }

};

module.exports = App;
window.App = App;