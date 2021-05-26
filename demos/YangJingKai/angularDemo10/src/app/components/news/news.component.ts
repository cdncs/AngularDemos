import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //把HttpClient当成一个服务

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  getData(){
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response;
    });
  }

  doLogin(){
    //alert("执行");
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    var api = 'http://127.0.0.1:3000/dologin';
    this.http.post(api, {"username":"zhnagsan"}, httpOptions).subscribe((response) => {
      console.log(response);
    });
  }

  getJsonpData(){
    this.http.jsonp
  }
}
