import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserComponent as UComponent } from './pages/user/user.component';
import {FollowersComponent} from './pages/followers/followers.component';

const routes: Route[] = [
  {path: '', component: UserComponent },
  {path: 'profile/:name', component: UComponent },
  {path: 'followers/:name', component: FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
