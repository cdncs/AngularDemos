import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; //DomSanitizer有助于防止跨站点脚本安全漏洞（XSS）

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = '展示数据绑定的效果';  //共有属性, 默认, 可以在这个类里使用, 也可以在类外面使用
  size: number = 2;
  greeting: string = 'Hello World';

  htmlStr:any = '<span style="color:red">这是一段绑定的HTML</span><script>attack()</script>'; //Angular 会自动清理 HTML 输入并转义不安全的代码

  list = [{ name: '张三' }, { name: '李四' }, { name: '王五' }];
  dataList = [{ name: '张三', fruits: ['香蕉', '苹果', '梨'] }, { name: '李四', fruits: ['橘子', '板栗', '葡萄'] }, { name: '王五', fruits: ['西瓜', '猕猴桃', '桃子'] }];
  
  divClass: string;
  isBig: boolean = false;
  isDev: boolean = false;
  ngClass: any = {
    a: false,
    b: true,
    c: false
  };
  divStyle: any = {
    color: 'blue',
    background: 'yellow'
  }

  public birthday: Date = new Date();
  constructor(private sanitized: DomSanitizer) { }

  ngOnInit() {
    // this.greeting = 6;
    this.htmlStr = this.sanitized.bypassSecurityTrustHtml(this.htmlStr);
    setTimeout(() => {
      this.divClass = "a b c";
      this.ngClass = {
        a: true,
        b: false,
        c: true
      };
      this.isDev = true;
      this.divStyle = {
        color: 'yellow',
        background: 'blue'
      };
    }, 3000);
    setTimeout(() => {
      this.isBig = true;
    }, 5000);
  }

}
