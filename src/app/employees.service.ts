import { Injectable } from '@angular/core';
import {EMPLOYEE_LIST} from "../assets/employee-list";
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees = EMPLOYEE_LIST;
  constructor() { }

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee:Employee){
    this.employees.push(employee);
  }
}
