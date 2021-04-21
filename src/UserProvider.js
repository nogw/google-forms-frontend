import { jsx as _jsx } from "react/jsx-runtime";
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
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
export var Context = React.createContext();
var UserProvider = function (_a) {
    var children = _a.children;
    var tokenString = localStorage.getItem('user');
    var userToken = JSON.parse(tokenString);
    var decoded = userToken ? jwtDecode(userToken) : "";
    var _b = useState(decoded), user = _b[0], setUser = _b[1];
    return (_jsx(Context.Provider, __assign({ value: [user, setUser] }, { children: children }), void 0));
};
export default UserProvider;
