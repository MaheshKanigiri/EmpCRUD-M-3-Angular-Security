import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchEmpComponent } from './components/search-emp/search-emp.component';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login',component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password', component: PasswordComponent},
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard], data: { expectedRoles: ['User', 'Admin'] } },
  { path: 'admin', component: AdminComponent, canActivate: [GuardGuard], data: { expectedRoles: ['Admin', 'User'] } },
  { path: 'search', component: SearchEmpComponent, canActivate: [GuardGuard], data: { expectedRoles: ['User'] } },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
