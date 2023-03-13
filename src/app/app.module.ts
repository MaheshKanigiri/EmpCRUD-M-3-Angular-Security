import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom.pipe';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { SearchEmpComponent } from './components/search-emp/search-emp.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './guard/guard.guard';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './service/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CustomPipe,
    CustomDirectiveDirective,
    SearchEmpComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,
   GuardGuard,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
