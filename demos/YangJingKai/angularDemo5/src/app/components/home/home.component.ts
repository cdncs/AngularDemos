import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public check:boolean=true;

  public location:string="上路";

  public game:string="英雄联盟";

  gameInfo = {hero: '亚索'};

  constructor() { }

  ngOnInit() {
  }

  getValue(e: string){
    console.log(e)
  }

}
