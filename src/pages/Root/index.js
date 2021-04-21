import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Topbar from '../../components/Topbar';
import ContainerDocs from '../../components/ContainerDocs';
import Recents from '../../components/Recents';
var Root = function () {
    var _a = useState(""), search = _a[0], setSearch = _a[1];
    return (_jsxs(_Fragment, { children: [_jsx(Topbar, { search: search, setSearch: setSearch }, void 0),
            _jsx(ContainerDocs, {}, void 0),
            _jsx(Recents, { search: search, setSearch: setSearch }, void 0)] }, void 0));
};
export default Root;
