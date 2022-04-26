import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-rsa-de',
  templateUrl: './rsa-de.component.html',
  styleUrls: ['./rsa-de.component.css']
})
export class RSADEComponent implements OnInit {
  data_: string = ""
  data: any= {
    "text":"",
    "d":0,
    "n":0
  };
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  Rsa_de_() {
    this.appService.getRsa_de(this.data).subscribe((res)=>{
  
      console.log(res)
      this.data_ = res.text;
  
    }
    ); 
  }
  
}
