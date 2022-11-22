"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var graphql_module_1 = require("./graphql.module");
var http_1 = require("@angular/common/http");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var browse_component_1 = require("./browse/browse.component");
var character_component_1 = require("./character/character.component");
var species_component_1 = require("./species/species.component");
var single_dog_component_1 = require("./single-dog/single-dog.component");
var dog_breeds_component_1 = require("./dog-breeds/dog-breeds.component");
var site_footer_component_1 = require("./site-footer/site-footer.component");
var highlight_card_component_1 = require("./highlight-card/highlight-card.component");
var next_steps_component_1 = require("./next-steps/next-steps.component");
var browse_dogs_component_1 = require("./browse-dogs/browse-dogs.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                browse_component_1.BrowseComponent,
                character_component_1.CharacterComponent,
                species_component_1.SpeciesComponent,
                single_dog_component_1.SingleDogComponent,
                dog_breeds_component_1.DogBreedsComponent,
                site_footer_component_1.SiteFooterComponent,
                highlight_card_component_1.HighlightCardComponent,
                next_steps_component_1.NextStepsComponent,
                browse_dogs_component_1.BrowseDogsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                graphql_module_1.GraphQLModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
