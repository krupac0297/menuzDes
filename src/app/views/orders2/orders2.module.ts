import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Orders2Component } from './orders2.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:Orders2Component
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [Orders2Component],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class Orders2Module{ }
