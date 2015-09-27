var election =
  [
    {"region":"Alamosa", "value":  4},
    {"region":"Boulder", "value":  6},
    {"region":"Custer" , "value":  9},
    {"region":"Douglas", "value": 13},
    {"region":"Grand"  , "value": 18},
    {"region":"Jackson", "value": 24},
    {"region":"Mesa"   , "value": 31},
    {"region":"Pueblo" , "value": 40}
  ];

var x = d3.scale.linear();
var maxTurnOut = function(elect){
    for(var i = 0, res = 0; i < election.length; i++){
        if (election[i]['value'] > res){
            res = election[i]['value'];
        }
    }
    return res;
}(election);
x.range([0, 420]);
x.domain([0, maxTurnOut]);

var chart = d3.select('.bar-chart');
var dataBound = chart.selectAll('div').data(election);

var enter = dataBound.enter();
var enterBar = dataBound.enter().append('div');

enterBar.style("width", function(d) { return x(d.value) + "px"; });
enterBar.text(function(d){
    return d.region;
})
