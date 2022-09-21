import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NavbarComponent } from '../navbar/navbar.component';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  panelOpenState = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  volverLogin(){
    this.router.navigate(['/login']);
  }

  logOut(){
    this.userService.logout()
    .then( () => {
      this.router.navigate(['/login'])
    })
    .catch();
  }

}
