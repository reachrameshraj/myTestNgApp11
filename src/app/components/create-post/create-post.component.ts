import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  formBuilder = new FormBuilder();

  postDetail = this.formBuilder.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(private httpCleint: HttpClient) {}

  ngOnInit(): void {}

  onSubmitDetail() {
    console.log(this.postDetail.value);

    this.httpCleint
      .post('http://localhost/myTestNgApp11/api/setPost.php',this.postDetail.value).subscribe((res) => {
        console.log(res);
        
      });
  }
}
