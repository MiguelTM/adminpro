import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
  providedIn: "root"
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    public router: Router,
    public _usuarioService: UsuarioService) {}
  canActivate(): boolean {
    if (this._usuarioService.estalogueado()) {
      console.log("paso el guard");

      return true;
    } else {
      console.log("Bloqeuado por el guard");

      this.router.navigate(['/login']);

      console.log("Bloqueado");

      return false;
    }
  }
}
