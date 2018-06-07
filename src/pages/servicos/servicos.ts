import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

  todo = {
    'title': '',
    'description': '',
  }
  logForm() {
    console.log(this.todo)
  }

  sendEmail(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
      });

      let email = {
        to: 'gracianex@gmail.com',
        // cc: 'erika@mustermann.de',
        // bcc: ['john@doe.com', 'jane@doe.com'],
        // attachments: [
        //   'file://img/logo.png',
        //   'res://icon.png',
        //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //   'file://README.pdf'
        // ],
        subject: this.todo.title, 
        body: this.todo.description,
        isHtml: true
      };

      // Send a text message using default options
      this.emailComposer.open(email);
    }

}
