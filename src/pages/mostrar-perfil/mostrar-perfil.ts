import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Perfil } from '../../models/perfil';
import { HomePage } from '../home/home';

/**
 * Generated class for the MostrarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-perfil',
  templateUrl: 'mostrar-perfil.html',
})
export class MostrarPerfilPage {
  perfilData: FirebaseObjectObservable<Perfil>


  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MostrarPerfilPage');
    var usuario = this.afAuth.auth.currentUser;
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid && usuario) {
        this.perfilData = this.afDatabase.object(`perfil/${data.uid}`);
      }
    })
  }

  irHome(){
     this.navCtrl.setRoot('HomePage');
  }

}
