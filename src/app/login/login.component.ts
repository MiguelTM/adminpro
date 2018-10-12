import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../modelos/usuario.model';

declare function init_plugins();

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public recuerdame: boolean = false;

  auth2: any;
  public email: string;
  constructor(public router: Router,
  public _usuarioService: UsuarioService) { }

  ngOnInit() {

    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

    googleInit() {

      gapi.load('auth2', () => {

        this.auth2 = gapi.auth2.init({

          client_id: '594503923128-hoqj23ukscd3urhusul7rle0sc0ctnn4.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'

        });

        this.attachSignin(document.getElementById('btnGoogle'));

      });
    }

    attachSignin(element) {

      this.auth2.attachClickHandler(element, {}, (googleUser) => {

       // let profile = googleUser.getBasicProfile();

       let token = googleUser.getAuthResponse().id_token;

       this._usuarioService.loginGoolge(token)
         .subscribe(() => window.location.href = '#/dashboard');

      });

    }

  ingresar(forma: NgForm) {

    if (forma.invalid) {

      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
                    .subscribe( correcto => this.router.navigate(['/dashboard']));
    // this.router.navigate(['/dashboard']);

  }
}
