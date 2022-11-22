import { OnInit } from '@angular/core';
import { Character, CharactersService } from '../characters.service';
export declare class BrowseComponent implements OnInit {
    private charactersService;
    offset: number;
    count: number;
    characters: Character[];
    constructor(charactersService: CharactersService);
    ngOnInit(): Promise<void>;
    updateCharacters(): Promise<void>;
    showPrevious(): boolean;
    showNext(): boolean;
    onPrevious(): Promise<void>;
    onNext(): Promise<void>;
}
