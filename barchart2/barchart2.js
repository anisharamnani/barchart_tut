var data = [4,8,15,16,23,42]; 
var width = 420, 
	barHeight = 20; 

var linearScale = d3.scale.linear()
	.domain([0, d3.max(data)]) // kind of like x 
	.range([0, width]); // kind of like y

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", barHeight * data.length);

// select elements in the chart and join data
// element that we are binding to has an element text. we bind the element to the group 
var barUpdate = chart.selectAll("g") 
	.data(data);


// add new gs to the dom 
barUpdate.enter().append("g")
	.attr("transform", function(d,i){
		return "translate(0," + i * barHeight + ")";
	});

// add the shape so we can see it !
barUpdate.append("rect")
	.attr("width", linearScale)
	.attr("height", barHeight-3);

barUpdate.append("text")
	.attr("x", function(d){
		return linearScale(d-1);
	})
	.attr("y", barHeight / 2)
	.attr("dy", "0.35em")
	.text(function(d){
		return d; 
	});
