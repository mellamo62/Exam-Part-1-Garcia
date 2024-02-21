import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EmployeesService} from "../employees.service";
import {Employee} from "../Employee";

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './ex11.component.html',
  styleUrl: './ex11.component.css'
})
export class Ex11Component {
  employee: Employee | undefined;
  employeesService:EmployeesService;
  constructor(private service:EmployeesService) {
    this.employeesService = service;
  }
form = new FormGroup({
  "name": new FormControl("",[Validators.required,Validators.maxLength(30)]),
  "position": new FormControl("",[Validators.required,Validators.minLength(5)]),
  "salary": new FormControl("",[Validators.required,Validators.max(10000)]),
  "email": new FormControl("",[Validators.required, Validators.email])
})

  onSubmit(){

    this.employee ={
      name:`${this.form.value.name}`,
      position:`${this.form.value.position}`,
      salary:Number(<string>this.form.value.salary),
      email:`${this.form.value.email}`,
    }

    this.employeesService.addEmployee(this.employee);


  }
}
