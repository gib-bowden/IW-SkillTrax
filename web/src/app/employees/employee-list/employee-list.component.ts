import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject, of } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EmployeeListComponent implements OnInit {

  displayedColumns = ['name', 'role', 'analytics', 'technology', 'management', 'certCount'];
  dataSource = new EmployeeDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedEmployee: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Skill {
  name: string;
  type: string;
  solution: string;
  isExpert: boolean;
}

export interface Cert {
  name: string;
  org: string;
}

export interface Employee {
  employeeId: number;
  employeeName: string;
  role: string;
  hasManagement: boolean;
  hasAnalytics: boolean;
  hasTechnology: boolean;
  certCount: number;
  skills: Skill[];
  certs: Cert[];
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


export class EmployeeDataSource extends DataSource<any> {

  paginator: MatPaginator;
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Employee[]> {
    const rows = [];
    data.forEach(employee => rows.push(employee, { detailRow: true, employee }));
    console.log(rows);
    return of(rows);
  }

  disconnect() { }
}