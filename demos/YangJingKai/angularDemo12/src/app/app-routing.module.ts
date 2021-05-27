import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'newscontent', component:NewscontentComponent
  },
  {
    path:'productcontent/:id', component:ProductcontentComponent
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
