import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  searchCountry:string=""
  public employeeList:Employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((resp)=>{
      this.employeeList=resp;
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }

}
