import { Apollo } from 'apollo-angular';
export interface Dog {
    name: string;
    breed_primary: string;
    contact_state: string;
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
export declare class GetDogsService {
    private apollo;
    private dogsQuery;
    private findDogQuery;
    constructor(apollo: Apollo);
    getDogs(offset: number): Promise<DogsResult>;
    findDog(name: string): Promise<DogDetails>;
}
