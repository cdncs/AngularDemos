import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selfPipe'
})
export class SelfPipePipe implements PipeTransform {
// 使用 ng g pipe pipeName自定义管道
  transform(value: any, args?: any): any {
    switch(value){
        case '英雄联盟': return '最强王者';
        case '和平精英': return '无敌战神';
        default: return '菜鸡';
    }
  }

}
