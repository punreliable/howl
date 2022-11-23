import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseDogsComponent } from './browse-dogs/browse-dogs.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';
import { AboutThisComponent } from './about-this/about-this.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse-dogs',
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
  {
    path: 'about',
    component: AboutThisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
