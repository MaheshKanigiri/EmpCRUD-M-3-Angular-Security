import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchEmpComponent } from './components/search-emp/search-emp.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
