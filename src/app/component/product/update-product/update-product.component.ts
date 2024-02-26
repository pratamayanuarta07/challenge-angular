import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  product!: Product;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.productService.getOneProduct(params['id'])
        .subscribe((res: Product) => {
          this.product = res;
          console.log(this.product);
          this.form = new FormGroup({
            product_name: new FormControl(this.product.name),
            product_stock: new FormControl(this.product.stock),
            product_price: new FormControl(this.product.price),
            product_photo: new FormControl(this.product.photo)
          })
        })
    })
  }

  get item(): any { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const id:number = this.product.id;
    const name: string = this.item.product_name.value;
    const stock: number = this.item.product_stock.value;
    const price: number = this.item.product_price.value;
    const photo: string = this.item.product_photo.value;
  
    this.productService.updateProduct({ id, name, stock, price, photo } as Product)
      .subscribe(() => this.router.navigate(['']))

  }


  ngOnInit(): void {
    
  }
}
