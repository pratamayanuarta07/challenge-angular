import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    
    const product =[
      {id:1,name: "Asus ROG STRIX 16", stock:5, price:16000000, photo:'https://www.softcom.co.id/wp-content/uploads/2021/03/GA401QM-R936B6G-O-4.jpg'},
      {id:2,name: "Lenovo Legion 5i", stock:2, price:19000000, photo:"https://p-id.ipricegroup.com/uploaded_4870a0eba490e188beaf5e31c49c8920.jpg"},
      {id:3,name: "HP Victus 16", stock:2, price:19000000, photo:'https://images.tokopedia.net/img/cache/700/OJWluG/2022/8/18/7a65e908-8d15-4fad-b46c-658ed228042f.jpg?ect=4g'}
    ]

    return {product}
  }

  genId(product: Product[]) : number{
    return product.length > 0 ? Math.max(...product.map(c=> c.id))+1 : 11;
  }
}
