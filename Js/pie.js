var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Ontbijt', 'Groente', 'Fruit', 'vlees', 'zoetigheid'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 380
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pie"), options);
  chart.render();


