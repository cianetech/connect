import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcessibPage } from '../acessib/acessib';
import { AnimaisPage } from '../animais/animais';
import { EnergiaPage } from '../energia/energia';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

  acessib() {
  	this.navCtrl.push(AcessibPage);
  }

  animais() {
    this.navCtrl.push(AnimaisPage);
  }

  energia() {

  }

  onibus() {

  }

  outros() {

  }
 

}
