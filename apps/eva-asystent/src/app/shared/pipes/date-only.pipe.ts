import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { formatNumber, formatDate } from '@angular/common';

@Pipe({
  name: 'dateOnly'
})
export class DateOnlyPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: Date): string {
    return formatDate(value, 'yyyy-MM-dd', this.locale);
  }

}
