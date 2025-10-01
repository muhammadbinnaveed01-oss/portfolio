
// Get canvas (make sure your HTML has <canvas id="Doughnut"></canvas>)
const ctx = document.getElementById('Doughnut').getContext('2d');

// Pie chart data
const data = {
  labels: [
   'frontend','backend','others'
  ],
  datasets: [{
    label: 'skill distributions',
    data: [100, 50, 80],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
// Config
const config = {
  type: 'doughnut', // or 'pie'
  data: data
};

// Create chart
new Chart(ctx, config);
