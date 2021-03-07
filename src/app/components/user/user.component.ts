import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userss: any;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.userss= this.sharedService.users
  }

}
