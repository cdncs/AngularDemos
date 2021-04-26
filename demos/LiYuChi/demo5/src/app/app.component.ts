import { Component, OnInit, ElementRef, Renderer2, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  /*
  Use { static: true } when you want to access the ViewChild in ngOnInit.

  Use { static: false } will be accessible only in ngAfterViewInit 
  */

  @ViewChild('formDom', { static: true }) viewelement: ElementRef; /* ViewChild装饰器用于获取模板视图中的元素或直接调用其组件中的方法 */
  @ViewChild(FormComponent, { static: true }) viewecontent: FormComponent; /* 通过组件类型来获取, 如果有多个组件返回第一个 */
  @ViewChildren(FormComponent) viewecontents: QueryList<FormComponent> /* 装饰器是用来从模板视图中获取匹配的多个元素，返回的结果是一个 QueryList 集合  */

  transform = 'translate(100%,0)';
  constructor(
    private el: ElementRef,  /* 在组件的 constructor中注入ElementRef，可以获取到整个组件元素的包裹 */
    private render: Renderer2  /* 除了通过原生的domAPI操作dom, Angular提供了更好的跨平台方式   Renderer2 */
  ) { }

  ngOnInit() {
    console.log(this.viewecontent);
  }

  ngAfterViewInit() {
    console.log(this.viewecontent);
  }


  formChnage() {
    this.el.nativeElement.querySelectorAll('#title').forEach(el => {
      this.render.setStyle(el, 'color', 'red');
    })


    console.log(this.viewelement);
    console.log(this.viewecontent);
    console.log(this.viewecontents);

    this.viewecontent.peopleInfo.mark = 'mark change';
    this.viewecontent.changeData();
    // this.viewecontents.forEach(content => {
    //   content.changeData();
    // });
  }

  showAside() {

    //原生js获取dom节点
    // var asideDom: any = document.getElementById('aside');
    // asideDom.style.transform = "translate(0,0)";

    this.transform = "translate(0,0)";
  }

  hideAside() {

    //原生js获取dom节点
    // var asideDom: any = document.getElementById('aside');
    // asideDom.style.transform = "translate(100%,0)";
    this.transform = "translate(100%,0)";
  }

}