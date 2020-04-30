import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flr'
})
export class FloorPipe implements PipeTransform {

  // transform(value:number): number {
  //   return Math.floor(value);
  // }

  transform(value: string): string {
    let newString: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newString += value.charAt(i);
    }
    return newString;
  }

}
