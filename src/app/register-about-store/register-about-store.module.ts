import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterAboutStoreComponent} from './register-about-store.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:RegisterAboutStoreComponent
  },
]

const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [RegisterAboutStoreComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class RegisterAboutStoreModule{ }
