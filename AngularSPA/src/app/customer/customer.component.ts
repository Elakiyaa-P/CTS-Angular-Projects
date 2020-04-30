import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
data:any;
  constructor(private http: HttpClient) { }

  onGet(){
  this.http.get('http://localhost:3000/customer')
    .subscribe(data=>{
      console.log(data);
    });
  }

  onPost(){
    this.http.post('http://localhost:3000/customer',
    {
      "cust_name": "Nandhu",
      "cust_id": "853232",
      "cust_phone": "9790180198",
      "location": "Chennai",
      "address": "Arakonam"
    })
    .subscribe(
        res => { console.log(res); 
          console.log('Customer is added to the database')},
        err => { console.log("Error occured");}
      );
  }

  onPut(){
    this.http.put('http://localhost:3000/customer/853232',
    {
      "cust_name": "Neena",
      "cust_id": "853232",
      "cust_phone": "9790180198",
      "location": "Chennai",
      "address": "Arakonam"
    })
    .subscribe(
        res => { console.log(res); 
          console.log('Customer is edited to the database')},
        err => { console.log("Error occured");}
      );
  }

  onDelete(){
    this.http.delete('http://localhost:3000/customer/853232')
    .subscribe(
      res => { console.log(res); 
        console.log('Customer is deleted in the database')},
      err => { console.log("Error occured");}
    );
  }

  ngOnInit(): void {  }
}


