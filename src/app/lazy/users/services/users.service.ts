import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


interface User {
  login: string;
  avatar_url: string;
}
interface Repo {
  name: string;
  repo_url: string;
}

interface UserSearch {
  items: User[];
}
@Injectable()
export class UsersService {

  constructor(private apiService: ApiService, private router: Router) { }

  public getUsers() {
    return this.apiService.get<Observable<User[]>>('users');
  }

  public getUserByName(name) {
    return this.apiService.get<Observable<User>>('users/' + name );
  }
  public search(value, limit) {
    return this.apiService.get<Observable<UserSearch>>('search/users?q=' + value + '&&per_page=' + limit );
  }

  public getFollowers(name) {
    return this.apiService.get<Observable<User>>('users/' + name  + '/followers');
  }

  public goToUser(name) {
    this.router.navigate(['users', 'profile', name]);
  }

  public goToSearch(name) {
    this.router.navigate(['users', '']);
  }

  public goToFollowers(name) {
    this.router.navigate(['users', 'followers', name])
  }


  public getKeys(obj) {
    return Object.keys(obj);
  }
}
