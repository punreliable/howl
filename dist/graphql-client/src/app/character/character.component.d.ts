import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetail, CharactersService } from '../characters.service';
export declare class CharacterComponent implements OnInit {
    private route;
    private characterService;
    character: CharacterDetail;
    constructor(route: ActivatedRoute, characterService: CharactersService);
    ngOnInit(): void;
}
