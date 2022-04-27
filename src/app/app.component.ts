import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private routeractive: ActivatedRoute,
    private location: Location
  ) { }
  title = 'security';
  ngOnInit() { }
  onBack() {
    this.location.back();
  }
}
