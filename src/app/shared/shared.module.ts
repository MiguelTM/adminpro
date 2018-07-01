import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@NgModule({

  imports: [RouterModule, CommonModule],
  declarations: [SidebarComponent, HeaderComponent, BreadcrumbsComponent],
  exports: [SidebarComponent, HeaderComponent, BreadcrumbsComponent]
})
export class SharedModule {}