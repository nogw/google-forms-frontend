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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var styles_1 = require("./styles");
var api_1 = require("../../services/api");
var jwt_decode_1 = require("jwt-decode");
var UserProvider_1 = require("../../UserProvider");
var react_router_dom_1 = require("react-router-dom");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var Login = function () {
    var initializeValue = {
        email: "",
        password: "",
        username: "nogw",
        emailRegister: "gabrielnogueiraoliveira@gmail.com",
        passwordRegister: "mari1981",
        passwordRegisterConfirm: "mari1981",
    };
    var _a = react_1.useState('login'), MenuNow = _a[0], setMenuNow = _a[1];
    var _b = react_1.useState(initializeValue), inputs = _b[0], setInputs = _b[1];
    var _c = react_1.useContext(UserProvider_1.Context), user = _c[0], setUser = _c[1];
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var history = react_router_dom_1.useHistory();
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setInputs(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var handleCreateAccount = function () {
        setIsLoading(true);
        inputs.username.length <= 2 && console.log('name is lower');
        !re.test(String(inputs.emailRegister).toLowerCase()) && console.log('email is not valid');
        inputs.passwordRegister.length <= 7 && console.log('password is lower');
        if (inputs.username.length > 2 && inputs.passwordRegister.length > 7 && re.test(String(inputs.emailRegister).toLowerCase())) {
            // create a new user in db
            var newUser = function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api_1.default.post('/user/register', {
                                name: inputs.username,
                                email: inputs.emailRegister,
                                password: inputs.passwordRegister,
                                passwordConfirm: inputs.passwordRegisterConfirm,
                            })
                                .then(function (user) {
                                var decoded = jwt_decode_1.default(user.data.token);
                                localStorage.setItem('jwt', JSON.stringify(user.data.token));
                                setUser(decoded);
                                history.push("/");
                            })
                                .catch(function (err) {
                                console.log(err.response);
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            newUser();
        }
    };
    var handleLogin = function () {
        setIsLoading(true);
        !re.test(String(inputs.email).toLowerCase()) && console.log('email is not valid');
        inputs.password.length <= 7 && console.log('password is lower');
        if (inputs.password.length > 7 && re.test(String(inputs.emailRegister).toLowerCase())) {
            //login
            var Login_1 = function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api_1.default.post('/user/login', {
                                email: inputs.email,
                                password: inputs.password,
                            })
                                .then(function (user) {
                                var decoded = jwt_decode_1.default(user.data.token);
                                localStorage.setItem('jwt', JSON.stringify(user.data.token));
                                setUser(decoded);
                                history.push("/");
                            })
                                .catch(function (err) {
                                setIsLoading(false);
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            Login_1();
        }
    };
    return (react_1.default.createElement(styles_1.Container, null, isLoading ? (react_1.default.createElement(CircularProgress_1.default, null)) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_transition_group_1.CSSTransition, { in: MenuNow === 'login', unmountOnExit: true, timeout: 500, classNames: "menu-primary" },
            react_1.default.createElement("main", null,
                react_1.default.createElement("h1", null, "Welcome back!"),
                react_1.default.createElement("h4", null, "We're so excited to see you again!"),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "email" }, "EMAIL"),
                    react_1.default.createElement("input", { type: "text", name: "email", onChange: handleChange, value: inputs.email })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "password" }, "PASSWORD"),
                    react_1.default.createElement("input", { type: "password", name: "password", onChange: handleChange, value: inputs.password })),
                react_1.default.createElement("button", { onClick: handleLogin }, "Login"),
                react_1.default.createElement("p", null,
                    "Need an account? ",
                    react_1.default.createElement("span", { onClick: function () { return setMenuNow('register'); } }, "Register")))),
        react_1.default.createElement(react_transition_group_1.CSSTransition, { in: MenuNow === 'register', unmountOnExit: true, timeout: 500, classNames: "menu-primary" },
            react_1.default.createElement("main", null,
                react_1.default.createElement("h1", null, "Create an account"),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "username" }, "USERNAME"),
                    react_1.default.createElement("input", { type: "text", name: "username", onChange: handleChange, value: inputs.username })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "email" }, "EMAIL"),
                    react_1.default.createElement("input", { type: "text", name: "emailRegister", onChange: handleChange, value: inputs.emailRegister })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "password" }, "PASSWORD"),
                    react_1.default.createElement("input", { type: "password", name: "passwordRegister", onChange: handleChange, value: inputs.passwordRegister })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("label", { htmlFor: "passwordRegisterConfirm" }, "PASSWORD CONFIRM"),
                    react_1.default.createElement("input", { type: "password", name: "passwordRegisterConfirm", onChange: handleChange, value: inputs.passwordRegisterConfirm })),
                react_1.default.createElement("button", { onClick: handleCreateAccount }, "Continue"),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("span", { onClick: function () { return setMenuNow('login'); } }, "Already have an account?"))))))));
};
exports.default = Login;