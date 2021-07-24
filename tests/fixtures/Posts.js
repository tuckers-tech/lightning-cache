"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(postConstructorOptions) {
        this.id = postConstructorOptions.id;
        this.name = postConstructorOptions.name;
        this.description = postConstructorOptions.description;
    }
    Post.prototype.getID = function () {
        return this.id;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Posts.js.map