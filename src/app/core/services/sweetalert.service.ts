import { Injectable } from '@angular/core';
import swall, { SweetAlertResult } from 'sweetalert2';
import { alertsweet } from '../models/alertsweet.interface';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  SendNotify(alertOptions: alertsweet): Promise<SweetAlertResult<any>> {
    return swall.fire({
      title: alertOptions.title,
      text: alertOptions.text,
      icon: alertOptions.icon,
      confirmButtonText: alertOptions.confirmButtonText,
    });
  }
}
