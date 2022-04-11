import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsa-de',
  templateUrl: './rsa-de.component.html',
  styleUrls: ['./rsa-de.component.css']
})
export class RSADEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CT='ABCD'

 
  test1(CT :string){
    this.CT = CT.toUpperCase();
    console.log('Hello World!');
    var str = this.CT
    var arr = str.split("");
    var Ptext = [];
    var Pnumber = [];
    console.log("arr :"+arr);
    var key = 4
    var i;
    var Ctext;
    for (i = 0; i < arr.length; i++) {
    
        console.log(arr[i]);
        Ptext[i] = arr[i]
        console.log("arr : "+arr);
        console.log(arr);
        if (Ptext[i]=="A"){Pnumber[i]=0+key}
        else if (Ptext[i]=="B"){Pnumber[i]=1+key}
        else if (Ptext[i]=="C"){Pnumber[i]=2+key}
        else if (Ptext[i]=="D"){Pnumber[i]=3+key}
        else if (Ptext[i]=="E"){Pnumber[i]=4+key}
        else if (Ptext[i]=="F"){Pnumber[i]=5+key}
        else if (Ptext[i]=="G"){Pnumber[i]=6+key}
        else if (Ptext[i]=="H"){Pnumber[i]=7+key}
        else if (Ptext[i]=="I"){Pnumber[i]=8+key}
        else if (Ptext[i]=="J"){Pnumber[i]=9+key}
        else if (Ptext[i]=="K"){Pnumber[i]=10+key}
        else if (Ptext[i]=="L"){Pnumber[i]=11+key}
        else if (Ptext[i]=="M"){Pnumber[i]=12+key}
        else if (Ptext[i]=="N"){Pnumber[i]=13+key}
        else if (Ptext[i]=="O"){Pnumber[i]=14+key}
        else if (Ptext[i]=="P"){Pnumber[i]=15+key}
        else if (Ptext[i]=="Q"){Pnumber[i]=16+key}
        else if (Ptext[i]=="R"){Pnumber[i]=17+key}
        else if (Ptext[i]=="S"){Pnumber[i]=18+key}
        else if (Ptext[i]=="T"){Pnumber[i]=19+key}
        else if (Ptext[i]=="U"){Pnumber[i]=20+key}
        else if (Ptext[i]=="V"){Pnumber[i]=21+key}
        else if (Ptext[i]=="W"){Pnumber[i]=22+key}
        else if (Ptext[i]=="X"){Pnumber[i]=23+key}
        else if (Ptext[i]=="Y"){Pnumber[i]=24+key}
        else if (Ptext[i]=="Z"){Pnumber[i]=25+key}
        else Ptext[i]="ERROR";
        Pnumber[i]=Pnumber[i]%26
    }
    console.log(Ptext);
    console.log(Pnumber);
  }
}
