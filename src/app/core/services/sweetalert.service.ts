import { Injectable } from '@angular/core';
import swall, { SweetAlertResult } from 'sweetalert2';
import { alertsweet } from '../models/alertsweet.interface';
import { confirmAlertsweet, confirmsuccessweet } from '../models/confirmsweet.interface';
import Swal from 'sweetalert2';
import { ErrorSweet } from '../models/sweetError.interface';

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

  
  ConfirmNotify = (alertOptions: confirmAlertsweet, secondOption:confirmsuccessweet ): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
      title: alertOptions.title,
      text: alertOptions.text,
      icon: alertOptions.icon,
      showCancelButton: alertOptions.showCancelButton,
      confirmButtonColor: alertOptions.confirmButtonColor,
      cancelButtonColor: alertOptions.cancelButtonColor,
      confirmButtonText: alertOptions.confirmButtonText
    }).then((result) => {
      if (result.isConfirmed) {
        return Swal.fire({
          title: secondOption.title,
          text: secondOption.text,
          icon: secondOption.icon
        });
      } else {
        return Promise.resolve(result);
      }
    }); 
  }

  ErrorNotify = (errorsweet: ErrorSweet): Promise<SweetAlertResult<any>> =>{
    return swall.fire ({
      title: errorsweet.title,
      text: errorsweet.text,
      icon: 'error',
      confirmButtonText: 'Confirmar'
    });
  }
}
