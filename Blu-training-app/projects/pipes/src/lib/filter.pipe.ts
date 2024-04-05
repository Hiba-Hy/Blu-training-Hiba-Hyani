import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data) return [];
    if (!searchText) return [];

    searchText = searchText.toLowerCase();
    return data.filter(data => {
      return Object.keys(data).some(key => {
        const value = data[key];
        return value && value.toString().toLowerCase().includes(searchText);
      });
    });
  } 
}
