import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-data',
  templateUrl: './user-card-data.component.html',
  styleUrl: './user-card-data.component.scss'
})
export class UserCardDataComponent {

  @Input() Icono: string = '';
  @Input() IconoColor: string = '';
  @Input() FondoColor: string = '';
  @Input() Titu: string = '';
  @Input() Numero: number = 0;
  @Input() Tama: string = '';

}
