google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    console.log("packages have been loaded");
    // var variableName;
    // const variableName;
    // let variableName;

    const data = google.visualization.arrayToDataTable([
        ["Year", "Birth", "Deaths", "Marrages"],
        ["2013", 58719, 29568, 19237],
        ["2014", 57243, 31062, 20125],
        ["2015", 61038, 31608, 19947],
        ["2016", 59430, 31176, 20235]
    ]);

    const options = {
        title: "Births, Deaths and Marrages from New Zealand",
        subtitle: "From 2013 to 2016",
        hAxis: {
            title: "Number"
        },
        vAxis: {
            title: "Year"
        }
    }

    const chart = new google.visualization.BarChart(document.getElementById("chartContainer"));
    chart.draw(data, options);
}








//End of page
