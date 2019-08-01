import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'geekwise-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() public users = [];
  @Output() public onChosen = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onChose(value) {
    this.onChosen.emit(value);
  }

}
