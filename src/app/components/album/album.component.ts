import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("http://christkinginstitution.com/api/getGalleries.php").subscribe((response) => {
      this.album = response;
    });
  }
}
