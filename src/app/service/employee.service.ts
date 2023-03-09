import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //This class provides the functionality to communicate with our backend using API's
  base_url="http://localhost:3000/employees";



  constructor(private http:HttpClient) { }

  //get all employees
  getEmployeeList():Observable<any>{
    return this.http.get(this.base_url);
  }

  //add new employee
  create(employee:Employee):Observable<any>{

    return this.http.post(this.base_url,employee).pipe(
      catchError(this.handleError)
    );

  }

  //delete employee by Id
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.base_url}/${id}`).pipe(
      catchError(this.handleError)
    );;
  }

  //get employee by id
  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.base_url}/${id}`).pipe(
      catchError(this.handleError)
    );;
  }

  //update the employee based on id
  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put(`${this.base_url}/${employee.id}`,employee).pipe(
      catchError(this.handleError)
    );;
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
