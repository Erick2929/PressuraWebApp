import { Routes } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";

export const routes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: 'main-app-view', component: MainComponent },
    { path: '' , redirectTo: 'login', pathMatch: 'full' }
]