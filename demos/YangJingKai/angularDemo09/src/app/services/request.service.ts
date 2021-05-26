import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {

  count:number = 0;
  numMap:number = 0;
  
  constructor() { }

  getData(){
    return "我是来自service的数据";
  }

  getUndefinedData(){
    setTimeout(() =>{
      var data = "异步模拟数据";
      return data;
    }, 1000);
  }

  getCallBackData(callBack){
    setTimeout(() => {
      var callBackData = "回调函数获取异步数据";
      callBack(callBackData);
    }, 1000);
  }

  getPromiseData(){ // es6提供的
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var promiseData = "Promise获取异步数据";
        resolve(promiseData);
      }, 1000);
    })
  }

  getRxjsData(){
    return new Observable<any>((observer) => {
      setTimeout(() => {
        var rxjsData = "Rxjs获取异步数据";
        observer.next(rxjsData);
        //observer.error();
      }, 3000);
    });
  }

  // Promise多次执行获取异步数据
  getPromiseIntervalData(){
    return new Promise((resolve) => {
      setInterval(() => {
        var promiseIntervalData = "测试Promise是否会多次执行获取异步数据";
        resolve(promiseIntervalData);
      }, 1000);
    });
  }

  // Rxjs多次执行并获取异步数据
  getRxjsIntervalData(){
    return new Observable<any>((observer) => {
      setInterval(() => {
        this.count++;
        var rxjsIntervalData = `Rxjs第${this.count}次执行并获取异步数据`;
        observer.next(rxjsIntervalData);
      }, 3000);
    });
  }

  getRxjsIntervalFilterNum(){
    let count = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });
  }

  getRxjsIntervalMapData(){
    let num = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        num++;
        observer.next(num);
      }, 1000);
    });
  }

  getRxjsIntervalFilterAndMapData(){
    let num = 0;
    return new Observable<any>((observer) => {
      setInterval(() => {
        num++;
        observer.next(num);
      }, 1000);
    });  
  }
}
