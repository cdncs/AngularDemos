import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'product', component:ProductComponent
  }
  // ,{
  //   path:'**', redirectTo:'home' //配置默认跳转
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //配置路由的模块
