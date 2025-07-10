import Chart from 'chart.js/auto';

(async function () {
  const data = [
    { subject: '国語', count: 60 },
    { subject: '数学', count: 55 },
    { subject: '理科', count: 80 },
    { subject: '社会', count: 75 },
    { subject: '英語', count: 65 },
  ];

  new Chart(document.getElementById('school'), {
    type: 'bar',
    data: {
      labels: data.map((row) => row.subject),
      datasets: [
        {
          label: '点',
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
