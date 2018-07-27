const studentData = [
    {
        food: "cake",
        count: 6
    },
    {
        food: "pie",
        count: 5
    },
    {
        food: "cheese",
        count: 2
    }
]

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    console.log("packages have been loaded");
    const data = new google.visualization.DataTable();
    data.addColumn("string", "Food");
    data.addColumn("number", "Count");

    for (var i = 0; i < studentData.length; i++) {
        data.addRow([studentData[i].food, studentData[i].count]);
    }

    const options = {
        title: "Cake vs Pie's"
    }

    const chart = new google.visualization.PieChart(document.getElementById("chartContainer"));
    chart.draw(data, options);

}







//end of file
