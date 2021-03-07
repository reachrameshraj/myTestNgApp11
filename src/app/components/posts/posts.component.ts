import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private sharedService:SharedService) {}

  ngOnInit(): void {

    this.sharedService.getPosts().subscribe(response => {
      this.posts = response;
      
    })

  }
}
