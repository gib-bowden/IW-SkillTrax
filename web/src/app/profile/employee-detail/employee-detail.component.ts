import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employees/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employees/models/employee.model';

@Component({
  selector: 'profile-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class ProfileEmployeeDetailComponent implements OnInit {

  employee: Employee;
  employeeId: number;
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = +this.route.snapshot.params['id']
    this.employee = this.employeeService.getEmployee(this.employeeId)
  }

}
