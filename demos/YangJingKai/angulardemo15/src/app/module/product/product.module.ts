import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProdlistComponent } from './components/prodlist/prodlist.component';
import { CartComponent } from './components/cart/cart.component';
import { ProdcontentComponent } from './components/prodcontent/prodcontent.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProdlistComponent,
    CartComponent,
    ProdcontentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
