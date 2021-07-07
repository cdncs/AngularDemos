import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptorService } from './service/interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
