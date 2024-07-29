import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-status',
  templateUrl: './card-info-status.component.html',
  styleUrl: './card-info-status.component.scss'
})
export class CardInfoStatusComponent {

  @Input() Icono: string = '';
  @Input() IconoColor: string = '';
  @Input() FondoColor: string = '';
  @Input() Titu: string = '';
  @Input() Numero: number = 0;
  @Input() Tama: string = '';

}
