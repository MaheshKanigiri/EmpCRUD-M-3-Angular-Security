import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchCountry:string=""
  public employeeList:Employee[]=[];

  public newEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""
  };

  public delEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""
  };

  public curEmployee:Employee={
    id:0,
    employeeName:"",
    address:"",
    phone:0,
    country:""
  };


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

  createEmployee(addForm: NgForm){
    this.employeeService.create(this.newEmployee).subscribe((resp)=>{
      this.getEmployeeList();
      addForm.reset();
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }

  deleteEmployee(employee:Employee){
    this.delEmployee=employee;
  }

  OnDeleteEmployee(){
    this.employeeService.deleteEmployee(this.delEmployee.id).subscribe((resp)=>{
      this.getEmployeeList();
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });
  }


  getEmployeeById(currentEmployee: Employee){

    console.log(currentEmployee);
    this.employeeService.getEmployeeById(currentEmployee.id).subscribe((resp)=>{
      this.curEmployee=resp;
    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });

  }

  onUpdate(updateForm: NgForm){

    this.employeeService.updateEmployee(this.curEmployee).subscribe((resp)=>{
      this.getEmployeeList();

    },(error:HttpErrorResponse)=>{
      alert(error.message);
    });

  }

}
