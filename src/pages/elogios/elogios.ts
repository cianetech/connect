import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-elogios',
  templateUrl: 'elogios.html',
})
export class ElogiosPage {
  elogios: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private db: AngularFireDatabase) {

      this.elogios = db.object('elogios').valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElogiosPage');
  }

  todo = {
    'mensagem': ''
  }
  
  
  logForm() {
    const elogiosRef = this.db.list('elogios');
      elogiosRef.push({
        mensagem: this.todo.mensagem
      });
  
  }











  // sendEmail(){
  //   this.emailComposer.isAvailable().then((available: boolean) =>{
  //     if(available) {
  //       //Now we know we can send
  //     }
  //     });

  //     let email = {
  //       to: 'gracianex@gmail.com',
  //       // cc: 'erika@mustermann.de',
  //       // bcc: ['john@doe.com', 'jane@doe.com'],
  //       // attachments: [
  //       //   'file://img/logo.png',
  //       //   'res://icon.png',
  //       //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
  //       //   'file://README.pdf'
  //       // ],
  //       subject: this.todo.title, 
  //       body: this.todo.description,
  //       isHtml: true
  //     };

  //     // Send a text message using default options
  //     this.emailComposer.open(email);
  //   }
    
}
