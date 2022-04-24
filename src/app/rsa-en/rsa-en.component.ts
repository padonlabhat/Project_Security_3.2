import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './post';

@Component({
  selector: 'app-rsa-en',
  templateUrl: './rsa-en.component.html',
  styleUrls: ['./rsa-en.component.css']
})
export class RSAENComponent implements OnInit {

readonly ROOT_url = 'http://127.0.0.1:8000/api/rsa'
posts : Observable<Post[]> | undefined;

constructor(private http: HttpClient) { }

ngOnInit(): void {
}

getpost(){
  this.posts = this.http.get<Post[]>(this.ROOT_url + '/encryption')
}

showDiv = {
  calcu : false,
  current : false,
  next : false
}
}