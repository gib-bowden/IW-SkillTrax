import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:any

  constructor() { }

  setCurrentUser(uniqueId: string) {
    this.currentUser = data.find((user) => {
      return user.AdUniqueIdentifier == uniqueId
    })
    console.log(this.currentUser)
  }

  getCurrentUser() {
    return this.currentUser
  }
}

const data: any[] = [
  {
    "employeeId": 123,
    "AdUniqueIdentifier": "gib.bowden@infoworks-tn.com",
    "employeeName": "Gib Bowden",
    "role": "Consultant",
    "isAdmin": true

  },
  {
    "employeeId": 124,
    "AdUniqueIdentifier": "John@skilltrax.onmicrosoft.com",
    "employeeName": "John Doe",
    "role": "Consultant",
    "isAdmin": false
  },
  {
    "employeeId": 125,
    "AdUniqueIdentifier": "Jane@skilltrax.onmicrosoft.com",
    "employeeName": "Jane Doe",
    "role": "Consultant",
    "isAdmin": false
  },
];
