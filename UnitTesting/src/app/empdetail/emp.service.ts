import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getUsers():Array<{}>{
    return[
      {
        location:'place1',
        phone:'number1',
        background:'CS'
      },
      {
        location:'place2',
        phone:'number2',
        background:'ECE'
      },
      {
        location:'place3',
        phone:'number3',
        background:'IT'
      },
      {
        location:'place4',
        phone:'number4',
        background:'EEE'
      },
      {
        location:'place5',
        phone:'number5',
        background:'CS'
      },
    ];
  }
}
