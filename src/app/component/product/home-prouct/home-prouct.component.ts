import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-prouct',
  templateUrl: './home-prouct.component.html',
  styleUrls: ['./home-prouct.component.css']
})
export class HomeProuctComponent implements OnInit{
      products:Product[] = [];    

      constructor(private productService:ProductService, private router:Router){}  
      

      getCategories(){
        this.productService.getCategories().subscribe({
          next: (v) => this.products=v,
          error: (e) => console.error(e),
          complete : ()=> console.info('completed')
        })
      }

      editProduct(id:number){
        this.router.navigate(['update',id]);
      }

      deleteProduct(product:Product){
        this.products.filter(f => f !== product)
        this.productService.deleteProduct(product).subscribe();
      }

      ngOnInit(): void {
        this.getCategories(); 
      }
}
