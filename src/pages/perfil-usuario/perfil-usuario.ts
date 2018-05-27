import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Perfil } from '../../models/perfil';
import { HomePage } from '../home/home';
import { MostrarPerfilPage } from '../mostrar-perfil/mostrar-perfil';



@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {
	perfil = {} as Perfil;
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuarioPage');
  }

  /**** criarPerfil(){

    //criar registro no bd
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
      .then(() => this.navCtrl.setRoot('MostrarPerfilPage'));
    })
  }   ****/


  criarPerfil(){

    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
      .then(() => this.navCtrl.push('HomePage'));
    })
  }

}
