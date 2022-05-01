import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vigenere-cipher-de',
  templateUrl: './vigenere-cipher-de.component.html',
  styleUrls: ['./vigenere-cipher-de.component.css']
})
export class VigenereCipherDEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CT = '...........'
  CipherText = ''

  test1(CT: string, key1: string) {
    this.CipherText = ''
    this.CT = CT.toUpperCase();
    key1 = key1.toUpperCase();
    console.log('Hello World!');
    var str = this.CT.replace(/\s/g, "");
    var arr = str.split("");
    for (i = 0; i < arr.length; i++) {
      key1 = key1.concat(key1)
    }
    console.log('key 1 :' + key1);
    var Ptext = [];
    var Pnumber = [];
    console.log("arr :" + arr);
    var keyy = key1
    var key = keyy.split("");
    var keytext = [];
    var keynumber = [];
    var i;
    var Ctext = [];
    console.log("key : " + key1);

    for (i = 0; i < arr.length; i++) {
      keytext[i] = key[i]
      if (keytext[i] == "A") { keynumber[i] = 0 }
      else if (keytext[i] == "B") { keynumber[i] = 1 }
      else if (keytext[i] == "C") { keynumber[i] = 2 }
      else if (keytext[i] == "D") { keynumber[i] = 3 }
      else if (keytext[i] == "E") { keynumber[i] = 4 }
      else if (keytext[i] == "F") { keynumber[i] = 5 }
      else if (keytext[i] == "G") { keynumber[i] = 6 }
      else if (keytext[i] == "H") { keynumber[i] = 7 }
      else if (keytext[i] == "I") { keynumber[i] = 8 }
      else if (keytext[i] == "J") { keynumber[i] = 9 }
      else if (keytext[i] == "K") { keynumber[i] = 10 }
      else if (keytext[i] == "L") { keynumber[i] = 11 }
      else if (keytext[i] == "M") { keynumber[i] = 12 }
      else if (keytext[i] == "N") { keynumber[i] = 13 }
      else if (keytext[i] == "O") { keynumber[i] = 14 }
      else if (keytext[i] == "P") { keynumber[i] = 15 }
      else if (keytext[i] == "Q") { keynumber[i] = 16 }
      else if (keytext[i] == "R") { keynumber[i] = 17 }
      else if (keytext[i] == "S") { keynumber[i] = 18 }
      else if (keytext[i] == "T") { keynumber[i] = 19 }
      else if (keytext[i] == "U") { keynumber[i] = 20 }
      else if (keytext[i] == "V") { keynumber[i] = 21 }
      else if (keytext[i] == "W") { keynumber[i] = 22 }
      else if (keytext[i] == "X") { keynumber[i] = 23 }
      else if (keytext[i] == "Y") { keynumber[i] = 24 }
      else if (keytext[i] == "Z") { keynumber[i] = 25 }
      else
      Pnumber[i] = 999
    }

    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      Ptext[i] = arr[i]
      console.log("arr : " + arr);
      console.log(arr);
      if (Ptext[i] == "A") { Pnumber[i] = 0 - keynumber[i] }
      else if (Ptext[i] == "B") { Pnumber[i] = 1 - keynumber[i] }
      else if (Ptext[i] == "C") { Pnumber[i] = 2 - keynumber[i] }
      else if (Ptext[i] == "D") { Pnumber[i] = 3 - keynumber[i] }
      else if (Ptext[i] == "E") { Pnumber[i] = 4 - keynumber[i] }
      else if (Ptext[i] == "F") { Pnumber[i] = 5 - keynumber[i] }
      else if (Ptext[i] == "G") { Pnumber[i] = 6 - keynumber[i] }
      else if (Ptext[i] == "H") { Pnumber[i] = 7 - keynumber[i] }
      else if (Ptext[i] == "I") { Pnumber[i] = 8 - keynumber[i] }
      else if (Ptext[i] == "J") { Pnumber[i] = 9 - keynumber[i] }
      else if (Ptext[i] == "K") { Pnumber[i] = 10 - keynumber[i] }
      else if (Ptext[i] == "L") { Pnumber[i] = 11 - keynumber[i] }
      else if (Ptext[i] == "M") { Pnumber[i] = 12 - keynumber[i] }
      else if (Ptext[i] == "N") { Pnumber[i] = 13 - keynumber[i] }
      else if (Ptext[i] == "O") { Pnumber[i] = 14 - keynumber[i] }
      else if (Ptext[i] == "P") { Pnumber[i] = 15 - keynumber[i] }
      else if (Ptext[i] == "Q") { Pnumber[i] = 16 - keynumber[i] }
      else if (Ptext[i] == "R") { Pnumber[i] = 17 - keynumber[i] }
      else if (Ptext[i] == "S") { Pnumber[i] = 18 - keynumber[i] }
      else if (Ptext[i] == "T") { Pnumber[i] = 19 - keynumber[i] }
      else if (Ptext[i] == "U") { Pnumber[i] = 20 - keynumber[i] }
      else if (Ptext[i] == "V") { Pnumber[i] = 21 - keynumber[i] }
      else if (Ptext[i] == "W") { Pnumber[i] = 22 - keynumber[i] }
      else if (Ptext[i] == "X") { Pnumber[i] = 23 - keynumber[i] }
      else if (Ptext[i] == "Y") { Pnumber[i] = 24 - keynumber[i] }
      else if (Ptext[i] == "Z") { Pnumber[i] = 25 - keynumber[i] }
      else Ptext[i] = Ptext[i];

      if (Pnumber[i]<0){
        Pnumber[i] = (Pnumber[i] % 26)+26
      }

      console.log("Pnumber : " + Pnumber);
      if (Pnumber[i] == 0) { Ctext[i] = "A" }
      else if (Pnumber[i] == 1) { Ctext[i] = "B" }
      else if (Pnumber[i] == 2) { Ctext[i] = "C" }
      else if (Pnumber[i] == 3) { Ctext[i] = "D" }
      else if (Pnumber[i] == 4) { Ctext[i] = "E" }
      else if (Pnumber[i] == 5) { Ctext[i] = "F" }
      else if (Pnumber[i] == 6) { Ctext[i] = "G" }
      else if (Pnumber[i] == 7) { Ctext[i] = "H" }
      else if (Pnumber[i] == 8) { Ctext[i] = "I" }
      else if (Pnumber[i] == 9) { Ctext[i] = "J" }
      else if (Pnumber[i] == 10) { Ctext[i] = "K" }
      else if (Pnumber[i] == 11) { Ctext[i] = "L" }
      else if (Pnumber[i] == 12) { Ctext[i] = "M" }
      else if (Pnumber[i] == 13) { Ctext[i] = "N" }
      else if (Pnumber[i] == 14) { Ctext[i] = "O" }
      else if (Pnumber[i] == 15) { Ctext[i] = "P" }
      else if (Pnumber[i] == 16) { Ctext[i] = "Q" }
      else if (Pnumber[i] == 17) { Ctext[i] = "R" }
      else if (Pnumber[i] == 18) { Ctext[i] = "S" }
      else if (Pnumber[i] == 19) { Ctext[i] = "T" }
      else if (Pnumber[i] == 20) { Ctext[i] = "U" }
      else if (Pnumber[i] == 21) { Ctext[i] = "V" }
      else if (Pnumber[i] == 22) { Ctext[i] = "W" }
      else if (Pnumber[i] == 23) { Ctext[i] = "X" }
      else if (Pnumber[i] == 24) { Ctext[i] = "Y" }
      else if (Pnumber[i] == 25) { Ctext[i] = "Z" }
      else Ctext[i] = Ptext[i]

      this.CipherText = this.CipherText + Ctext[i]
    }
    console.log("Ctext : " + Ctext);
    console.log("Ctext : " + Ctext);
    console.log("this.CipherText : " + this.CipherText);
  }

}
