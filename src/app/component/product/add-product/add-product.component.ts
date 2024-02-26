import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      photo: ['', Validators.required],
    })
  }

  get item(): any { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const name: string = this.item.name.value;
    const stock: number = this.item.stock.value;
    const price: number = this.item.price.value;
    const photo: string = this.item.photo.value;
    this.productService.addProduct({ name, stock, price, photo } as Product)
      .subscribe(() => this.router.navigate(['']))
  }

  ngOnInit(): void {
    
  }
}
