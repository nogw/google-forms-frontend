import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../UserProvider';
import { Container, Header, FormContainer } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
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
var Form = function (_a) {
    var title = _a.title, id = _a.id, data = _a.data;
    return (_jsx(Link, __assign({ to: "/f/" + id }, { children: _jsxs(FormContainer, { children: [_jsx("div", __assign({ className: "gray" }, { children: _jsx("img", { src: "https://riu.cead.unb.br/images/google_forms.png?1591378945", alt: "forms" }, void 0) }), void 0),
                _jsxs("div", __assign({ className: "content" }, { children: [_jsx("h1", __assign({ className: "title" }, { children: title }), void 0),
                        _jsxs("div", __assign({ className: "infos" }, { children: [_jsx(ListAltRoundedIcon, { className: "list" }, void 0),
                                _jsxs("p", { children: ["Open ", data] }, void 0),
                                _jsx(MoreVertOutlinedIcon, { className: "dots" }, void 0)] }), void 0)] }), void 0)] }, void 0) }), void 0));
};
var Recents = function (_a) {
    var search = _a.search, setSearch = _a.setSearch;
    var _b = useState([]), recents = _b[0], setRecents = _b[1];
    var _c = useContext(Context), user = _c[0], setUser = _c[1];
    var recentsFiltered = recents.filter(function (recent) {
        return recent.title.toLowerCase().includes(search.toLowerCase());
    });
    useEffect(function () {
        var getForms = function () {
            api.get('/form/getMyForms', {
                params: {
                    id: user.id
                }
            }).then(function (res) {
                setRecents(res.data.results);
            });
        };
        getForms();
    }, []);
    return (_jsxs(Container, { children: [_jsxs(Header, { children: [_jsx("h1", { children: "Recent forms" }, void 0),
                    _jsxs("div", __assign({ className: "right" }, { children: [_jsx("div", __assign({ className: "button" }, { children: _jsx("button", { children: _jsx(ViewListOutlinedIcon, { style: { color: '#5f6368' } }, void 0) }, void 0) }), void 0),
                            _jsx("div", __assign({ className: "button" }, { children: _jsx("button", { children: _jsx(SortByAlphaIcon, { style: { color: '#5f6368' } }, void 0) }, void 0) }), void 0),
                            _jsx("div", __assign({ className: "button" }, { children: _jsx("button", { children: _jsx(FolderOpenOutlinedIcon, { style: { color: '#5f6368' } }, void 0) }, void 0) }), void 0)] }), void 0)] }, void 0),
            recentsFiltered.length > 0 ? (_jsx("div", __assign({ className: "recentForms" }, { children: recentsFiltered.map(function (recent) {
                    return (_jsx(Form, { id: recent._id, data: recent.data, title: recent.title }, recent._id));
                }) }), void 0)) : (_jsxs("div", __assign({ className: "noForms" }, { children: [_jsx("h1", { children: "No forms yet" }, void 0),
                    _jsx("p", { children: "Click + to create a new form." }, void 0)] }), void 0))] }, void 0));
};
export default Recents;
