import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

//当项目很大的时候，模块会很多，如果全部挂载到根组件，会导致项目加载很慢, 所以需要创建其他模块
//引入User模块
import { UserModule } from './module/user/user.module';

@NgModule({
  declarations: [  //组件挂载
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [  //模块挂载
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
