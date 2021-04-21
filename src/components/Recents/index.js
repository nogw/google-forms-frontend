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
var ViewListOutlined_1 = __importDefault(require("@material-ui/icons/ViewListOutlined"));
var SortByAlpha_1 = __importDefault(require("@material-ui/icons/SortByAlpha"));
var FolderOpenOutlined_1 = __importDefault(require("@material-ui/icons/FolderOpenOutlined"));
var ListAltRounded_1 = __importDefault(require("@material-ui/icons/ListAltRounded"));
var MoreVertOutlined_1 = __importDefault(require("@material-ui/icons/MoreVertOutlined"));
var react_1 = __importStar(require("react"));
var UserProvider_1 = require("../../UserProvider");
var styles_1 = require("./styles");
var api_1 = __importDefault(require("../../services/api"));
var react_router_dom_1 = require("react-router-dom");
var Form = function (_a) {
    var title = _a.title, id = _a.id, data = _a.data;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/f/" + id },
        react_1.default.createElement(styles_1.FormContainer, null,
            react_1.default.createElement("div", { className: "gray" },
                react_1.default.createElement("img", { src: "https://riu.cead.unb.br/images/google_forms.png?1591378945", alt: "forms" })),
            react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement("h1", { className: "title" }, title),
                react_1.default.createElement("div", { className: "infos" },
                    react_1.default.createElement(ListAltRounded_1.default, { className: "list" }),
                    react_1.default.createElement("p", null,
                        "Open ",
                        data),
                    react_1.default.createElement(MoreVertOutlined_1.default, { className: "dots" }))))));
};
var Recents = function (_a) {
    var search = _a.search, setSearch = _a.setSearch;
    var _b = react_1.useState([]), recents = _b[0], setRecents = _b[1];
    var _c = react_1.useContext(UserProvider_1.Context), user = _c[0], setUser = _c[1];
    var recentsFiltered = recents.filter(function (recent) {
        return recent.title.toLowerCase().includes(search.toLowerCase());
    });
    react_1.useEffect(function () {
        var getForms = function () {
            api_1.default.get('/form/getMyForms', {
                params: {
                    id: user.id
                }
            }).then(function (res) {
                setRecents(res.data.results);
            });
        };
        getForms();
    }, []);
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Header, null,
            react_1.default.createElement("h1", null, "Recent forms"),
            react_1.default.createElement("div", { className: "right" },
                react_1.default.createElement("div", { className: "button" },
                    react_1.default.createElement("button", null,
                        react_1.default.createElement(ViewListOutlined_1.default, { style: { color: '#5f6368' } }))),
                react_1.default.createElement("div", { className: "button" },
                    react_1.default.createElement("button", null,
                        react_1.default.createElement(SortByAlpha_1.default, { style: { color: '#5f6368' } }))),
                react_1.default.createElement("div", { className: "button" },
                    react_1.default.createElement("button", null,
                        react_1.default.createElement(FolderOpenOutlined_1.default, { style: { color: '#5f6368' } }))))),
        recentsFiltered.length > 0 ? (react_1.default.createElement("div", { className: "recentForms" }, recentsFiltered.map(function (recent) {
            return (react_1.default.createElement(Form, { key: recent._id, id: recent._id, data: recent.data, title: recent.title }));
        }))) : (react_1.default.createElement("div", { className: "noForms" },
            react_1.default.createElement("h1", null, "No forms yet"),
            react_1.default.createElement("p", null, "Click + to create a new form.")))));
};
exports.default = Recents;
