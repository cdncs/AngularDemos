import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sendMsg = "我来自父组件";

  mountFlag:boolean = true;

  title = 'app works!';

  changeSendMsg(){
    this.sendMsg = "改变来自父组件的值";
  }

  mount(){
    this.mountFlag = !this.mountFlag;
  }
}
