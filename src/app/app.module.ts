import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { HomeProuctComponent } from './component/product/home-prouct/home-prouct.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './component/product/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeProuctComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
