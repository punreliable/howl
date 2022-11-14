import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

export interface Dog {
  name: string;
  breed_primary: string;
  state: string;
}

export interface DogDetails extends Dog {
  name: string;
  breed_primary: string;
  contact_state: string;
}

export interface DogsResult {
  count: number;
  dogs: Dog[];
}

export interface Breed {
  breed_primary: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetDogsService {

  private dogsQuery: QueryRef<{dogs: DogsResult}, {offest:number}>;
  private findDogQuery: QueryRef<{dog: DogDetails}, {name: string}>;

  constructor(private apollo: Apollo) {
    this.dogsQuery = this.apollo.watchQuery({
      query: gql`query getDogs($offset: Int!){
        getDogs($offset: Int!){
          count
          allDogs{
            name,
            breed_primary,
            contact_state
          }
        }
      }
    }`
    });
    this.findDogQuery = this.apollo.watchQuery({
      query: gql`query dog($name: String!) {
        dog(name: $name) {
          name
          breed_primary
        }
      }`
    });
  }
  async getDogs(offset: number): Promise<DogsResult> {
    const result = await this.dogsQuery.refetch({ offset });
    return result.data.dogs;
  }

  async findBreed(breed_primary: string): Promise<Breed> {
    const result = await this.findDogQuery.refetch({ name });
    return result.data.breed_primary;
  }
}
