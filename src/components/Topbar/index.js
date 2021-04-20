"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("./styles");
var Menu_1 = require("@material-ui/icons/Menu");
var Search_1 = require("@material-ui/icons/Search");
var IconButton_1 = require("@material-ui/core/IconButton");
var logo_svg_1 = require("../logo.svg");
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
