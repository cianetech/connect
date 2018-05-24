import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';

//importa as paginas (telas) usadas no app
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EmergenciaPage } from '../pages/emergencia/emergencia';
import { ServicosPage } from '../pages/servicos/servicos';
import { EouvPage } from '../pages/eouv/eouv';
import { DuvidaPage } from '../pages/duvida/duvida';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { AcessibPage } from '../pages/acessib/acessib';
import { AnimaisPage } from '../pages/animais/animais';
import { EnergiaPage } from '../pages/energia/energia';

/*** para o BD ***/
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig:FirebaseAppConfig = {
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
    ListPage,
    LoginPage,
    CadastroPage,
    EmergenciaPage,
    ServicosPage,
    EouvPage,
    DuvidaPage,
    PerfilUsuarioPage,
    AcessibPage,
    AnimaisPage,
    EnergiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPage,
    EmergenciaPage,
    ServicosPage,
    EouvPage,
    DuvidaPage,
    PerfilUsuarioPage,
    AcessibPage,
    AnimaisPage,
    EnergiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber
  ]
})
export class AppModule {}
