import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser!: string;
  userList: any[] = [];
  admin: boolean=true;
  constructor(private authService: AuthService) {
    const role = authService.getRole();
    if (role === 'Admin') {
      this.currentUser = 'Administrator';
    } else if (role === 'User') {
      this.admin=false
      this.currentUser = 'Regular User';
    }
  }
  ngOnInit(): void {
  }

}
