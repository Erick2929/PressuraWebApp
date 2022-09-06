import { Routes } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

export const routes: Routes = [
    { path: 'login' , component: LoginComponent},
    { 
        path: 'main-app-view',
        component: MainComponent, 
        ...canActivate( () => redirectUnauthorizedTo(['login']) )
    },
    { path: '' , redirectTo: 'login', pathMatch: 'full' }
]