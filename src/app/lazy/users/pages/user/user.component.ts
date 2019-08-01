import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'geekwise-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public usersService: UsersService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const name = params.get('name');
      console.log(name);
      this.usersService.getUserByName(name).subscribe( res => {
        this.user = res;
      });
    });
  }

  public goToFollowers() {
    this.router.navigate(['users', 'followers', this.user.login]);
  }

}
