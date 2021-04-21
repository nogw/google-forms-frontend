import { Context } from '../../UserProvider';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import Logo from '../logo.svg';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Container, ButtonSubmit, Avatar } from './styles';
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
var TopbarCreateForm = function (_a) {
    var confirm = _a.confirm, setConfirm = _a.setConfirm, titleForm = _a.titleForm, setTitleForm = _a.setTitleForm, setErrors = _a.setErrors, verifyErrors = _a.verifyErrors, errors = _a.errors, updateForm = _a.updateForm;
    var _b = useContext(Context), user = _b[0], setUser = _b[1];
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
    var handleUpdateForm = function () {
        var getErrors = verifyErrors();
        if (getErrors < 1) {
            updateForm();
            setErrors("");
            setConfirm("updated form");
        }
        else {
            setErrors(getErrors);
            setConfirm("");
        }
    };
    return (_jsxs(Container, { children: [_jsxs("div", __assign({ className: "left" }, { children: [_jsx("a", __assign({ href: "/" }, { children: _jsx("img", { src: Logo, alt: "reactjs" }, void 0) }), void 0),
                    _jsx("h1", { children: titleForm ? titleForm : "Untitled form" }, void 0),
                    _jsx(IconButton, __assign({ className: "btnIcon", size: "small" }, { children: _jsx(FolderOpenIcon, { style: { color: "#5f6368" } }, void 0) }), void 0),
                    _jsx(IconButton, __assign({ className: "btnIcon", size: "small" }, { children: _jsx(StarBorderIcon, { style: { color: "#5f6368" } }, void 0) }), void 0)] }), void 0),
            _jsx(IconButton, __assign({ className: "btnIcon" }, { children: _jsx(ColorLensOutlinedIcon, { style: { color: "#5f6368" } }, void 0) }), void 0),
            _jsx(IconButton, __assign({ className: "btnIcon" }, { children: _jsx(VisibilityOutlinedIcon, { style: { color: "#5f6368" } }, void 0) }), void 0),
            _jsx(IconButton, __assign({ className: "btnIcon" }, { children: _jsx(SettingsOutlinedIcon, { style: { color: "#5f6368" } }, void 0) }), void 0),
            errors && (_jsx("div", __assign({ className: "error" }, { children: _jsxs(IconButton, __assign({ size: "small" }, { children: [_jsx(ErrorIcon, {}, void 0),
                        _jsx("div", __assign({ className: "errorMessage" }, { children: _jsx("p", { children: errors }, void 0) }), void 0)] }), void 0) }), void 0)),
            confirm && (_jsx("div", __assign({ className: "success" }, { children: _jsxs(IconButton, __assign({ size: "small" }, { children: [_jsx(CheckCircleOutlineIcon, {}, void 0),
                        _jsx("div", __assign({ className: "successMessage" }, { children: _jsx("p", { children: confirm }, void 0) }), void 0)] }), void 0) }), void 0)),
            _jsx(ButtonSubmit, __assign({ onClick: function () { return handleUpdateForm(); } }, { children: "Submit" }), void 0),
            _jsx(IconButton, __assign({ className: "btnIcon" }, { children: _jsx(MoreVertIcon, { style: { color: "#5f6368" } }, void 0) }), void 0),
            _jsx(Avatar, __assign({ bgcColor: colors[user.avatarColor] }, { children: _jsx("h1", { children: user ? user.name.substring(0, 2) : "" }, void 0) }), void 0)] }, void 0));
};
export default TopbarCreateForm;
