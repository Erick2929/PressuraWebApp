import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  hide = true;

  formReg!: FormGroup;
  formSign! : FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    this.formReg = new FormGroup({
      email : new FormControl(),
      password: new FormControl()
    })
    this.formSign = new FormGroup({
      email : new FormControl(),
      password : new FormControl()

    })
   }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.userService.login(this.formSign.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/main-app-view']);
    })
    .catch(error => console.log(error));
  }

  onSubmitRegister(){
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
