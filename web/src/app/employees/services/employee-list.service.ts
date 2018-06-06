import { Injectable } from '@angular/core'
import { Subject, Observable, of} from 'rxjs';
import { Employee } from '../models/employee.model';
import { DataSource } from '@angular/cdk/table';


@Injectable()
export class EventService {

    getEmployee(): Observable<Employee[]> {
        const rows = [];
        data.forEach(employee => rows.push(employee, { detailRow: true, employee }));
        console.log(rows);
        return of(rows);
      }
    
      disconnect() { }
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
      "skills": [
        {
          "name": "Requirements",
          "type": "BA work",
          "solution": "Management",
          "isExpert": true
        },
        {
          "name": "other shit",
          "type": "application",
          "solution": "Analytics",
          "isExpert": false
        }
      ],
      "certs": [
        {
          "name": "Certified Shit",
          "org": "PMI"
        },
        {
          "name": "other cert",
          "org": "BSA"
        }
      ]
    },
    {
      "employeeId": 124,
      "employeeName": "John Doe",
      "role": "Consultant",
      "hasManagement": false,
      "hasAnalytics": false,
      "hasTechnology": true,
      "certCount": 3,
      "skills": [
        {
          "name": "Dumb Shit 1",
          "type": "BA work",
          "solution": "Technology",
          "isExpert": true
        },
        {
          "name": "other shit 2",
          "type": "application",
          "solution": "Technology",
          "isExpert": false
        }
      ],
      "certs": [
        {
          "name": "Certified Shit",
          "org": "PMI"
        },
        {
          "name": "other cert",
          "org": "BSA"
        },
        {
          "name": "scum master",
          "org": "CSC"
        }
      ]
    }
  ];