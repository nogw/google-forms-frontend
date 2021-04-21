"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = __importDefault(require("./styles"));
var UserProvider_1 = require("./UserProvider");
var Root_1 = __importDefault(require("./pages/Root"));
var New_1 = __importDefault(require("./pages/New"));
var Login_1 = __importDefault(require("./components/Login"));
var auth_1 = __importDefault(require("./auth"));
var react_router_dom_1 = require("react-router-dom");
var dotenv_1 = __importDefault(require("dotenv"));
var jwt_decode_1 = __importDefault(require("jwt-decode"));
dotenv_1.default.config();
function PrivateRoute(_a) {
    var Component = _a.component, rest = __rest(_a, ["component"]);
    return react_1.default.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) { return (auth_1.default.isAuthenticated() ? (react_1.default.createElement(Component, __assign({}, props))) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: "/login", state: { from: props.location } } }))); } }));
}
function App() {
    var _a = react_1.useContext(UserProvider_1.Context), user = _a[0], setUser = _a[1];
    var userObj = auth_1.default.isAuthenticated();
    react_1.useEffect(function () {
        userObj && setUser(jwt_decode_1.default(userObj));
    }, []);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", exact: true },
                react_1.default.createElement(Login_1.default, null)),
            react_1.default.createElement(PrivateRoute, { path: "/", exact: true, component: function () { return react_1.default.createElement(Root_1.default, null); } }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/f/:id", exact: true },
                react_1.default.createElement(New_1.default, null))),
        react_1.default.createElement(styles_1.default, null)));
}
exports.default = App;
