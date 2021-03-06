import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreOrdersComponent } from './store-orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { Routes, RouterModule } from '@angular/router';
import { Orders1aComponent } from './add-orders/orders1a/orders1a.component';

const routes: Routes = [
  {
    path: '',
    component:StoreOrdersComponent,
    children: [
      {
        path: 'add-orders',
        component: AddOrdersComponent,
      },
    ]
  },

]
const routingModule = RouterModule.forChild(routes);
@NgModule({
  declarations: [StoreOrdersComponent,AddOrdersComponent, Orders1aComponent],
  imports: [
    CommonModule,
    routingModule
  ]
})
export class StoreOrdersModule{ }

