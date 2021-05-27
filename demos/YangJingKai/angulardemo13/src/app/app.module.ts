import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NewsdetailsComponent } from './components/news/newsDetails/newsdetails.component';
import { SettingComponent } from './components/home/setting/setting.component';
import { NewsListComponent } from './components/news/newsList/newslist.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [  //组件挂载
    AppComponent,
    HomeComponent,
    NewsComponent,
    WelcomeComponent,
    SettingComponent,
    NewsListComponent,
    NewsdetailsComponent,
    ProductComponent
  ],
  imports: [  //模块挂载
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
