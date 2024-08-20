import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexFill, ApexDataLabels, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  colors?: string[];
  stroke?: ApexStroke;
};

@Component({
  selector: 'app-chartdonut',
  templateUrl: './chartdonut.component.html',
  styleUrls: ['./chartdonut.component.scss']
})
export class ChartdonutComponent {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [80, 20],
      chart: {
        type: "donut"
      },
      stroke: {
        show: false, 
        width: 0 
      },
      dataLabels: {
        enabled: true
      },
      labels: ["Presentes", "Ausentes"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
    };
  }
}
