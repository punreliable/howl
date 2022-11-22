import { AxiosInstance, AxiosResponse } from "axios";
import { Animal } from "./api/animal";
import { AnimalData } from "./api/animalData";
import { Organization } from "./api/organization";
interface ClientConfig {
    apiKey: string;
    secret: string;
    token?: string;
    baseUrl?: string;
}
export declare class Client {
    http: AxiosInstance;
    private config;
    constructor(config: ClientConfig);
    get animalData(): AnimalData;
    get animal(): Animal;
    get organization(): Organization;
    authenticate(token?: string): Promise<void | AxiosResponse>;
    private isProblemDetailsResponse;
}
export {};
