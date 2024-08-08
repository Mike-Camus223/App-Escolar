import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisaArg'
})
export class DivisaArgPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value === null || value === undefined) {
      return '';
    }

    const RedondearValor = Math.round(value);

    const Partir = RedondearValor.toString().split('.');
    
    const IntegrarPartes = Partir[0];
    const FormatIntegral = IntegrarPartes.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const FormatearIntegral = Partir[1] ? `.${Partir[1]}` : '';

    return `${FormatIntegral}${FormatearIntegral} ARS`;
  }
}
