import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, UsuarioService } from './service.index';
import {  HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SidebarService,
    SettingsService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
