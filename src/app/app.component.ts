import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My First NG Application';

  'empData' = [
    {
      fristName: 'gopal',
      lastName: 'raj',
      salary: '12000',
      Designation: 'suparvaiser',
      dateOfJoining: '12-1-2021',
    },
    {
      fristName: 'santhu',
      lastName: 'raj',
      salary: '18000',
      Designation: 'manager',
      dateOfJoining: '12-1-2021',
    },
    {
      fristName: 'rakesh',
      lastName: 'raj',
      salary: '10000',
      Designation: 'houseKeeper',
      dateOfJoining: '12-1-2021',
    },
    {
      fristName: 'sharma',
      lastName: 'raj',
      salary: '11000',
      Designation: 'security',
      dateOfJoining: '12-1-2021',
    },
  ];

  'Studentdata' = [
    {
      studentName: 'ramesh',
      class: '10th',
      roomNum: '2sl',
      RoleNum: '21',
      slnum: '',
    },
    {
      studentName: 'suresh',
      class: '9th',
      roomNum: '2sl',
      RoleNum: '23',
      slnum: '',
    },
    {
      studentName: 'rakesh',
      class: '8th',
      roomNum: '2sl',
      RoleNum: '24',
      slnum: '',
    },
    {
      studentName: 'nagesh',
      class: '7th',
      roomNum: '2sl',
      RoleNum: '25',
      slnum: '',
    },
  ];
}
