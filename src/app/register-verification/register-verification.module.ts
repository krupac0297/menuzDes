import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterVerificationComponent} from './register-verification.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterVerificationComponent
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterVerificationComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterVerificationModule{ }
