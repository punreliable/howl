import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';
import { SingleDogComponent } from './single-dog/single-dog.component';
import { DogBreedsComponent } from './dog-breeds/dog-breeds.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrowseComponent,
    CharacterComponent,
    SpeciesComponent,
    SingleDogComponent,
    DogBreedsComponent,
    SiteFooterComponent,
    HighlightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
