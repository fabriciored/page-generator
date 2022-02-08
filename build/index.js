"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (request, response) => {
    response.write(`<h1>Hi Mark</h1>`);
});
app.listen(port);
console.log(`Server runs on port ${port}`);
//# sourceMappingURL=index.js.map