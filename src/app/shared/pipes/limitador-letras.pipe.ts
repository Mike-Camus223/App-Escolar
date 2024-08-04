import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitadorLetras'
})
export class LimitadorLetrasPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}