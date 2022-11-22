import { OnInit } from '@angular/core';
import { Dog, GetDogsService } from '../get-dogs.service';
export declare class BrowseDogsComponent implements OnInit {
    private getDogsService;
    offset: number;
    count: number;
    dogs: Dog[];
    constructor(getDogsService: GetDogsService);
    ngOnInit(): Promise<void>;
    updateDogs(): Promise<void>;
    showPrevious(): boolean;
    showNext(): boolean;
    onPrevious(): Promise<void>;
    onNext(): Promise<void>;
}
