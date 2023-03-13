import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User={
  email:'',
  password: ''
}

constructor(private authService: AuthService, private router: Router,
  private notifyService:NotificationService) {}
  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (data: any) => {
        this.authService.setToken(data.response.accessToken);
        this.authService.setRole(data.response.userRole); // Check if setRole() is being called correctly
        this.notifyService.showSuccess("User Login Succesfull!")
       
        this.router.navigate(['home']);
      },
      (error) => {
        this.notifyService.showError("Please Check Email and Password!")
      }
    );
  }


}
