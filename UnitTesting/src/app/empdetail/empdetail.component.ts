import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  text='Emp Detail Page';
  emp;
  constructor(private empService:EmpService) {
    this.emp=this.empService.getUsers();
   }

  ngOnInit(): void {
  }

}

