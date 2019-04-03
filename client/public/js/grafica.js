
$.ajax({
    url:"http//localhost:4000/teams",
    type:"GET",
    success:(res)=>{
        ajaxSuccess(res,function(res){
            var datos= res.teams;
            console.log(datos)
    var bestPlayer = []
            
    for (let i = 0; i < datos.length; i++) {
         bestPlayer.push(datos[i].G);
    }

            var svgWidth = 500, svgHeight = 300, barPadding = 5;
            var barWidth = svgWidth / datos.length;
            var svg = d3.select('svg')
                .attr("width", svgWidth)
                .attr("height", svgHeight);
                
            var barChart = svg.selectAll("rect")
                .data(datos)
                .enter()
                .append("rect")
                .attr("y", function(d) {
                     return svgHeight - d 
                })
                .attr("height", function(d) { 
                    return d; 
                })
                .attr("width", barWidth - barPadding)
                .attr("class", "bar")
                .attr("transform", function (d, i) {
                    var translate = [barWidth * i, 0]; 
                    return "translate("+ translate +")";
                });
            
            var text = svg.selectAll("text")
                .data(datos)
                .enter()
                .append("text")
                .text(function(d) {
                    return d;
                })
                .attr("y", function(d, i) {
                    return svgHeight - d - 2;
                })
                .attr("x", function(d, i) {
                    return barWidth * i;
                })
                .attr("fill", "#F0B27A");

        })
    }
});