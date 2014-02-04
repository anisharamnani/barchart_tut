var width = 420,
	barHeight = 20;

var linearScale = d3.scale.linear().range([0, width]);

var chart = d3.select(".chart")
.attr("width", width);

// LOAD THE DATA!!
d3.csv("data.csv", type, function(error, data){
	linearScale.domain([0, d3.max(data, function(d) { return d.value; })]);
	chart.attr("height", data.length * barHeight);

	var bar = chart.selectAll("g")
		.data(data)
		.enter().append("g")
		.attr("transform", function(d,i){
			return "translate(0," + i * barHeight + ")"; });

	bar.append("rect").attr("width", function(d){ return linearScale(d.value) - 3;}).attr("height", barHeight - 3);
	bar.append("text")
		.attr("x", function(d) {return linearScale(d.value)-3;})
		.attr("y", barHeight / 2)
		.attr("dy", ".35em")
		.text(function(d) { return d.value;});
	});

function type(d) {
	d.value = +d.value;
	return d;
}