import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(employeeId: number): Employee {
    return data.find((employee) => {
      return employee.employeeId == employeeId
    })
  }
}

const data: Employee[] = [
  {
    "employeeId": 123,
    "employeeName": "Gib Bowden",
    "role": "Consultant",
    "hasManagement": true,
    "hasAnalytics": true,
    "hasTechnology": true,
    "certCount": 2,

  },
  {
    "employeeId": 124,
    "employeeName": "John Doe",
    "role": "Consultant",
    "hasManagement": false,
    "hasAnalytics": false,
    "hasTechnology": true,
    "certCount": 3,
    // "skills": [
    //   {
    //     "name": "Dumb Shit 1",
    //     "type": "BA work",
    //     "solution": "Technology",
    //     "isExpert": true
    //   },
    //   {
    //     "name": "other shit 2",
    //     "type": "application",
    //     "solution": "Technology",
    //     "isExpert": false
    //   }
    // ],
    // "certs": [
    //   {
    //     "name": "Certified Shit",
    //     "org": "PMI"
    //   },
    //   {
    //     "name": "other cert",
    //     "org": "BSA"
    //   },
    //   {
    //     "name": "scum master",
    //     "org": "CSC"
    //   }
    // ]
  }
];
