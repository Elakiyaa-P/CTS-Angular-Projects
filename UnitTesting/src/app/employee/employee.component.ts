import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  text='Employee Details Page';
  employeeForm: FormGroup;
  contact={
    firstName: ' ',
    lastName: ' ',
    salary: ' ',
    street1: ' ',
    street2: ' ',
    location: ' '
  };
  submitted=false;

  constructor() {
    this.createForm();
  }

  createForm():void{
    this.employeeForm=new FormGroup({
      'firstName': new FormControl(this.contact.firstName, [
        Validators.required,
        Validators.minLength(5)
      ]),
      'lastName': new FormControl(this.contact.lastName, [
        Validators.required,
        Validators.minLength(5)
      ]),
      'salary': new FormControl(this.contact.salary, Validators.required),
      'street1': new FormControl(this.contact.street1, Validators.required),
      'street2': new FormControl(this.contact.street2, Validators.required),
      'location':new FormControl(this.contact.location, Validators.required)
    });
  }

  onSubmit(){
    this.submitted=true;
  }

  ngOnInit(): void {
  }

}

