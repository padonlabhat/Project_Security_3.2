import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monoalphabetic-cipher-en',
  templateUrl: './monoalphabetic-cipher-en.component.html',
  styleUrls: ['./monoalphabetic-cipher-en.component.css']
})
export class MonoalphabeticCipherENComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CT='...........'
  CipherText = ''
 
  // key = null
  test1(CT :string,key1 :string){
    this.CipherText=''
    this.CT = CT.toUpperCase();
    console.log('Hello World!');
    var str = this.CT
    var arr = str.split("");
    var Ptext = [];
    var Pnumber = [];
    console.log("arr :"+arr);
    var key 
    key =(Number(key1))
    
    var i;
    var Ctext = [];
    console.log("key : "+key);

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
        else Ptext[i]=Ptext[i];
        Pnumber[i]=Pnumber[i]%26

        console.log("Pnumber : "+Pnumber);
        if (Pnumber[i]==0){Ctext[i]="A"}
        else if (Pnumber[i]==1){Ctext[i]="B"}
        else if (Pnumber[i]==2){Ctext[i]="C"}
        else if (Pnumber[i]==3){Ctext[i]="D"}
        else if (Pnumber[i]==4){Ctext[i]="E"}
        else if (Pnumber[i]==5){Ctext[i]="F"}
        else if (Pnumber[i]==6){Ctext[i]="G"}
        else if (Pnumber[i]==7){Ctext[i]="H"}
        else if (Pnumber[i]==8){Ctext[i]="I"}
        else if (Pnumber[i]==9){Ctext[i]="J"}
        else if (Pnumber[i]==10){Ctext[i]="K"}
        else if (Pnumber[i]==11){Ctext[i]="L"}
        else if (Pnumber[i]==12){Ctext[i]="M"}
        else if (Pnumber[i]==13){Ctext[i]="N"}
        else if (Pnumber[i]==14){Ctext[i]="O"}
        else if (Pnumber[i]==15){Ctext[i]="P"}
        else if (Pnumber[i]==16){Ctext[i]="Q"}
        else if (Pnumber[i]==17){Ctext[i]="R"}
        else if (Pnumber[i]==18){Ctext[i]="S"}
        else if (Pnumber[i]==19){Ctext[i]="T"}
        else if (Pnumber[i]==20){Ctext[i]="U"}
        else if (Pnumber[i]==21){Ctext[i]="V"}
        else if (Pnumber[i]==22){Ctext[i]="W"}
        else if (Pnumber[i]==23){Ctext[i]="X"}
        else if (Pnumber[i]==24){Ctext[i]="Y"}
        else if (Pnumber[i]==25){Ctext[i]="Z"}
        else Ctext[i]=Ptext[i]
       
       this.CipherText=this.CipherText+Ctext[i]
    }
    console.log("Ctext : "+Ctext);
    
    
    console.log("Ctext : "+Ctext);
    console.log("this.CipherText : "+this.CipherText);
    // this.CipherText = Ctext.replace(',', '');
  //   for (i = 0; i < arr.length; i++) {
    
  //     console.log(arr[i]);
  //     Ptext[i] = arr[i]
  //     console.log("arr : "+arr);
  //     console.log(arr);
  //     if (Pnumber[i]=0){Ptext[i]=="A"}
  //     else if (Ptext[i]=="B"){Pnumber[i]=1}
  //     else if (Ptext[i]=="C"){Pnumber[i]=2}
  //     else if (Ptext[i]=="D"){Pnumber[i]=3}
  //     else if (Ptext[i]=="E"){Pnumber[i]=4}
  //     else if (Ptext[i]=="F"){Pnumber[i]=5}
  //     else if (Ptext[i]=="G"){Pnumber[i]=6}
  //     else if (Ptext[i]=="H"){Pnumber[i]=7}
  //     else if (Ptext[i]=="I"){Pnumber[i]=8}
  //     else if (Ptext[i]=="J"){Pnumber[i]=9}
  //     else if (Ptext[i]=="K"){Pnumber[i]=10}
  //     else if (Ptext[i]=="L"){Pnumber[i]=11}
  //     else if (Ptext[i]=="M"){Pnumber[i]=12}
  //     else if (Ptext[i]=="N"){Pnumber[i]=13}
  //     else if (Ptext[i]=="O"){Pnumber[i]=14}
  //     else if (Ptext[i]=="P"){Pnumber[i]=15}
  //     else if (Ptext[i]=="Q"){Pnumber[i]=16}
  //     else if (Ptext[i]=="R"){Pnumber[i]=17}
  //     else if (Ptext[i]=="S"){Pnumber[i]=18}
  //     else if (Ptext[i]=="P"){Pnumber[i]=19}
  //     else if (Ptext[i]=="U"){Pnumber[i]=20}
  //     else if (Ptext[i]=="V"){Pnumber[i]=21}
  //     else if (Ptext[i]=="W"){Pnumber[i]=22}
  //     else if (Ptext[i]=="X"){Pnumber[i]=23}
  //     else if (Ptext[i]=="Y"){Pnumber[i]=24}
  //     else if (Ptext[i]=="Z"){Pnumber[i]=25}
  //     else
  //     Pnumber[i]=999
  // }
  

 }
}
