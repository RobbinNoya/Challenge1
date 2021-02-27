var options = {
    series: [78, 99, 85],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
          
        },
        total: {
          show: true,
          label: 'Aantal in Liters',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['Brandstof', 'Zuurstof', 'water'],
};

  var chart = new ApexCharts(document.querySelector("#vloeistof"), options);
  chart.render();
