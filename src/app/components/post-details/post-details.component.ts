import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post:any = {};

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');

      this.sharedService.getPostDetails(id).subscribe(response => {
        this.post = response
      })
      
    })
  }
}
