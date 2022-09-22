import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  panelOpenState = false;

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Karen'}, {name: 'Eduardo'}, {name: 'Erick'}];
  filteredOptions!: Observable<User[]>;


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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
  
  mainView(){
    this.router.navigate(['/main-app-view']);
  }

}
