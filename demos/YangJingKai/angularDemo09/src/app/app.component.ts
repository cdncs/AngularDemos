import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public arrs:string[] = ["回调函数", "事件监听/发布订阅", "Promise", "Rxjs"];
}
