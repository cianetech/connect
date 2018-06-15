import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})


export class ServicosPage {  
  relato: Observable<any>;
  
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private db: AngularFireDatabase, public toastCtrl: ToastController, public alertCtrl: AlertController
    ) {
      
      this.relato = db.object('relato').valueChanges();
      
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }

 

  todo = {
    'categoria': '',
    'local': '',
    'description': ''
  }

  //AJEITAR ESTE CÓDIGO

  logForm() {
    try {
    const relatoRef = this.db.list('relato');
      relatoRef.push({
        categoria: this.todo.categoria,
        local: this.todo.local,
        description: this.todo.description
      });

      let toast = this.toastCtrl.create({
        message: 'Mensagem enviada com sucesso',
        duration: 5000,
        position: 'top'
      });
      toast.present();

    } catch(e) {
        console.log(e); 
       }
    }

     
  
  }
 



  /*************** CÓDIGO PARA O EMAIL COMPOSER *********/

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
        
  //       body: this.todo,
  //       isHtml: true
  //     };

  //     // Send a text message using default options
  //     this.emailComposer.open(email);
  //   }


