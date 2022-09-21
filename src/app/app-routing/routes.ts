import { Routes } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";
import { MainProfileComponent } from "../main-profile/main-profile.component";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

export const routes: Routes = [
    { path: 'login' , component: LoginComponent},
    { 
        path: 'main-app-view',
        component: MainComponent, 
        ...canActivate( () => redirectUnauthorizedTo(['login']) )
    },
    {path: 'main-app-profile', component: MainProfileComponent},
    { path: '' , redirectTo: 'login', pathMatch: 'full' }
]