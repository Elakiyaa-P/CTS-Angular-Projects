import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public response: Observable<any>

  constructor(public service:ProductService) { }
  
  public onGet(){
    this.service.getInfo().subscribe(result=>{
      this.response=result['product']
    });
  }

  public onPost() {
    this.service.insertInfo().subscribe(result => {
      console.log(result);
    });
  }

  public onPut() {
    this.service.updateInfo().subscribe(result => {
      console.log(result);
    });
  }

  public onDelete() {
    this.service.deleteInfo().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
