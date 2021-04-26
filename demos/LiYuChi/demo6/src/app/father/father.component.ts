import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  list:any = [
    {title:'新闻1', content:'内容1 XXXXX XXXXXXX XXX'},
    {title:'新闻2', content:'内容2 XXX XXXX XXX XXXXX'},
    {title:'新闻3', content:'内容3 XX XXXX XXXX XXXXX'}
  ];

  @ViewChildren(ChildComponent) childcontents: QueryList<ChildComponent> /* 装饰器是用来从模板视图中获取匹配的多个元素，返回的结果是一个 QueryList 集合  */

  constructor() { }

  ngOnInit() {
  }

  childChnage(){
    for(let item of this.list){
      item.content = '修改后的内容 XXX XXX XX XXX XXX'
    }
  }

  runParent(msg){
    alert(msg);
  }

  runChild(){
    this.childcontents.forEach(child => {
      if(child.index === 2){
        child.alertMsg();
      }
    });
  }
}