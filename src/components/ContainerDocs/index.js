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
var MoreVert_1 = __importDefault(require("@material-ui/icons/MoreVert"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("./styles");
var api_1 = __importDefault(require("../../services/api"));
var UserProvider_1 = require("../../UserProvider");
var dayjs_1 = __importDefault(require("dayjs"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var react_router_dom_1 = require("react-router-dom");
var ContainerDocs = function () {
    var _a = react_1.useContext(UserProvider_1.Context), user = _a[0], setUser = _a[1];
    var _b = react_1.useState(false), load = _b[0], setLoad = _b[1];
    var history = react_router_dom_1.useHistory();
    var createForm = function () {
        setLoad(true);
        api_1.default.post("/form/create", {
            user_id: user.id,
            data: dayjs_1.default().format("MMMM D, YYYY"),
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
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Texts, null,
            react_1.default.createElement("h1", null, "Start a new form"),
            react_1.default.createElement(IconButton_1.default, { size: "small" },
                react_1.default.createElement(MoreVert_1.default, null))),
        react_1.default.createElement(styles_1.Docs, null,
            react_1.default.createElement(styles_1.Doc, { onClick: createForm },
                react_1.default.createElement("div", { className: "image" }, load ? (react_1.default.createElement(CircularProgress_1.default, null)) : (react_1.default.createElement("img", { src: "https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png", alt: "add" }))),
                react_1.default.createElement("div", { className: "text" },
                    react_1.default.createElement("h1", null, "In blank"))))));
};
exports.default = ContainerDocs;
