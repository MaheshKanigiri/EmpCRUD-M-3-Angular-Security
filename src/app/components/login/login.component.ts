import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

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

constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (data: any) => {
        this.authService.setToken(data.response.accessToken);
        this.authService.setRole(data.response.userRole); // Check if setRole() is being called correctly
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
        alert("Please Check Email and Password!");
      }
    );
  }

}
