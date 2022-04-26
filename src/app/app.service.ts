import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './rsa-en/post';
import { Sent } from './rsa-de/sent';
import { map, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  getAll() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  rootURL = 'http://127.0.0.1:8000/api/rsa';

  getRsa_de(body: any) {
    return this.http.post(this.rootURL + '/decryption', body).
    pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    )
  }

  getRsa_en(text: Post[]) {
    return this.http.post(this.rootURL + '/encryption', text).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
}
