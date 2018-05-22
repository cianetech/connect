import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  /*** ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } ***/

  home() {
    this.navCtrl.push(HomePage);
  }

  cadastro() {
    this.navCtrl.push(CadastroPage);
  }

}
