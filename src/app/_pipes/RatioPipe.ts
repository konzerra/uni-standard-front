
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ratio'
})
export class RatioPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return '';
    }


    return `${value.toPrecision(2)}`;
  }
}
