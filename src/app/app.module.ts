import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



//importa as paginas (telas) usadas no app
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EmergenciaPage } from '../pages/emergencia/emergencia';
import { ServicosPage } from '../pages/servicos/servicos';
import { ElogiosPage } from '../pages/elogios/elogios';
import { EouvPage } from '../pages/eouv/eouv';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { MostrarPerfilPage } from '../pages/mostrar-perfil/mostrar-perfil';
import { SobrePage } from '../pages/sobre/sobre';


/*** para o BD ***/
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';



var config = {
    apiKey: "AIzaSyBk7vT86qZb-MEXIo1P6AeNSGhy7XxSXLA",
    authDomain: "connect-fdc01.firebaseapp.com",
    databaseURL: "https://connect-fdc01.firebaseio.com",
    projectId: "connect-fdc01",
    storageBucket: "connect-fdc01.appspot.com",
    messagingSenderId: "838421080408"
};

//inserir todas as paginas aqui
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EmergenciaPage,
    ServicosPage,
    ElogiosPage,
    EouvPage,
    PerfilUsuarioPage,
    MostrarPerfilPage,
    SobrePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EmergenciaPage,
    ServicosPage,
    ElogiosPage,
    EouvPage,
    PerfilUsuarioPage,
    MostrarPerfilPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    InAppBrowser,
    EmailComposer
  ]
})
export class AppModule {}
