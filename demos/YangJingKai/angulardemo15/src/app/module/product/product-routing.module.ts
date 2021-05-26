import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProdlistComponent } from './components/prodlist/prodlist.component';
import { ProdcontentComponent } from './components/prodcontent/prodcontent.component';
import { CartComponent } from './components/cart/cart.component'; 

const routes: Routes = [
  {
    path:'', component:ProductComponent,
    children:[
      // {
      //   path:'prodlist', component:ProdlistComponent
      // },
      {
        path:'prodcontent', component:ProdcontentComponent
      },
      {
        path:'cart', component:CartComponent
      }
    ]
  },
    {
      path:'prodlist', component:ProdlistComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
