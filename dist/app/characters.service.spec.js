"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var characters_service_1 = require("./characters.service");
describe('CharactersService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(characters_service_1.CharactersService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
