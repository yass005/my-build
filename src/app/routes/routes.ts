/*--------------------------- routes--------------------------------*/
/*Ths class is an  Angular Router that enables navigation from one */
/* view to the next as users perform application tasks.          .*/
/*   AuthGuard is implemeted in every path                       */
/*--------------------------------------------------------------*/

import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AjouterCategorieComponent } from '../categorie/ajouter-categorie/ajouter-categorie.component';
import { CategoriesComponent } from '../categorie/categories/categories.component';
import { ModifierCategorieComponent } from '../categorie/modifier-categorie/modifier-categorie.component';
import { AnnoncesComponent } from '../annonce/annonces/annonces.component';
import { VoirAnnonceComponent } from '../annonce/voir-annonce/voir-annonce.component';
import { Error404Component } from '../error404/error404.component';
import { AuthGuard } from './authGuard';
import { Route } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AnnoncesValideComponent } from '../annonce/annonces-valide/annonces-valide.component';
import { AnnoncesAValiderComponent } from '../annonce/annonces-avalider/annonces-avalider.component';
import { ShowstatComponent } from '../showstat/showstat.component';




export const routes: Route[] = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'Menu', component: MenuComponent, canActivate: [AuthGuard], data: { animation: 'Menu' }
  },

  {
    path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard], data: { animation: 'dashboard'}
  },

  { path: 'stat', component: ShowstatComponent, canActivate: [AuthGuard],data: { animation: 'stat' }
},

  {
    path: 'categories',
    children: [
      { path: 'manageCategories', component: CategoriesComponent, canActivate: [AuthGuard], data: { animation: 'manageCategories' } },
      { path: 'addCategory', component: AjouterCategorieComponent, canActivate: [AuthGuard], data: { animation: 'addCategory' } },
      { path: 'updateCategory/:id', component: ModifierCategorieComponent, canActivate: [AuthGuard], data: { animation: 'updateCategory/:id' } },
    ]
  },

  {
    path: 'Annonce',
    children: [
      { path: 'Annonces', component: AnnoncesComponent, canActivate: [AuthGuard], data: { animation: 'Annonces' } },
      { path: 'AnnoncesValide', component: AnnoncesValideComponent, canActivate: [AuthGuard], data: { animation: 'AnnoncesValide' } },
      { path: 'AnnoncesAValider', component: AnnoncesAValiderComponent, canActivate: [AuthGuard], data: { animation: 'AnnoncesAValider' } },
      { path: 'annonce/:id/:id2', component: VoirAnnonceComponent, canActivate: [AuthGuard], data: { animation: 'annonce/:id/:id2' } },

    ]

  },

  // Not lazy-loaded routes
  { path: 'login', component: LoginComponent },
  { path: '404', component: Error404Component },

  // Not found
  { path: '**', redirectTo: '404' }

];
@NgModule({
  providers: [

    AuthGuard,
  ]
})
class RestModule {
}
