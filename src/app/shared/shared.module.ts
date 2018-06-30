import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [SidebarComponent, HeaderComponent, BreadcrumbsComponent],
  exports: [SidebarComponent, HeaderComponent, BreadcrumbsComponent]
})
export class SharedModule {}