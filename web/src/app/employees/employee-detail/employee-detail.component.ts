import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() employee:Employee
  
  constructor() { }

  ngOnInit() {
  }

}
