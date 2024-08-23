import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import swall from 'sweetalert2';
import { alertsweet } from '../models/alertsweet.interface';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  private notifysweet$ = new Subject<alertsweet>();

  constructor() { 
    this.notifysweet$.subscribe ({
      next:(alertOptions) => {
        swall.fire({
          title: alertOptions.title,
          text: alertOptions.text,
          icon: alertOptions.icon,
          confirmButtonText: alertOptions.confirmButtonText,
        })
      }
    })
  }

  SendNotify(alertOptions:alertsweet) {
    this.notifysweet$.next(alertOptions);
  }
}
