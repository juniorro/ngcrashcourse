import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserGuard} from './user.guard';
import {UserResolver} from './user.resolver';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component:  UsersComponent },
  { path: 'user/:id', component:  UserdetailComponent, canActivate: [UserGuard], data: {
      roles: ['MANAGER', 'ADMIN']
  }, canDeactivate: [AuthGuard], resolve: { resolvedUser: UserResolver } },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
