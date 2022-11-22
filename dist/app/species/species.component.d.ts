import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService, Species } from '../characters.service';
export declare class SpeciesComponent implements OnInit {
    private route;
    private characterService;
    species: Species;
    constructor(route: ActivatedRoute, characterService: CharactersService);
    ngOnInit(): void;
}
