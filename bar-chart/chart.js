var election = 
  [
    {"region":"Alamosa", "value":  4},
    {"region":"Douglas", "value":  8},
    {"region":"Jackson", "value": 15},
    {"region":"Mesa"   , "value": 16},
    {"region":"Pueblo" , "value": 23}
  ];

////////// v  code goes below v //////////

var maxValue = 0;
for (var i=0; i < election.length; i++) {
  if(election[i].value > maxValue) {
    maxValue = election[i].value;
  }
}

var x = d3.scale.linear()
    .domain([0, maxValue])
    .range([0, 420]);

d3.select(".bar-chart")
  .selectAll("div")
    .data(election)
  .enter().append("div")
    .style("width", function(d) { return x(d.value) + "px"; })
    .text(function(d) { return d.region; });
