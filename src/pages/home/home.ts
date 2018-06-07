//PAGINA INICIO DO APP

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmergenciaPage } from '../emergencia/emergencia';
import { ServicosPage } from '../servicos/servicos';
import { EouvPage } from '../eouv/eouv';
import { SobrePage } from '../sobre/sobre';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private callNumber: CallNumber, public navCtrl: NavController, public navParams: NavParams) {

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
  sobre() {
    this.navCtrl.push(SobrePage);
  }

  call() {
  this.callNumber.callNumber("996860501", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}


}
