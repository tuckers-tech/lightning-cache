"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTokenConstructorOptions = exports.multiTokenConstructorOptions = exports.singleTokenConstructorOptions = void 0;
var InMemory_storage_1 = require("../../src/StorageEngines/InMemory.storage");
var singleTokenConstructorOptions = {
    tokens: [
        {
            type: 'users',
            storageEngine: new InMemory_storage_1.InMemoryStorage(),
            id: 'id',
        },
    ],
};
exports.singleTokenConstructorOptions = singleTokenConstructorOptions;
var multiTokenConstructorOptions = {
    tokens: [
        {
            type: 'users',
            storageEngine: new InMemory_storage_1.InMemoryStorage(),
            id: 'id',
        },
        {
            type: 'posts',
            storageEngine: new InMemory_storage_1.InMemoryStorage(),
            id: 'id',
        },
    ],
};
exports.multiTokenConstructorOptions = multiTokenConstructorOptions;
var noTokenConstructorOptions = {
    tokens: [],
};
exports.noTokenConstructorOptions = noTokenConstructorOptions;
//# sourceMappingURL=TokenConstructorOptions.js.map