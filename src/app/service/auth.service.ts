import jwt_decode from 'jwt-decode';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { DecodedToken } from '../model/DecodeToken';
import { User } from '../model/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl="https://localhost:7094/api/User"
  constructor(private http:HttpClient,private routes:Router) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body).pipe(
      catchError(this.handleError)
    );
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/register', user).pipe(
      catchError(this.handleError)
    );
  }

  forgotPassword(email: string): Observable<any> {
    const url = `${this.baseUrl}/forgot-password/${email}`;
    return this.http.post<any>(url, {}).pipe(
      catchError(this.handleError)
    );;
  }


  resetPassword(token: string, password: string, confirmPassword: string): Observable<any> {
    const url = `${this.baseUrl}/reset-password`;
    const body = {
      Token: token,
      Password: password,
      ConfirmPassword: confirmPassword
    };
    return this.http.post(url, body).pipe(
      catchError(this.handleError)
    );;
  }

  setRole(response: string): void {
    const userRole: string = response
    localStorage.setItem('role', userRole);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  removeRole(): void {
    localStorage.removeItem('role');
  }


  logout(): Observable<any> {
    // Implement logout logic here
    return this.http.post(`${this.baseUrl}/logout`, null);
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
      return localStorage.getItem('token');
  }
  isloggedin():boolean{
    return !!localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear()
    this.routes.navigate(['login'])
  }




  private handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown Error Occured!"
    if (error.error instanceof ErrorEvent) {
      errorMessage = `ErrorMessage:${error.error.message}`
    }
    else {
      errorMessage = `ErrorCode:${error.status}\nMessage:${error.message}`
    }
    return throwError(errorMessage);
  }

}
