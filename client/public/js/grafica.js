
$.ajax({
    url:"http://localhost:4000/teams",
    type:"GET",
    success:(res)=>{
        ajaxSuccess(res,function(res){
            var datos= res.teams;
            console.log(datos)
    var bestPlayer = []
            
    for (let i = 0; i < datos.length; i++) {
         bestPlayer.push(datos[i].G);
    }
            var count = -1;

            var svgWidth = 700, svgHeight = 300, barPadding = 30;
            var barWidth = svgWidth / bestPlayer.length;
            var svg = d3.select('svg')
                .attr("width", svgWidth)
                .attr("height", svgHeight);
                
            var barChart = svg.selectAll("rect")
                .data(bestPlayer)
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
                .data(bestPlayer)
                .enter()
                .append("text")
                .text(function(d) {
                    count++;
                    return datos[count].name;
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