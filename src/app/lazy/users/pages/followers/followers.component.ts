import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'geekwise-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  public users = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const name = params.get('name');
      console.log(name);
      this.usersService.getFollowers(name).subscribe( (res: any) => {
        this.users = res;
      });
    });
  }

}
