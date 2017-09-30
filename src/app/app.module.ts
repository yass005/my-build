/*the root module that you bootstrap to launch the application AppModule.*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CategoriesComponent } from './categorie/categories/categories.component';
import { AjouterCategorieComponent } from './categorie/ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './categorie/modifier-categorie/modifier-categorie.component';
import { AnnoncesComponent } from './annonce/annonces/annonces.component';
import { VoirAnnonceComponent } from './annonce/voir-annonce/voir-annonce.component';
import { Error404Component } from './error404/error404.component';
 import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './providers/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './routes/authGuard';
import {NgxPaginationModule} from 'ngx-pagination';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from "app/dialog-service.service";
import { AnnoncesValideComponent } from './annonce/annonces-valide/annonces-valide.component';
import { AnnoncesAValiderComponent } from './annonce/annonces-avalider/annonces-avalider.component';
import { ToastService } from './toast.service';
import { ShowstatComponent } from './showstat/showstat.component';
import {ChartsModule, Color} from 'ng2-charts';
import { firebaseConfig } from "environments/firebase.config";





@NgModule({
  declarations: [

ConfirmComponent,
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    CategoriesComponent,
    AjouterCategorieComponent,
    ModifierCategorieComponent,
    AnnoncesComponent,
    VoirAnnonceComponent,
    Error404Component,
    AnnoncesValideComponent,
    AnnoncesAValiderComponent,
    ShowstatComponent,

  ],
  imports: [
    BrowserModule,
    ChartsModule,
  BootstrapModalModule.forRoot({container:document.body}),
      NgxPaginationModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(routes),
   ToastModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpModule
  ],
  providers: [
    AuthGuard,
    ToastService,
    DialogService,
    AuthService


  ],
    entryComponents: [
        ConfirmComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
