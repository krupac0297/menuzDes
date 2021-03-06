import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterBusinessComponent} from './register-business.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterBusinessComponent
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterBusinessComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterBusinessModule{ }
