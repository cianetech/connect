import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {

  }

  /*** ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } ***/

  home() {
    this.navCtrl.push(HomePage);
  }

  cadastrar() {
    this.navCtrl.push(CadastroPage);
  }

  createProfile() {
    this.navCtrl.push(PerfilUsuarioPage);
  }





   async login(user: User){

       try {
        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if(result) {
          this.navCtrl.push(HomePage);
          let toast = this.toastCtrl.create({
            message: 'Bem-vindo(a) ' + user.email,
            duration: 5000
          });
          toast.present();
        }

      }  catch (e) {

            if (!this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)) {
              let toast = this.toastCtrl.create({
              message: 'Usuário não encontrado, tente novamente',
              duration: 5000});
              toast.present();
           }
           console.error(e);
      }   /*** esse catch não está pegando ***/


          //this.storage.set('talogado', 'logado');

      /** let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present(); ***/
        }

}
