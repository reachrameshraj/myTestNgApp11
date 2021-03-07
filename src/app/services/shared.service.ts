import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  users: any = [];
  album: any = [];
  comments: any = [];
  httpHeaders: any = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  constructor(private httpClient: HttpClient){}

  getPosts(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPostDetails(id){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/"+ id);
  }

  getGalleries(){
    return this.httpClient.get("http://christkinginstitution.com/api/getGalleries.php");
  }
  getGalleryDetail(url){
    return this.httpClient.post("http://christkinginstitution.com/api/getGalleryDetail.php", {url:url}, {headers:this.httpHeaders})
  }
}
