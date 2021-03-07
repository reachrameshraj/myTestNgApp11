import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstName: string = '';

  greeting: string = "";
  public name="ramesh";
  public massege="";
  public  date= new Date();

  @Input() public Name;
  @Output() public childEvent = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
  modelChanging() {
    // console.log(this.firstName);
  }
  moduletar() {
    console.log(this.firstName);
  }
  directiveFocus() {
    console.log(this.firstName);
  }
  outDoorCliking() {
    console.log(this.firstName);
  }
  showData(event) {
    console.log(event);
    // console.log(this.greeting);
    this.greeting = event.type;
  }
  fireEvent(){
    this.childEvent.emit('hey man')
  }

}
