import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-rsa-de',
  templateUrl: './rsa-de.component.html',
  styleUrls: ['./rsa-de.component.css']
})
export class RSADEComponent implements OnInit {
  N: number | undefined;
  R: any;
  E: number | undefined;
  D: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  cal(P: string, Q: string) {
    const ra = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 
      47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 
      109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 
      179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241];


    console.log("hello world");
    this.N = parseInt(P) * parseInt(Q);
    console.log("N : " + this.N);

    this.R = (parseInt(P) - 1) * (parseInt(Q) - 1);
    console.log("R : " + this.R);

    var b = this.getRandomDifferent(ra);
    let A = this.check(b);
    this.E = A;
    console.log("E : " + this.E);

    this.D = 1/(A)%parseInt(this.R);
    console.log("D : " + this.D);

  }
  getRandomDifferent(arr: string | any[], last = undefined) {
    if (arr.length === 0) {
      return null;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let num = 0;
      do {
        num = Math.floor(Math.random() * arr.length);
      } while (arr[num] === last);
      return arr[num];
    }
  }
  check(val: number) {
    if (val <= this.R) {
      console.log("val :" + val);
      return val
    } else {
      return 0;
    }
  }
}
