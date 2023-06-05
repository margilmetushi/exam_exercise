import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "https://localhost:7159/api/";
  constructor(private http: HttpClient) { }

  public getSingle(barcode: string): Observable<ProductModel>{

    return this.http.get<ProductModel>(this.url + "product/" + barcode);
  }
}
