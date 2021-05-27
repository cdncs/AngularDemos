import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NewsdetailsComponent } from './components/news/newsDetails/newsdetails.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { NewsListComponent } from './components/news/newsList/newslist.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent,
    children:[
      {
        path:'welcome', component:WelcomeComponent
      },
      {
        path:'setting', component: SettingComponent
      },
      {
        path:'**', component: WelcomeComponent
      }
    ]
  },
  {
    path:'news', component:NewsComponent,
    children:[
      {
        path:'newsdetails', component:NewsdetailsComponent
      },
      {
        path:'newslist', component: NewsListComponent
      },
      {
        path:'**', component: NewsListComponent
      }
    ]
  },{
    path:'product', component: ProductComponent
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
