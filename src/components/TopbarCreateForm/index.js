"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var logo_svg_1 = __importDefault(require("../logo.svg"));
var FolderOpen_1 = __importDefault(require("@material-ui/icons/FolderOpen"));
var StarBorder_1 = __importDefault(require("@material-ui/icons/StarBorder"));
var ColorLensOutlined_1 = __importDefault(require("@material-ui/icons/ColorLensOutlined"));
var VisibilityOutlined_1 = __importDefault(require("@material-ui/icons/VisibilityOutlined"));
var SettingsOutlined_1 = __importDefault(require("@material-ui/icons/SettingsOutlined"));
var MoreVert_1 = __importDefault(require("@material-ui/icons/MoreVert"));
var Error_1 = __importDefault(require("@material-ui/icons/Error"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var CheckCircleOutline_1 = __importDefault(require("@material-ui/icons/CheckCircleOutline"));
var styles_1 = require("./styles");
var UserProvider_1 = require("../../UserProvider");
var TopbarCreateForm = function (_a) {
    var confirm = _a.confirm, setConfirm = _a.setConfirm, titleForm = _a.titleForm, setTitleForm = _a.setTitleForm, setErrors = _a.setErrors, verifyErrors = _a.verifyErrors, errors = _a.errors, updateForm = _a.updateForm;
    var _b = react_1.useContext(UserProvider_1.Context), user = _b[0], setUser = _b[1];
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
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement("div", { className: "left" },
            react_1.default.createElement("a", { href: "/" },
                react_1.default.createElement("img", { src: logo_svg_1.default, alt: "reactjs" })),
            react_1.default.createElement("h1", null, titleForm ? titleForm : "Untitled form"),
            react_1.default.createElement(IconButton_1.default, { className: "btnIcon", size: "small" },
                react_1.default.createElement(FolderOpen_1.default, { style: { color: "#5f6368" } })),
            react_1.default.createElement(IconButton_1.default, { className: "btnIcon", size: "small" },
                react_1.default.createElement(StarBorder_1.default, { style: { color: "#5f6368" } }))),
        react_1.default.createElement(IconButton_1.default, { className: "btnIcon" },
            react_1.default.createElement(ColorLensOutlined_1.default, { style: { color: "#5f6368" } })),
        react_1.default.createElement(IconButton_1.default, { className: "btnIcon" },
            react_1.default.createElement(VisibilityOutlined_1.default, { style: { color: "#5f6368" } })),
        react_1.default.createElement(IconButton_1.default, { className: "btnIcon" },
            react_1.default.createElement(SettingsOutlined_1.default, { style: { color: "#5f6368" } })),
        errors && (react_1.default.createElement("div", { className: "error" },
            react_1.default.createElement(IconButton_1.default, { size: "small" },
                react_1.default.createElement(Error_1.default, null),
                react_1.default.createElement("div", { className: "errorMessage" },
                    react_1.default.createElement("p", null, errors))))),
        confirm && (react_1.default.createElement("div", { className: "success" },
            react_1.default.createElement(IconButton_1.default, { size: "small" },
                react_1.default.createElement(CheckCircleOutline_1.default, null),
                react_1.default.createElement("div", { className: "successMessage" },
                    react_1.default.createElement("p", null, confirm))))),
        react_1.default.createElement(styles_1.ButtonSubmit, { onClick: function () { return handleUpdateForm(); } }, "Submit"),
        react_1.default.createElement(IconButton_1.default, { className: "btnIcon" },
            react_1.default.createElement(MoreVert_1.default, { style: { color: "#5f6368" } })),
        react_1.default.createElement(styles_1.Avatar, { bgcColor: colors[user.avatarColor] },
            react_1.default.createElement("h1", null, user ? user.name.substring(0, 2) : ""))));
};
exports.default = TopbarCreateForm;
