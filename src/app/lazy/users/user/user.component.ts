import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'geekwise-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public search = '';
  public users = [];
  public user = null;
  public limit = 10;
  constructor(public usersService: UsersService, private router: Router) { }

  ngOnInit() {

  }


  public onSubmit() {
    if (this.search) {
      this.usersService.search(this.search, this.limit).subscribe(
        (res) => {
          this.users = res.items;
        }
      );
    } else {
      this.usersService.getUsers().subscribe( res => {
        console.log();
        if (res) {
          console.log('is truthy', res.length);
          if (res) {
            console.log('is an array');
            this.users = res;
          } else {
            console.log('is not an array');
            this.users = [res];
          }
        }



      });
    }
  }

  public getUserByName(name) {
    console.log(name);
    this.usersService.goToUser(name);
  }

}
