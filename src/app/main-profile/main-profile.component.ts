import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {

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


}
