import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProblèmeComponent } from './probl\u00E8me/probl\u00E8me.component';

const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'problème', component:ProblèmeComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},//si la route n'est pas sopécifié, rediriger l'utilisateu vers l'acceuille
  {path:'**', redirectTo:'acceuil', pathMatch:'full'},//si la route est inexistante, rediriger l'utilisateur vers acceuille
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
