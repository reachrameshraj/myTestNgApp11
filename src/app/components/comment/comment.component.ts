import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comment: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getGalleries().subscribe((respons) => {
      this.comment = respons;
    });
  }
}
