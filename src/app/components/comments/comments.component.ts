import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: any;
  url: string;
  images: Object;
  // currentid: any;
  // id: any;
  // title: any;
  // email: any;
  // body: any;

  constructor(
    private sharedService: SharedService,
    private AactiveRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.comments = this.sharedService.comments;
    this.AactiveRouter.paramMap.subscribe((params) => {
      this.url = params.get('url');
    //   let index = this.comments.findIndex((al) => al.id == id);
    //   this.id = this.comments[index].id;
    //   this.title = this.comments[index].title;
    //   this.email = this.comments[index].email;
    //   this.body = this.comments[index].body;
    // });
this.sharedService.getGalleryDetail(this.url).subscribe(respons =>{
  this.images=respons
})
  })
}
}
