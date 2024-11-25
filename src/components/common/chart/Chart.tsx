import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DATA_COUNT = 7;

const Utils = {
  months: ({ count }: { count: number }) => Array.from({ length: count }, (_, i) => `Month ${i + 1}`),
  numbers: ({ count, min, max }: { count: number; min: number; max: number }) =>
    Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  CHART_COLORS: { red: 'rgb(255, 99, 132)' },
  transparentize: (color: string, opacity: number) =>
    color.replace('rgb', 'rgba').replace(')', `, ${opacity})`),
};

const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
const data = {
  labels: Utils.months({ count: DATA_COUNT }),
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
  ],
};

const options: ChartOptions<'line'> = {
  plugins: {
    title: {
      display: true,
      text: 'Tiigers of Kolkata',
      align: 'center', // Correctly typed alignment
    },
  },
  responsive: true,
};

const LineChart: React.FC = () => {
  const chartRef = useRef<ChartJS<'line'> | null>(null);

  const actions = [
    {
      name: 'Title Alignment: start',
      handler: () => {
        if (chartRef.current) {
          chartRef.current.options.plugins!.title!.align = 'start';
          chartRef.current.update();
        }
      },
    },
    {
      name: 'Title Alignment: center (default)',
      handler: () => {
        if (chartRef.current) {
          chartRef.current.options.plugins!.title!.align = 'center';
          chartRef.current.update();
        }
      },
    },
    {
      name: 'Title Alignment: end',
      handler: () => {
        if (chartRef.current) {
          chartRef.current.options.plugins!.title!.align = 'end';
          chartRef.current.update();
        }
      },
    },
  ];

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
      <div style={{ marginTop: '1rem' }}>
        {actions.map((action, index) => (
          <button key={index} onClick={action.handler} style={{ marginRight: '0.5rem' }}>
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
