import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, activatedRoutestate: RouterStateSnapshot): Observable<any> {
        return this.userService.getUser(+route.paramMap.get('id')!)
    }
}
