"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemDetailsError = void 0;
var ProblemDetailsError = /** @class */ (function (_super) {
    __extends(ProblemDetailsError, _super);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ProblemDetailsError(request, response) {
        var _this = _super.call(this, response.data.title) || this;
        _this.request = request;
        _this.response = response;
        _this.type = response.data.type;
        _this.status = response.data.status;
        _this.details = response.data.detail;
        _this.invalidParams = response.data["invalid-params"];
        Object.setPrototypeOf(_this, ProblemDetailsError.prototype);
        return _this;
    }
    return ProblemDetailsError;
}(Error));
exports.ProblemDetailsError = ProblemDetailsError;
