import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag:boolean=true;

  constructor() { }

  ngOnInit() {//指令和组件初始化完成，DOM并未加载完成

    let dom:any=document.getElementById('DOM操作');
    console.log(dom.innerHTML);
    dom.style.color='green';

    // let dom2:any=document.getElementById("DOM2"); 会报错，因为DOM没有加载完成
    // console.log(dom2.innerHTML);
    // dom2.style.color="red";
  }

  ngAfterViewInit(): void { //试图加载完成后除法的方法
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let dom2:any=document.getElementById("DOM2");
    console.log(dom2.innerHTML);
    dom2.style.color="red";
  }

}
