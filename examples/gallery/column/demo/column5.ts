import { Chart } from '@antv/g2';

const data = [
  { type: '1-3秒', value: 0.16 },
  { type: '4-10秒', value: 0.125 },
  { type: '11-30秒', value: 0.24 },
  { type: '31-60秒', value: 0.19 },
  { type: '1-3分', value: 0.22 },
  { type: '3-10分', value: 0.05 },
  { type: '10-30分', value: 0.01 },
  { type: '30+分', value: 0.015 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
  padding: [20, 20, 50, 40],
});
chart.data(data);
chart.axis('type', {
  label: {
    style: {
      fill: '#aaaaaa',
    },
  },
  tickLine: {
    length: 0,
  },
  alignTick: true,
});

chart.axis('value', {
  label: {
    style: {
      fill: '#aaaaaa',
    },
    formatter: (val) => {
      return String(parseFloat(val * 100)) + '%';
    },
  },
});
chart.legend(false);
chart
  .interval()
  .position('type*value')
  .color('type', (val) => {
    if (val === '10-30分' || val === '30+分') {
      return '#ff4d4f';
    }
    return '#2194ff';
  })
  .label('value', {
    content: (data) => {
      const val = parseFloat(data.value);
      if (val < 0.05) {
        return (val * 100).toFixed(1) + '%';
      }
    },
    offset: 10,
  });

chart.render();