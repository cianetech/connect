import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { MostrarPerfilPage } from '../mostrar-perfil/mostrar-perfil'


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  user = {} as User;
  constructor(
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

async cadastrar(user: User){

    try{
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
          let toast = this.toastCtrl.create({
          message: `Cadastro feito com sucesso`,
          duration: 5000
        });
        toast.present();

        this.navCtrl.push(PerfilUsuarioPage);
      }
    }catch(e){
      console.error(e);
    }
}

/**** SO PARA TESTE - DELETAR ESTE CODIGO DPS ***/
 cadastro() {
   this.navCtrl.push(PerfilUsuarioPage);
 }

 mostrarperfil() {
   this.navCtrl.push(MostrarPerfilPage);
 }



}
