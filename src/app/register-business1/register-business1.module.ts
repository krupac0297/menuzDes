import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterBusiness1Component} from './register-business1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterBusiness1Component
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterBusiness1Component],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterBusiness1Module{ }
