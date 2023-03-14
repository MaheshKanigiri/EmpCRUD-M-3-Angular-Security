import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  //FOR-FORGOT-PASSWORD
  email: string = '';
  message: string = '';
  //FOR-RESET-PASSWORD
  token: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string=''; // define the errorMessage property
  showResetForm:boolean=false;
  constructor(private userService: AuthService,
    private notify:NotificationService,
    private router:Router) { }

  onSubmit(): void {
    this.userService.forgotPassword(this.email).subscribe(
      response => {
        this.notify.showInfo("otp has been sent to your email!")
        // console.log(response)
        // this.message = response.message;
        this.showResetForm=true;
      },
      error => {
        // this.message = error.error.message;
        this.notify.showError("Invalid Email!")
      }
    );
  }

  onReset(): void {
    this.userService.resetPassword(this.token, this.password, this.confirmPassword)
      .subscribe(response => {
        this.notify.showSuccess("Password Reset Successful!")
        this.router.navigateByUrl('/')
      }, error => {
        this.notify.showError("Invalid OTP or Please Check Passwords!")
      });
  }
}





