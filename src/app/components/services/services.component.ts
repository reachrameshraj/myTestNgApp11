import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  forBuilder = new FormBuilder();

  clgeForm = this.forBuilder.group({
    fristName: ['', Validators.required],
    lastName: ['', Validators.required],
    course: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    schoolName: ['', Validators.required],
    email: ['', Validators.required],
  });
  formSubmitted: boolean;

  ngOnInit() {}
  onSubmitClgeForm(){
    this.formSubmitted =  true
    console.log(this.clgeForm);
    
  };
}
