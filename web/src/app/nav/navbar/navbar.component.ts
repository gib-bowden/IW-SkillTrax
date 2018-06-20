import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../employees/services/user.service';
import { AdalService } from 'adal-angular4';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .fill-space {flex: 1 1 auto;}
  `]
})
export class NavbarComponent implements OnInit {

  name:string

  constructor(private adal:AdalService, private userService:UserService, private authService:AuthService) { }

  ngOnInit() {
    // this.authService.getUser().then((user) => {
    //   console.log(user);
    // });
  }

  signout():void {
    this.authService.signout(); 
  }

}
