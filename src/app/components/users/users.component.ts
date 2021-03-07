import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;
  id: any;
  username: any;
  name: any;
  email: any;
  address: string;
  
  constructor(
    private sharedService: SharedService,
    private ActiveRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.users = this.sharedService.users;
    this.ActiveRouter.paramMap.subscribe((params) => {
      let id = params.get('id');
      let index = this.users.findIndex((ar) => ar.id == id);
      this.id = this.users[index].id
      this.name = this.users[index].name
      this.username = this.users[index].username
      this.email = this.users[index].email
      this.address = this.users[index].address.street + '<br>' +
                    this.users[index].address.suite + '<br>' + 
                    this.users[index].address.city;
    });
  }
}
