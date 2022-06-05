import {
  Component,
  Input,
  AfterViewChecked,
} from '@angular/core';
import {
  ChartInitializerService,
  IChartConfig,
} from 'src/app/services/chart-initializer.service';

@Component({
  selector: 'app-canvas-wrap',
  templateUrl: './canvas-wrap.component.html',
  styleUrls: ['./canvas-wrap.component.css'],
})
export class CanvasWrapComponent implements AfterViewChecked {
  @Input() chartConfig: IChartConfig = {
    id: '',
    labels: [],
    values: [],
    isPercentage: false,
    prefix: '',
    suffix: '',
  };
  chartLoaded = false;
  constructor(private chartInitializer: ChartInitializerService) {}
  ngAfterViewChecked() {
    const canvasRendered = document.getElementById(this.chartConfig.id);
    if (canvasRendered && !this.chartLoaded) {
      this.chartInitializer.showChart(this.chartConfig);
      this.chartLoaded = true;
    }
  }
}
