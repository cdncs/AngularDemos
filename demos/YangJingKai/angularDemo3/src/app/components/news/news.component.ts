import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //声明属性的几种方式
  //public(default), protected, private

  public title="我是新闻组件";

  msg="我是卡牌大师";

  username:string="盖伦";

  //推荐写法
  public student:any="我是小学生亚索";

  public userInfo:any={
      username:"卡萨丁",
      age:"18"
  }

  public message:any;

  public content="<h2>我是一个html标签</h2>"

  //定义数组, 使用 *ngFor 循环数组
  arr=["AK47", "M4", "98k"];

  constructor() {
      this.message="给属性赋值---（改变属性的值）";

      this.msg="改变已存在的属性值";
  }

  ngOnInit(): void {
  }

}
