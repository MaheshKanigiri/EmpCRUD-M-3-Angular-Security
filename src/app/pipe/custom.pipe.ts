import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {


  //Custom-pipe-for-search-emp-by-country
  transform(employees: Employee[], country: string): Employee[] {
    if (!employees) {
      return [];
    }
    if (!country) {
      return [];
    }
    country = country.toLowerCase();
    return employees.filter(employee => {
      return employee.country.toLowerCase().includes(country);
    });
  }

}
