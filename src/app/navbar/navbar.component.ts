import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logout()
    .then( () => {
      this.router.navigate(['/login'])
    })
    .catch();
  }
  mainProfile(){
    this.router.navigate(['/main-app-profile']);
  }
  mainView(){
    this.router.navigate(['/main-app-view']);
  }

}
