import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreShellComponent } from './store-shell/store-shell.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { FileuploadModule } from 'src/app/_modules/fileupload/fileupload.module';
import { PaginationModule } from 'src/app/_modules/pagination/pagination.module';
import { ShellStaffFilterComponent } from './shell-staff-filter/shell-staff-filter.component';
import { ShellFilterComponent } from './shell-filter/shell-filter.component';

const routes: Routes = [
  {
    path: '',
    component: StoreShellComponent,
  },
]

@NgModule({
  declarations: [StoreShellComponent, ShellStaffFilterComponent, ShellFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FileuploadModule,
    PaginationModule
  ]
})
export class StoreShellModule { }
