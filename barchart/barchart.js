var data = [4,8,15,16,23,42]; 
var chart = d3.select(".chart"); // first obj .chart, selectAll for all!
var bar = chart.selectAll("div"); 

var linearScale = d3.scale.linear()
	.domain([0, d3.max(data)]) // kind of like x 
	.range([0, 420]); // kind of like y

var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div"); // the method append has the new things we've added   

barEnter.text(function(d){
	return d; 
});

barEnter.style("width", function(d){
	return linearScale(d) + "px" 
}); 

