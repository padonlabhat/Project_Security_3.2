import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private routeractive: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goShift() {
    this.router.navigate(['/shift-en']);
  }

  goMono() {
    this.router.navigate(['/monoalphabetic-en']);
  }

  goVige() {
    this.router.navigate(['/vigenere-en']);
  }

  goRSA() {
    this.router.navigate(['/rsa-en']);
  }

}
