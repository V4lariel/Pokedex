import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {PokemonDetailsComponent} from "./components/pokemon-details/pokemon-details.component";
import {AddPokemonComponent} from "./components/add-pokemon/add-pokemon.component";
import {EditPokemonComponent} from "./components/edit-pokemon/edit-pokemon.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent},
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: 'ajout', component: AddPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
