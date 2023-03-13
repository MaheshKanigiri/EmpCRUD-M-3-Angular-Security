import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user-register.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User ={
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    address: ""
  }
  error:string=""
  registering = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.registering = true;
    this.authService.register(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
          this.error = error.error;
          this.registering = false;
        }
      );
  }

}
