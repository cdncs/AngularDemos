import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //path:'user', loadChildren:'./module/user/user.module#UserModule' 
    path:'user', loadChildren:()=>import('./module/user/user.module').then(module=>module.UserModule)
  },
  {
    path:'product', loadChildren:()=>import('./module/product/product.module').then(module=>module.ProductModule)
  },
  {
    path:'article', loadChildren:()=>import('./module/article/article.module').then(module=>module.ArticleModule)
  },
  {
    path:'**', redirectTo:'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
