"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var get_dogs_service_1 = require("./get-dogs.service");
describe('GetDogsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(get_dogs_service_1.GetDogsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
