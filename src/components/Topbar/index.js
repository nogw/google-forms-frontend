import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Container, IconApps, Avatar } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../logo.svg';
import { Context } from '../../UserProvider';
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
    var _b = useContext(Context), user = _b[0], setUser = _b[1];
    return (_jsxs(Container, { children: [_jsxs("div", __assign({ className: "left" }, { children: [_jsx(IconButton, { children: _jsx(MenuIcon, {}, void 0) }, void 0),
                    _jsx("img", { src: Logo, alt: "" }, void 0),
                    _jsx("h1", { children: "Forms" }, void 0)] }), void 0),
            _jsxs("div", __assign({ className: "input" }, { children: [_jsx(SearchIcon, {}, void 0),
                    _jsx("input", { type: "text", value: search, onChange: function (e) { return setSearch(e.target.value); }, placeholder: "Search" }, void 0)] }), void 0),
            _jsxs("div", __assign({ className: "right" }, { children: [_jsx(IconButton, { children: _jsx(IconApps, {}, void 0) }, void 0),
                    _jsx(Avatar, __assign({ bgcColor: colors[user.avatarColor] }, { children: _jsx("h1", { children: user ? user.name.substring(0, 2) : "" }, void 0) }), void 0)] }), void 0)] }, void 0));
};
export default Topbar;
