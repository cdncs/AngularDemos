import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';
import { CommonService } from './services/common.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[CommonService],
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  exports:[UserComponent, AddressComponent] //暴露组件，使得能在其他模块中使用
})
export class UserModule { }
