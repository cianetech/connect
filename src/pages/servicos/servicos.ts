import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {
  //icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

  items = ['Acessibilidade', 'Abandono de Animais',
  'Problemas Energia Elétrica', 'Ônibus', 'Outros'];

  icons = ['flask', 'wifi', 'beer', 'football', 'basketball'];



  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      item: item
    });
  }

  itemShow(icon) {
    this.icons.push({icon:icon
    });
  }

}
