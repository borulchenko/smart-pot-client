import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/']);
  }

  about() {
    this.router.navigate(['/about']);
  }

  service() {
    this.router.navigate(['/service']);
  }
}
