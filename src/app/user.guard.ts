import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // complex logic
    let isAllowed: boolean = false;
    const roles: string[] =  route.data['roles'];
    roles.forEach((role) => {
        isAllowed = role === 'ADMIN' ? true : false;
    });
    const role = roles[Math.random() > 0.5 ? 1 : 0]
    console.log('Random role is:', role);
    return role === 'ADMIN';
  }

}
