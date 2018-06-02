import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .fill-space {flex: 1 1 auto;}
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
