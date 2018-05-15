var Utils = Backbone.View.extend({

    initialize:function(){
        var self = this;
        this.trends = {};
        this.palettes = {
            "1":['#81beec', '#547a98', '#374f65', '#72a7cf', '#45647e'],
            "2":['#498f60', '#dbd942', '#15534c', '#a6c760', '#297159'],
            "3":['#b82e10', '#ff6238', '#8c0f00', '#e05029', '#a21f06']
        };

        this.highchartsParams = {
            title:{
                style:{
                    "color":"#222222",
                    "fontSize":"20px",
                    "fontFamily":"LatoWebBlack"
                }
            },
            subtitle:{
                style:{
                    "color":"#222222",
                    "fontSize":"14px",
                    "fontFamily":"LatoWeb"
                }
            },
            legend:{
                itemStyle:{
                    color:"#222222",
                    fontSize:"14px",
                    fontFamily:"LatoWeb",
                    fontWeight:"normal",
                }
            }
        }
    },

    gatherData:function(callback){
        var self = this;
        //return callback();
        this.gatherTrends(function(){
            return callback();
        });
    },

    gatherTrends:function(callback){
        var self = this;
        d3.csv("data/trends.csv", function(data){
            data.field = _.str.slugify(data.field);
            data.status = _.str.slugify(data.status);
            data.size = _.str.slugify(data.size);
            data.slugTrend = _.str.slugify(data.trend);
            data.strLinks = data.links.split(",");
            data.links = [];
            _.each(data.strLinks, function(link){
                data.links.push(_.str.slugify(link));
            });
            self.trends[data.id] = data;
        }, function(error, rows) {
            console.log(error, rows);
            return callback();
        });
    },

    output:function(inp) {
        document.body.appendChild(document.createElement('pre')).innerHTML = inp;
    },

    syntaxHighlight:function(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    },

    deepStringify:function(obj){
        var deepString = JSON.stringify(obj,function(key, value){
            return (typeof value === 'function' ) ? value.toString() : value;
        }, 4);

        deepString = deepString.replace(/\"func/g, "func");
        deepString = deepString.replace(/\\n/g, " ");
        deepString = deepString.replace(/\\t/g, " ");
        deepString = deepString.replace(/}\"/g, "}");
        deepString = deepString.replace(/\\"/g, "\"");

        return deepString;
    }
});

module.exports = Utils;;