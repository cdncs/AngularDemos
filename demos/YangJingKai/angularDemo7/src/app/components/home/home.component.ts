import { Component, OnInit, ViewChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string = "匹配模式";

  public title1:string = "排位模式";

  @ViewChild("footer") footer:any;

  constructor() { }

  ngOnInit() {
  }

  play() {
    alert("选择英雄");
  }

  getFooterHappy(e){
    this.footer.happy();
  }

  reSelect(e){
    console.log(e);//子组件给父组件发送的数据
    alert("我选择卡牌大师");
  }
}
