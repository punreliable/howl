import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { Animal } from "./api/animal";
import { AnimalData } from "./api/animalData";
import { Organization } from "./api/organization";
import { ProblemDetailsError } from "./error";
// import { Client } from "@petfinder/petfinder-js";

interface ClientConfig {
    apiKey: string;
    secret: string;
    token?: string;
    baseUrl?: string;
}

export class Client {
    public http: AxiosInstance;
    private config: ClientConfig;

    constructor(config: ClientConfig) {
        this.config = config;
        this.http = axios.create({
            baseURL: config.baseUrl || "https://api.petfinder.com/v2",
            headers: {"x-api-sdk": "petfinder-js-sdk/v1.0 (https://github.com/petfinder-com/petfinder-js-sdk)"},
        });

        this.http.interceptors.response.use((response: AxiosResponse) => {
            return response;
        }, (error: AxiosError) => {
            if (error.response && this.isProblemDetailsResponse(error.response)) {
                return Promise.reject(new ProblemDetailsError(error.request, error.response));
            }

            return Promise.reject(error);
        });

        const client = new Client({apiKey: "LvnDb2AAPPYWUFL9XzVeCvFPtI0PYWf3RLOcaoKBBFfwj3LQmj", secret: "MWAVSxwhNM77LIIRXJovCaX0X7ikNdiXaRTTir7b"});

        client.animal.search()
            .then(function (response) {
                console.log( "I am working!" );
        })
        .catch(function (error) {
            console.log( "I am NOT working!" );
        });

    }

    get animalData(): AnimalData {
        return new AnimalData(this);
    }

    get animal(): Animal {
        return new Animal(this);
    }

    get organization(): Organization {
        return new Organization(this);
    }

    public async authenticate(token?: string): Promise<void | AxiosResponse> {
        let response;
        let accessToken = token || this.config.token;

        if (!accessToken) {
            response = await this.http.post("/oauth2/token", {
                // eslint-disable-next-line @typescript-eslint/camelcase
                client_id: 'LvnDb2AAPPYWUFL9XzVeCvFPtI0PYWf3RLOcaoKBBFfwj3LQmj',
                // eslint-disable-next-line @typescript-eslint/camelcase
                client_secret: 'MWAVSxwhNM77LIIRXJovCaX0X7ikNdiXaRTTir7b',
                // eslint-disable-next-line @typescript-eslint/camelcase
                grant_type: "client_credentials",
            });
            accessToken = response.data.access_token;
        }

        this.config.token = accessToken;
        this.http.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        return response;
    }

    private isProblemDetailsResponse(response: AxiosResponse): boolean {
        const headers = response.headers || {};
        const contentType = headers["content-type"] || "";
        return contentType.includes("application/problem+json");
    }


}
