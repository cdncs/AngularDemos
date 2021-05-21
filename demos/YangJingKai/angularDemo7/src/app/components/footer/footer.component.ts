import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() private outer = new EventEmitter();

  public hero:string = "我是疾风剑豪";

  constructor() { }

  ngOnInit() {
  }

  happy(){
    alert("确认选择疾风剑豪");
  }

  sendToParent(){
    this.outer.emit("疾风剑豪被选择了");
  }
}
