import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategy } from './custom.preloading.strategy';
import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes = [
  {

    path:'user',loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
  },
  {

    path:'article',loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule),
    canLoad:[AuthGuard]
  },
  {

    path:'product',loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule),
    data: { preload: true }
  },

  {

    path:'**',redirectTo:'user'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: CustomPreloadingStrategy  //自定义预加载策略, 如果使用PreloadAllModules则默认预加载所有模块
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
