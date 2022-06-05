import { Component, AfterViewInit, Input } from '@angular/core';
import {
  Chart,
  LinearScale,
  BarController,
  CategoryScale,
  ArcElement,
  PieController,
  Tooltip,
} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @Input() chartId = '';
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() isPercentage = false;
  @Input() labels: string[] = [];
  @Input() values: number[] = [];
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

  ngAfterViewInit(): void {
    const canvasElement = document.getElementById(
      this.chartId
    )! as HTMLCanvasElement;
    const ctx = canvasElement.getContext('2d') as CanvasRenderingContext2D;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.values,
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
                const prefix = this.prefix ? `${this.prefix} ` : '';
                const suffix = this.suffix ? ` ${this.suffix}` : '';
                let label = `${prefix}${context.label} ${context.parsed}${
                  this.isPercentage ? '%' : ''
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
