queue()
    .defer(d3.json, "/app/assets")
    .await(makeGraphs);

function makeGraphs(error, assetsJson) {
	
//Start Transformations
	var dataSet = assetsJson;

		//Create a Crossfilter instance
	var ndx = crossfilter(dataSet);

	//Define Dimensions
	var ram = ndx.dimension(function(d) { return d.ram; });
	var cpu = ndx.dimension(function(d) { return d.cpu; });
	var os = ndx.dimension(function(d) { return d.os; });
	var type = ndx.dimension(function(d) { return d.type; });
	
	//Calculate metrics
	var projectsByRam = ram.group(); 
	var projectsByCpu = cpu.group();
	var projectsByOs = os.group();
	var projectsByType = type.group();
	
	var all = ndx.groupAll();

    //Charts
	var ramChart = dc.rowChart("#ram-chart");
	var cpuChart = dc.rowChart("#cpu-chart");
	var osChart = dc.rowChart("#os-chart");
	var typeChart = dc.rowChart("#type-chart");
	
	ramChart
		.width(300)
		.height(220)
        .dimension(ram)
        .group(projectsByRam)
        .xAxis().ticks(2); 	
		
	cpuChart
		.width(300)
		.height(220)
        .dimension(cpu)
        .group(projectsByCpu)
        .xAxis().ticks(2);
		
	osChart
		.width(300)
		.height(220)
        .dimension(os)
        .group(projectsByOs)
        .xAxis().ticks(2);
			
	typeChart
		.width(300)
		.height(220)
        .dimension(type)
        .group(projectsByType)
        .xAxis().ticks(2);
  
    dc.renderAll();

};