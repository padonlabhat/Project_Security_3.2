import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Post } from './post';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rsa-en',
  templateUrl: './rsa-en.component.html',
  styleUrls: ['./rsa-en.component.css']
})
export class RSAENComponent implements OnInit {

readonly ROOT_url = 'http://127.0.0.1:8000/api/rsa'
posts : Observable<Post[]> | undefined;
text: any = {};
data_: string = ""
data: any= {
  "text":"",
  "d":0,
  "n":0
};
constructor(private appService: AppService) { }

ngOnInit(): void {
}


Rsa_en() {
  this.appService.getRsa_en(this.text).subscribe((res)=>{
    console.log(res)
    this.data.text = res.text;
    this.data.d = res.d;
    this.data.n = res.n;
    // console.log(this.data.d)
  });
}


Rsa_de() {
  this.appService.getRsa_de(this.data).subscribe((res)=>{

    console.log(res)
    this.data_ = res.text;

  }
  ); 
}



showDiv = {
  encryp : false,
  decryp : false,
}
}