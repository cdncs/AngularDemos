import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { map, filter } from 'rxjs/operators'; // Rxjs工具操作请求结果数据

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit() {
    // 同步获取数据
    let data = this.request.getData();
    console.log(data);

    // 异步获取数据（拿不到数据，callBackData是undefined）
    let UndefinedData = this.request.getUndefinedData();
    console.log(UndefinedData);

    // 使用回调函数
    this.request.getCallBackData((data => {
      console.log(data);
    }));

    // 使用Promise获取异步数据
    var promiseData = this.request.getPromiseData();
    console.log(promiseData);
    promiseData.then((data) => {
      console.log(data);
    });

    // 使用Rxjs获取异步数据
    var rxjsData = this.request.getRxjsData();
    var stream = rxjsData.subscribe((data) => {
      console.log(data);
    });

    // 使用Rxjs可以在请求过程中撤回操作
    setTimeout(() => {
      stream.unsubscribe();
    }, 1000);

    // 测试Promise是否能多次执行并获取异步数据
    var promiseIntervalData = this.request.getPromiseIntervalData();
    promiseIntervalData.then((data) => {
      console.log(data);// 经过测试，只会调用一次
    });

    // 测试Rxjs是否能够多次执行并获取异步数据
    var rxjsIntervalData = this.request.getRxjsIntervalData();
    rxjsIntervalData.subscribe((data) => {
      console.log(data);
    });

    // 用工具方法filter对返回的数据进行处理
    var streamFilterNum = this.request.getRxjsIntervalFilterNum();
    streamFilterNum.pipe(filter((value) => {
        let valueInt = Number.parseInt(value + '');
        if(valueInt%2 != 0){
          return true;
        }
      })
    ).subscribe((data) => {
      console.log("filter方法处理数据" + data);
    });

    // 用工具方法map对返回结果进行处理
    var mapStreamNum = this.request.getRxjsIntervalMapData();
    mapStreamNum.pipe(map((value) => {
      let valueInt = Number.parseInt(value + '');
      return valueInt*valueInt;
    })).subscribe((data) => {
      console.log("map方法处理数据" + data);
    });

    // 同时使用filter和map对返回数据进行处理
    var mapAndFilterStream = this.request.getRxjsIntervalFilterAndMapData();
    mapAndFilterStream.pipe(filter((value) => {
      let valueInt = Number.parseInt(value + '');
      if(valueInt%2 == 0){
        return true;
      }
    }),
    map((value) => {
      let valueInt = Number.parseInt(value + '');
      return valueInt*valueInt;
    })
    )
    .subscribe((data) => {
      console.log("filter和map方法处理数据" + data);
    });
  }
}
