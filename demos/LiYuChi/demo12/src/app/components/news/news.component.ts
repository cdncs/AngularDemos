import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {



  public list:any[]=[];

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {

    console.log(this.route.queryParams);

    
    /*

    get传值
    
    */

    this.route.queryParams.subscribe((data)=>{

     console.log(data);
   })

   
    for(var i=0;i<10;i++){

      this.list.push('这是第'+i+'条数据');
    }
  }

}
