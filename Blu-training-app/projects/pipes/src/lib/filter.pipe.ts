import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], key: string, value: any): any[] {
    if (!data || !key || value === undefined) {
      return data; 
    }

    return data.filter((item) => item[key] === value);
  }
}
