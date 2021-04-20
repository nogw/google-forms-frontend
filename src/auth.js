"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth = {
    isAuthenticated: function () {
        if (typeof window == "undefined")
            return false;
        if (localStorage.getItem('jwt')) {
            var token = localStorage.getItem('jwt');
            return JSON.parse(token);
        }
        else {
            return false;
        }
    },
    authenticate: function (jwt, cb) {
        if (typeof window !== "undefined")
            localStorage.setItem('jwt', JSON.stringify(jwt));
        cb();
    },
    clearJWT: function (cb) {
        if (typeof window !== "undefined")
            localStorage.removeItem('jwt');
        cb();
    }
};
exports.default = auth;
