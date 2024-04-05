import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
  standalone: true
})
export class PreRenderPipe implements PipeTransform {
  transform(text: string, option: string): string {
    switch (option) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'camelcase':
        return this.toCamelCase(text);
      default:
        return text; // No transformation for unknown options
    }
  }

  private toCamelCase(input: string): string {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}