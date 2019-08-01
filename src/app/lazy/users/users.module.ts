import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from './services/users.service';
import {UserComponent as UComponent} from './pages/user/user.component';
import {FormsModule} from '@angular/forms';
import { UsersListComponent } from './features/users-list/users-list.component';
import { FollowersComponent } from './pages/followers/followers.component';

@NgModule({
  declarations: [UserComponent, UComponent, UsersListComponent, FollowersComponent],
  providers: [UsersService],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ]
})
export class UsersModule { }
