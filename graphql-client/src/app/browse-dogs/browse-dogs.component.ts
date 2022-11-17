
import { Component, OnInit } from '@angular/core';
import { Dog, GetDogsService } from '../get-dogs.service';
// import { Character, CharactersService } from '../characters.service';

@Component({
  selector: 'app-browse-dogs',
  templateUrl: './browse-dogs.component.html',
  styleUrls: ['./browse-dogs.component.scss']
})

export class BrowseDogsComponent implements OnInit {
  
  offset: number = 0;
  count: number = 0;
  // characters: Character[] = [];
  dogs: Dog[] = [];
  
  // constructor(private charactersService: CharactersService) {}

  constructor(private getDogsService: GetDogsService) {}

  async ngOnInit(): Promise<void> {
    await this.updateDogs();
  }

  async updateDogs() {
    const result = await this.getDogsService.getDogs(this.offset);
    this.count = result.count;
    this.dogs = result.dogs;
  }

  showPrevious() {
    return this.offset > 0;
  }

  showNext() {
    return this.offset + 10 < this.count;
  }

  async onPrevious() {
    this.offset -= 10;
    await this.updateDogs();
  }

  async onNext() {
    this.offset += 10;
    await this.updateDogs();
  }






}