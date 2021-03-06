import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Orders1Component } from './orders1.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:Orders1Component
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [Orders1Component],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class Orders1Module { }
