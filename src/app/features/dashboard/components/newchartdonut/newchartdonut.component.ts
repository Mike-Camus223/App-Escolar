import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-newchartdonut',
  templateUrl: './newchartdonut.component.html',
  styleUrl: './newchartdonut.component.scss'
})
export class NewchartdonutComponent {

  ausentesPorcentaje: number = 0;   
  presentesPorcentaje: number = 0;  
  
  ngOnInit() {
    Chart.register(...registerables);

    const ctx = document.getElementById('donutChart') as HTMLCanvasElement;

    const dataValues = [6, 94];
    const total = dataValues.reduce((a, b) => a + b, 0);

    this.ausentesPorcentaje = (dataValues[0] / total) * 100;  
    this.presentesPorcentaje = (dataValues[1] / total) * 100;

    new Chart(ctx, {
      type: 'doughnut', 
      data: {
        datasets: [{
          label: 'Aproximadamente',
          data: dataValues, 
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)', 
            'rgba(255, 205, 86, 0.8)', 
          ],
          hoverOffset: 4 
        }]
      },
      options: {
        cutout: '72%',
        animation: {
          duration: 1500, 
          easing: 'easeInOutQuad',
        },
        responsive: false, 
        plugins: {
          legend: {
            position: 'top', 
          },
          tooltip: {
            enabled: true 
          }
        }
      }
    });
  }
}
