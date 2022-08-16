import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeadComponent } from './template/head/head.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './views/menu/menu.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Importando a configuração de algumas linguagens */
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import { ColaboradoresViewComponent } from './components/colaboradores/colaboradores-view/colaboradores-view.component';
import { ColaboradoresAddComponent } from './components/colaboradores/colaboradores-add/colaboradores-add.component';
import { ColaboradoresUpdateComponent } from './components/colaboradores/colaboradores-update/colaboradores-update.component';
import { ColaboradoresDeleteComponent } from './components/colaboradores/colaboradores-delete/colaboradores-delete.component';
registerLocaleData(localept);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);
/* *********************************************** */


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    ColaboradoresViewComponent,
    ColaboradoresAddComponent,
    ColaboradoresUpdateComponent,
    ColaboradoresDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MaterialModule, 
    NgxMaskModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  entryComponents: [
    ColaboradoresAddComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
