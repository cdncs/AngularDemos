import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  public msg:string = "生命周期演示";

  public msgChange:string = "";

  public previousMsg:string = "";

  @Input("sendMsg") sendMsg:string;

  changeMsg() {
    this.msg = "改变绑定的值";
  }

  constructor() {
    console.log("angular构造函数执行-----对局部变量进行初始化，一般不做其他操作");
   }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChange函数执行-----当被绑定的输入属性的值发生变化时调用（父子组件传值的时候会触发）");
    console.log(`我是来自父组件传递过来的值[${this.sendMsg}]`);
   }
  ngOnInit() { //重要
    console.log("ngOnInit方法执行了-----请求数据一般放在这里面");
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck执行了-----发生在Angular无法或者不愿意自己检测的变化时作出反应");
    if(this.msgChange != this.previousMsg){
      console.log(`msgChange的值从[${this.previousMsg}]变成了[${this.msgChange}]`);
      this.previousMsg = this.msgChange;
    }else{
      console.log("没有任何改变");
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit执行了-----当把内容投影到组件之后调用");
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked执行了-----每次完成被投影组件内容的变更检测之后调用");
  }

  ngAfterViewInit(): void { //重要
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit执行了-----初始化组件试图及其子视图之后调用（DOM的操作放在这个方法里面）");
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked执行了-----每次完成组件试图及其子视图的变更检测之后调用");
  }

  ngOnDestroy(): void { //重要
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestory执行了");
  }
}
