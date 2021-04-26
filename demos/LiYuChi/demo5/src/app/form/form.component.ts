import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {


  public peopleInfo:any={

    username:'test',
    sex:'2',
    cityList:['北京','上海','深圳'],
    city:'上海',

    hobby:[{

          title:'吃饭',
          checked:false
      },{

            title:'睡觉',
            checked:false
        },{

          title:'敲代码',
          checked:true
      }],

      mark:''

  }

  constructor(
    private el: ElementRef,  //在组件的 constructor中注入ElementRef，可以获取到整个组件元素的包裹
    private render: Renderer2 //除了通过原生的domAPI操作dom, Angular提供了更好的跨平台方式   Renderer2
    ) { }

  ngOnInit() {
  }

  doSubmit(){

    /*    
    原生dom操作
      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);    
    */

   console.dir(this.el); //ElementRef中的nativeElement即是组件最外层的DOM元素。再通过原生的DOM定位方式，即可获取到指定的selector元素
   console.dir(this.el.nativeElement.querySelector('#username').value);

   this.render.setStyle(this.el.nativeElement.querySelector('#title') , 'color' , 'red');
   console.log(this.peopleInfo);


  }
}