import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Orders3Component } from './orders3.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:Orders3Component
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [Orders3Component],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class Orders3Module{ }
