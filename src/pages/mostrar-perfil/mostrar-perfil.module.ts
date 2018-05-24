import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarPerfilPage } from './mostrar-perfil';

@NgModule({
  declarations: [
    MostrarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarPerfilPage),
  ],
})
export class MostrarPerfilPageModule {}
