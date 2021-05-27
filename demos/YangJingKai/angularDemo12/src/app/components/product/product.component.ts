import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //动态跳转需要引入的依赖
import { NavigationExtras } from '@angular/router'; //Get传值跳转引入的依赖

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public list:any[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    for(var i =1; i<5; i++){
      this.list.push("这是第" + i + "个产品");
    }
  }

  goProductContent(){
    this.router.navigate(['/productcontent', '111']);
  }

  goProductContentByGet(){
    let queryParams:NavigationExtras = {
      queryParams:{id:222}
    }
    this.router.navigate(['/productcontent'], queryParams);
  }

}
