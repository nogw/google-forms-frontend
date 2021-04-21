"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var logo_svg_1 = __importDefault(require("../logo.svg"));
var UserProvider_1 = require("../../UserProvider");
var colors = [
    "#FF7262",
    "#0ACF83",
    "#A259FF",
    "#ED5B61",
    "#4EA9F6",
    "#767F8C",
    "#ebc83d",
    "#badf55",
    "#badf55",
    "#2082AA",
    "#A259FF",
    "#FF8C00",
    "#ED5B61",
    "#4EA9F6",
    "#767F8C",
    "#ebc83d",
    "#badf55",
    "#2082AA",
    "#FF8C00"
];
var Topbar = function (_a) {
    var search = _a.search, setSearch = _a.setSearch;
    var _b = react_1.useContext(UserProvider_1.Context), user = _b[0], setUser = _b[1];
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement("div", { className: "left" },
            react_1.default.createElement(IconButton_1.default, null,
                react_1.default.createElement(Menu_1.default, null)),
            react_1.default.createElement("img", { src: logo_svg_1.default, alt: "" }),
            react_1.default.createElement("h1", null, "Forms")),
        react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(Search_1.default, null),
            react_1.default.createElement("input", { type: "text", value: search, onChange: function (e) { return setSearch(e.target.value); }, placeholder: "Search" })),
        react_1.default.createElement("div", { className: "right" },
            react_1.default.createElement(IconButton_1.default, null,
                react_1.default.createElement(styles_1.IconApps, null)),
            react_1.default.createElement(styles_1.Avatar, { bgcColor: colors[user.avatarColor] },
                react_1.default.createElement("h1", null, user ? user.name.substring(0, 2) : "")))));
};
exports.default = Topbar;
