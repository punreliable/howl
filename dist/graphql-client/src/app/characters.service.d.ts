import { Apollo } from 'apollo-angular';
export interface Character {
    name: string;
    homeworld: string;
    species: string;
}
export interface CharacterDetail extends Character {
    height: number;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}
export interface CharactersResult {
    count: number;
    characters: Character[];
}
export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    language: string;
    homeworld: string;
}
export declare class CharactersService {
    private apollo;
    private charactersQuery;
    private findCharacterQuery;
    private findSpeciesQuery;
    constructor(apollo: Apollo);
    getCharacters(offset: number): Promise<CharactersResult>;
    findCharacter(name: string): Promise<CharacterDetail>;
    findSpecies(name: string): Promise<Species>;
}
