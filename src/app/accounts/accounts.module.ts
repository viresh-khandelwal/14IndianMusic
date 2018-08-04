import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountsRoutingModule } from './accounts-routing/accounts-routing.module';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AccountsModule { }
