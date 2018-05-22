//PAGINA INICIO DO APP

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmergenciaPage } from '../emergencia/emergencia';
import { ServicosPage } from '../servicos/servicos';
import { EouvPage } from '../eouv/eouv';
import { DuvidaPage } from '../duvida/duvida';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }*/

  emergencia() {
    this.navCtrl.push(EmergenciaPage);
  }
  servicos() {
    this.navCtrl.push(ServicosPage);
  }
  eouv() {
    this.navCtrl.push(EouvPage);
  }
  duvida() {
    this.navCtrl.push(DuvidaPage);
  }


}
