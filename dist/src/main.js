"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var axios_1 = __importDefault(require("axios"));
var animal_1 = require("./api/animal");
var animalData_1 = require("./api/animalData");
var organization_1 = require("./api/organization");
var error_1 = require("./error");
var Client = /** @class */ (function () {
    function Client(config) {
        var _this = this;
        this.config = config;
        this.http = axios_1.default.create({
            baseURL: config.baseUrl || "https://api.petfinder.com/v2",
            headers: { "x-api-sdk": "petfinder-js-sdk/v1.0 (https://github.com/petfinder-com/petfinder-js-sdk)" },
        });
        this.http.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response && _this.isProblemDetailsResponse(error.response)) {
                return Promise.reject(new error_1.ProblemDetailsError(error.request, error.response));
            }
            return Promise.reject(error);
        });
        var client = new Client({ apiKey: "LvnDb2AAPPYWUFL9XzVeCvFPtI0PYWf3RLOcaoKBBFfwj3LQmj", secret: "MWAVSxwhNM77LIIRXJovCaX0X7ikNdiXaRTTir7b" });
        client.animal.search()
            .then(function (response) {
            console.log("I am working!");
        })
            .catch(function (error) {
            console.log("I am NOT working!");
        });
    }
    Object.defineProperty(Client.prototype, "animalData", {
        get: function () {
            return new animalData_1.AnimalData(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "animal", {
        get: function () {
            return new animal_1.Animal(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "organization", {
        get: function () {
            return new organization_1.Organization(this);
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.authenticate = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        accessToken = token || this.config.token;
                        if (!!accessToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.post("/oauth2/token", {
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                client_id: 'LvnDb2AAPPYWUFL9XzVeCvFPtI0PYWf3RLOcaoKBBFfwj3LQmj',
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                client_secret: 'MWAVSxwhNM77LIIRXJovCaX0X7ikNdiXaRTTir7b',
                                // eslint-disable-next-line @typescript-eslint/camelcase
                                grant_type: "client_credentials",
                            })];
                    case 1:
                        response = _a.sent();
                        accessToken = response.data.access_token;
                        _a.label = 2;
                    case 2:
                        this.config.token = accessToken;
                        this.http.defaults.headers.common.Authorization = "Bearer ".concat(accessToken);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Client.prototype.isProblemDetailsResponse = function (response) {
        var headers = response.headers || {};
        var contentType = headers["content-type"] || "";
        return contentType.includes("application/problem+json");
    };
    return Client;
}());
exports.Client = Client;
