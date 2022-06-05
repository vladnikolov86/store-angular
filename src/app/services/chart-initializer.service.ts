import { Injectable } from '@angular/core';
import {
  Chart,
  LinearScale,
  BarController,
  CategoryScale,
  ArcElement,
  PieController,
  Tooltip,
} from 'chart.js';
export interface IChartConfig {
  id: string;
  labels: string[];
  values: number[];
  prefix: string;
  suffix: string;
  isPercentage: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ChartInitializerService {
  constructor() {
    Chart.register(
      LinearScale,
      BarController,
      CategoryScale,
      PieController,
      ArcElement,
      Tooltip
    );
  }

  showChart(config: IChartConfig) {
    const canvasElement = document.getElementById(
      config.id
    )! as HTMLCanvasElement;
    const ctx = canvasElement.getContext('2d') as CanvasRenderingContext2D;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: config.labels,
        datasets: [
          {
            data: config.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            displayColors: false,
            enabled: true,
            callbacks: {
              label: (context) => {
                const prefix = config.prefix ? `${config.prefix} ` : '';
                const suffix = config.suffix ? ` ${config.suffix}` : '';
                let label = `${prefix}${context.label} ${context.parsed}${
                  config.isPercentage ? '%' : ''
                }${suffix}`;

                return label;
              },
            },
          },
        },
      },
    });
  }
}
