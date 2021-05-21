import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //获取dom
  @ViewChild('DOM3') dom3:any;

  @ViewChild('header') header:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.dom3.innerHTML="我dom3被操作了";
    console.log(this.dom3);
    this.dom3.nativeElement.innerHTML="我dom3被操作了";

    this.header.run();
  }

}
