"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var api = axios_1.default.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
});
exports.default = api;
