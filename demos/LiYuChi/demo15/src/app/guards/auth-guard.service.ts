import { Injectable } from '@angular/core';
import {
 CanActivate,
 Router,
 ActivatedRouteSnapshot,
 RouterStateSnapshot,
 CanActivateChild,
 CanLoad,
 CanDeactivate
} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
 
 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<any> {
 constructor(
  private router: Router
 ) {
 
 }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  // 权限控制逻辑如 是否登录/拥有访问权限
  console.log('canActivate');
  return true;
 }
 canDeactivate(component: any,currentRoute: ActivatedRouteSnapshot,currentState: RouterStateSnapshot,nextState: RouterStateSnapshot) {
  // 是否能离开当前路由
  console.log('canDeactivate');
  return true;
 }
 canActivateChild() {
  // 是否可以加载子路由,配合children使用
  console.log('canActivateChild');
  return true;
 }
 canLoad(route: Route) {
  // 是否可以加载路由,配合懒加载使用
  console.log('canload');
  return true;
 }
}