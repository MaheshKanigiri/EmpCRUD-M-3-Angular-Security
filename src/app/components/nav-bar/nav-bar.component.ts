import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private routes:Router,private notify:NotificationService) { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear()
    this.notify.showInfo("User Logged Out!");
    this.routes.navigate(['login'])
  }
}
