import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public picUrl="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";

  public flag:boolean=false;

  public killNum:number=8;

  public cssstyle={'color':'red', 'font-size':'20px'};

  public content="测试ngNonBindable";
  
  public birthday:any='1995-05-09';

  public game:string="英雄联盟";

  check=false;

  ngOnInit() {
  }

  showRank(e){
    alert('坚韧黑铁');
    console.log(e);
  }
}
