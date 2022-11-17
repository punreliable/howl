import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseDogsComponent } from './browse-dogs/browse-dogs.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse',
    component: BrowseDogsComponent,
  },
  {
    path: 'character',
    component: CharacterComponent,
  },
  {
    path: 'species',
    component: SpeciesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }