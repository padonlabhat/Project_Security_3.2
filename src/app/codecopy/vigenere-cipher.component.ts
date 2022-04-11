import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vigenere-cipher',
  templateUrl: './vigenere-cipher.component.html',
  styleUrls: ['./vigenere-cipher.component.css']
})
export class VigenereCipherComponent implements OnInit{
  constructor(){}
  ngOnInit(){}
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
        
    //     if (Pnumber[i]=0){Ptext[i]=="A"}
    //     else if (Pnumber[i]=1){Ptext[i]=="B"}
    //     else if (Pnumber[i]=2){Ptext[i]=="C"}
    //     else if (Pnumber[i]=3){Ptext[i]=="D"}
    //     else if (Pnumber[i]=4){Ptext[i]=="E"}
    //     else if (Pnumber[i]=5){Ptext[i]=="F"}
    //     else if (Pnumber[i]=6){Ptext[i]=="G"}
    //     else if (Pnumber[i]=7){Ptext[i]=="H"}
    //     else if (Pnumber[i]=8){Ptext[i]=="I"}
    //     else if (Pnumber[i]=9){Ptext[i]=="J"}
    //     else if (Pnumber[i]=10){Ptext[i]=="K"}
    //     else if (Pnumber[i]=11){Ptext[i]=="L"}
    //     else if (Pnumber[i]=12){Ptext[i]=="M"}
    //     else if (Pnumber[i]=13){Ptext[i]=="N"}
    //     else if (Pnumber[i]=14){Ptext[i]=="O"}
    //     else if (Pnumber[i]=15){Ptext[i]=="P"}
    //     else if (Pnumber[i]=16){Ptext[i]=="Q"}
    //     else if (Pnumber[i]=17){Ptext[i]=="R"}
    //     else if (Pnumber[i]=18){Ptext[i]=="S"}
    //     else if (Pnumber[i]=19){Ptext[i]=="T"}
    //     else if (Pnumber[i]=20){Ptext[i]=="U"}
    //     else if (Pnumber[i]=21){Ptext[i]=="V"}
    //     else if (Pnumber[i]=22){Ptext[i]=="W"}
    //     else if (Pnumber[i]=23){Ptext[i]=="X"}
    //     else if (Pnumber[i]=24){Ptext[i]=="Y"}
    //     else if (Pnumber[i]=25){Ptext[i]=="Z"}
    //     else Ptext[i]=="ERROR"
       
       
    }
    console.log(Ptext);
   
    console.log(Pnumber);
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
  //  this.CT=text

 }
  
 
}
