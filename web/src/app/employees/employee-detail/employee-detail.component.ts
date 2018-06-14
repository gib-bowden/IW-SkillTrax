import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../models/employee.model';
import { MatButtonToggleGroup } from '@angular/material';


@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() employee:Employee
  //@ViewChild('group') selections: MatButtonToggleGroup

  getToggleValues(values: string[]){
    console.log(values)
  }
  
  constructor() { }

  ngOnInit() {
  }

  tiles = [
    {columnName: "Management", items: [{name:'dog walking', isExpert: false}], color: 'lightblue'},
    {columnName: "Analytics", items: [{name:'tech stuff', isExpert: false},{name:'running', isExpert: false}], color: 'lightblue'},
    {columnName: "Technology", items: [{name:'dog walking', isExpert: false}], color: 'lightblue'},
    {columnName: "Certifications", items: [{name:'dog walking', isExpert: false}], color: 'lightblue'},
  ];

}
