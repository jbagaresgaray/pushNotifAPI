import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, ToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent, ToolbarComponent],
})
export class SharedComponentsModule {}
