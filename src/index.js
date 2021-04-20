"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var UserProvider_1 = require("./UserProvider");
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(UserProvider_1.default, null,
        react_1.default.createElement(App_1.default, null))), document.getElementById('root'));
