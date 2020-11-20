function makeGraph() {

    Chart.defaults.global.legend.display = false;
         
    // Grab the chart canvas
    var ctx = document.getElementById('myChart');

    // Set Values
    var cold = 32 - stat.temp
    var hot = stat.temp

    // Make the Chart
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Hot', 'Cold',],
            datasets: [{
                label: 'Temperature',
                data: [hot, cold],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },

        // Set our options. 
        options: {

            // Won't react to anything else
            events: [],

            // No Animation
            animation: {
                duration: 0
            },
        }
    });
}