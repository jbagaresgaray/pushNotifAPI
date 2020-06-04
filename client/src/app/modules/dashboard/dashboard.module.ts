import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SharedComponentsModule } from '../../shared/components/shared.components.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
