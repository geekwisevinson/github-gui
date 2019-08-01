import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'geekwise-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'github-gui';

  constructor() {}
  ngOnInit(): void {

  }
}
