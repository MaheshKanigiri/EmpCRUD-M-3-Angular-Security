import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear()
    this.routes.navigate(['login'])
  }
}
