import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Container, Texts, Docs, Doc } from './styles';
import api from '../../services/api';
import { Context } from '../../UserProvider';
import dayjs from 'dayjs';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
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
var ContainerDocs = function () {
    var _a = useContext(Context), user = _a[0], setUser = _a[1];
    var _b = useState(false), load = _b[0], setLoad = _b[1];
    var history = useHistory();
    var createForm = function () {
        setLoad(true);
        api.post("/form/create", {
            user_id: user.id,
            data: dayjs().format("MMMM D, YYYY"),
            cards: [
                {
                    question: "",
                    type: "choice",
                    questions: [
                        {
                            option: ""
                        }
                    ]
                },
            ]
        })
            .then(function (res) {
            console.log(res.data);
            history.push("/f/" + res.data.link);
        })
            .catch(function (err) {
            console.log(err.response.data);
        });
    };
    return (_jsxs(Container, { children: [_jsxs(Texts, { children: [_jsx("h1", { children: "Start a new form" }, void 0),
                    _jsx(IconButton, __assign({ size: "small" }, { children: _jsx(MoreVertIcon, {}, void 0) }), void 0)] }, void 0),
            _jsx(Docs, { children: _jsxs(Doc, __assign({ onClick: createForm }, { children: [_jsx("div", __assign({ className: "image" }, { children: load ? (_jsx(CircularProgress, {}, void 0)) : (_jsx("img", { src: "https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png", alt: "add" }, void 0)) }), void 0),
                        _jsx("div", __assign({ className: "text" }, { children: _jsx("h1", { children: "In blank" }, void 0) }), void 0)] }), void 0) }, void 0)] }, void 0));
};
export default ContainerDocs;
