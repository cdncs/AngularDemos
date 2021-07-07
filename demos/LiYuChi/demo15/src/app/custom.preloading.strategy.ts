import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        console.log(route.data)
        return route.data && route.data.preload ? fn() : of(null);
    }

}