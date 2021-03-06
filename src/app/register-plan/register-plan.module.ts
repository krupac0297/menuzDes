import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterPlanComponent} from './register-plan.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterPlanComponent
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterPlanComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterPlanModule{ }
