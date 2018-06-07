import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-eouv',
  templateUrl: 'eouv.html',
})
export class EouvPage {

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EouvPage');
  }

  openBrowser() {
    const browser = this.iab.create(
    'https://sistema.ouvidorias.gov.br/publico/Manifestacao/RegistrarManifestacao.aspx', '_self');
    /** PARA ABRIR FORA DO APP ---> _BLANK <--- **/
  }



}
