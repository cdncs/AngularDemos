import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  index;

  @Input()
  title;
  
  @Input()
  content;

  @Output()
  outer = new EventEmitter(); /* 子组件中实例化事件发射器 EventEmitter*/
  
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.eventbus.subscribe(data=>{
      alert(`第${this.index}个子组件接收到信息: `+data);
    })
  }

  sendParent(){
    this.outer.emit(`信息来自第${this.index}个子组件`); /* 子组件通过 EventEmitter 对象 outer 实例广播数据 */
  }

  alertMsg(){
    alert(`触发第${this.index}个子组件的方法`);
  }

  sendBrothers(){
    this.commonService.eventbus.emit(`信息来自第${this.index}个子组件`);
  }
}