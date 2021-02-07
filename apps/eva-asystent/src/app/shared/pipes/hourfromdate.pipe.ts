import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';

@Pipe({
  name: 'hourfromdate'
})
export class HourfromdatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: Date): string {
    return formatNumber(new Date(value).getHours(), this.locale, '2.0').toString()
    + ':' + formatNumber(new Date(value).getMinutes(), this.locale, '2.0').toString();
  }

}
