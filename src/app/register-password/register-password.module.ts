import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterPasswordComponent} from './register-password.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterPasswordComponent
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterPasswordComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterPasswordModule{ }
