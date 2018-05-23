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





   async login(user: User){

        const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        if(result){
          //this.storage.set('talogado', 'logado');
          this.navCtrl.push(HomePage);
        }  if(!result) {
            let toast = this.toastCtrl.create({
            message: `Usuário não encontrado, tente novamente`,
            duration: 3000
          });
            toast.present();
      /** let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present(); ***/
        }

      }
}
