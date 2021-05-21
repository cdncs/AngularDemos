import { NgModule } from '@angular/core'; //agular 核心模块
import { BrowserModule } from '@angular/platform-browser'; //angular的浏览器解析模块

import { AppComponent } from './app.component'; //根组件

//@NgModule装饰器，告诉angular如何编译和启动应用
@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent
  ],
  imports: [ //配置当前模块运行依赖的其他模块
    BrowserModule
  ],
  providers: [], //配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图（根组件），通过引导AppModule来启动应用
})
export class AppModule { }
