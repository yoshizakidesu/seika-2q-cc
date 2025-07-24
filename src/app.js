import Chart from 'chart.js/auto';

const labels = [
  'プレゼン力',
  'チームワーク',
  'Adobeスキル',
  'コーディング',
  'タイムマネジメント',
];

// 大学1回生のスキル
const dataYear1 = [2, 3, 1, 1, 2];

// 現在のスキル
const dataNow = [4, 4, 3, 3, 4];

// グラフ1：大学1回生
new Chart(document.getElementById('year1'), {
  type: 'radar',
  data: {
    labels: labels,
    datasets: [
      {
        label: '大学1回生',
        data: dataYear1,
        backgroundColor: 'rgba(96, 165, 250, 0.2)',
        borderColor: 'rgba(96, 165, 250, 1)',
        pointBackgroundColor: 'rgba(96, 165, 250, 1)',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1 },
      },
    },
  },
});

// グラフ2：現在
new Chart(document.getElementById('now'), {
  type: 'radar',
  data: {
    labels: labels,
    datasets: [
      {
        label: '現在',
        data: dataNow,
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1 },
      },
    },
  },
});

document.getElementById('button1').addEventListener('click', () => {
  document.getElementById('year1').style.display = 'block';
  document.getElementById('now').style.display = 'none';
});

document.getElementById('button2').addEventListener('click', () => {
  document.getElementById('year1').style.display = 'none';
  document.getElementById('now').style.display = 'block';
});
