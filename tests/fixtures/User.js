"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userConstructorOptions) {
        this.id = userConstructorOptions.id;
        this.fName = userConstructorOptions.fName;
        this.lName = userConstructorOptions.lName;
    }
    User.prototype.getID = function () {
        return this.id;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map