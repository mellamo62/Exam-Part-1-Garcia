import { Component } from '@angular/core';
import {Employee} from "../Employee";

import {NgForOf} from "@angular/common";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  employees: Employee[] = [];



  constructor(private srvEmplo:EmployeesService) {
    this.employees = srvEmplo.getEmployees();
  }

  ngOnInit(): void {

  }

  sortedBy(value:any){
    if (value === "descending"){
      this.employees.sort((n1,n2)=>(n1.name > n2.name ? 1:-1));
      console.log(this.employees)
      console.log("primero")
    }
    if(value === "ascending"){
      this.employees.sort((n1,n2)=>(n1.name > n2.name ? -1:1));
      console.log("segundo")
    }

  }

}
