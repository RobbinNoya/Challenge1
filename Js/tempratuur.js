var options = {
    series: [{
    name: 'Tempratuur buiten',
    type: 'area',
    data: [0, 3, 7, 0, 1, 3, 9, 2, 0, 9, 0]
  }, {
    name: 'Tempratuur binnen',
    type: 'line',
    data: [20, 16, 23, 25, 14, 20, 20, 22, 20, 19, 20]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Tempratuur buiten',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Tempratuur binnen',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + "";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#tempratuur"), options);
  chart.render();