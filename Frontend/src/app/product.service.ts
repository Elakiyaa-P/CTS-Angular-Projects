import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getInfo(): Observable<any> {
    return this.http.get('http://localhost:5118/api/product')
  }

  public insertInfo(): Observable<any> {
    return this.http.post<any>('http://localhost:5118/api/product', {
      "prod_name": "Dairy Milk",
      "prod_desc": "Melt like ice",
	    "prod_price": 100,
	    "manuf_date": "04/04/2020",
	    "exp_date": "05/05/2020",
	    "barcode": 89763
    })
  }

  public updateInfo(): Observable<any> {
    return this.http.put<any>('http://localhost:5118/api/updateProduct', {
      "_id":"5ea7cd680cf3cc1b2cff6f65",
      "prod_name": "Dairy Milk Silk",
      "prod_desc": "Melt like ice",
	    "prod_price": 150,
	    "manuf_date": "04/04/2020",
	    "exp_date": "05/05/2020",
	    "barcode": 89763
    })
  }

  public deleteInfo(): Observable<any> {
    return this.http.delete<any>('http://localhost:5118/api/deleteProduct/5ea7cd680cf3cc1b2cff6f65')
  }

}
