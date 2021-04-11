import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
