import {Pipe, PipeTransform} from '@angular/core';
import {SafeHtml} from "@angular/platform-browser";
@Pipe ({
  name : 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: string): SafeHtml {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
