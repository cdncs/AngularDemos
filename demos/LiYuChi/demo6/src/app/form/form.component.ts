import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  index = 1;

  public peopleInfo:any={

    username:'',
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

  constructor() { }

  ngOnInit() {
  }

  changeData(){
    this.peopleInfo.username = '方法被调用';
  }
}