import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import GlobalStyle from './styles';
import { Context } from './UserProvider';
import Root from './pages/Root';
import New from './pages/New';
import Login from './components/Login';
import auth from './auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import dotenv from 'dotenv';
import jwtDecode from 'jwt-decode';
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
dotenv.config();
function PrivateRoute(_a) {
    var Component = _a.component, rest = __rest(_a, ["component"]);
    return _jsx(Route, __assign({}, rest, { render: function (props) { return (auth.isAuthenticated() ? (_jsx(Component, __assign({}, props), void 0)) : (_jsx(Redirect, { to: { pathname: "/login", state: { from: props.location } } }, void 0))); } }), void 0);
}
function App() {
    var _a = useContext(Context), user = _a[0], setUser = _a[1];
    var userObj = auth.isAuthenticated();
    useEffect(function () {
        userObj && setUser(jwtDecode(userObj));
    }, []);
    return (_jsxs(Router, { children: [_jsxs(Switch, { children: [_jsx(Route, __assign({ path: "/login", exact: true }, { children: _jsx(Login, {}, void 0) }), void 0),
                    _jsx(PrivateRoute, { path: "/", exact: true, component: function () { return _jsx(Root, {}, void 0); } }, void 0),
                    _jsx(Route, __assign({ path: "/f/:id", exact: true }, { children: _jsx(New, {}, void 0) }), void 0)] }, void 0),
            _jsx(GlobalStyle, {}, void 0)] }, void 0));
}
export default App;
