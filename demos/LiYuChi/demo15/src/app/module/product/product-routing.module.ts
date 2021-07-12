import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './product.component';


import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';


const routes: Routes = [

  {
    
    path:'',component:ProductComponent,
    canActivateChild:[AuthGuard],
    children:[
      {path:'cart',component:CartComponent},
      {path:'pcontent',component:PcontentComponent}
    ]

  },

  {path:'plist',component:PlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
