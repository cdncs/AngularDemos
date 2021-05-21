import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:any; //input装饰器接受父组件传过来的值

  @Input() play:any; //接收父组件传过来的方法

  @Input() home:any; // 接收整个父组件

  title2:string;

  constructor() { 
    
  }

  ngOnInit() {
    this.title2 = this.home.title1;
  }

  getHomePlay(){
    this.play();
    console.log(this.home);
  }
}
