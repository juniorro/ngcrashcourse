import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetailComponent } from './userdetail/userdetail.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanDeactivate<UserdetailComponent> {
  canDeactivate(
    component: UserdetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Url', nextState!.url);
    return component.canDeactivate();
  }

}
