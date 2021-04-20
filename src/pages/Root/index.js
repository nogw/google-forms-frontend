"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Topbar_1 = require("../../components/Topbar");
var ContainerDocs_1 = require("../../components/ContainerDocs");
var Recents_1 = require("../../components/Recents");
var Root = function () {
    var _a = react_1.useState(""), search = _a[0], setSearch = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Topbar_1.default, { search: search, setSearch: setSearch }),
        react_1.default.createElement(ContainerDocs_1.default, null),
        react_1.default.createElement(Recents_1.default, { search: search, setSearch: setSearch })));
};
exports.default = Root;
