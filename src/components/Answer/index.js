"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var RadioGroup_1 = __importDefault(require("@material-ui/core/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var TextareaAutosize_1 = __importDefault(require("@material-ui/core/TextareaAutosize"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var ErrorOutlineRounded_1 = __importDefault(require("@material-ui/icons/ErrorOutlineRounded"));
var api_1 = __importDefault(require("../../services/api"));
var dayjs_1 = __importDefault(require("dayjs"));
var UserProvider_1 = require("../../UserProvider");
var CheckCircleOutline_1 = __importDefault(require("@material-ui/icons/CheckCircleOutline"));
var TitleCard = function (_a) {
    var title = _a.title, description = _a.description;
    return (react_1.default.createElement(styles_1.Title, null,
        react_1.default.createElement("div", { className: "cardContainer" },
            react_1.default.createElement("div", { className: "cardCreate" },
                react_1.default.createElement("div", { className: "card" },
                    react_1.default.createElement("div", { className: "topBar" }),
                    react_1.default.createElement("h1", null, title),
                    react_1.default.createElement("p", null, description))))));
};
var CardItem = function (_a) {
    var setAnswerObj = _a.setAnswerObj, question = _a.question, questions = _a.questions, type = _a.type, index = _a.index;
    var handleChangeAnswer = function (value) {
        setAnswerObj(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[index] = { question: question, answer: value, typeForm: type }, _a)));
        });
    };
    var method;
    if (type == "choice") {
        method = (react_1.default.createElement(FormControl_1.default, { component: "fieldset" },
            react_1.default.createElement(RadioGroup_1.default, { "aria-label": "gender", onChange: function (e) { return handleChangeAnswer(e.target.value); } }, questions.map(function (card) {
                return (react_1.default.createElement(FormControlLabel_1.default, { key: card._id, value: card.option, control: react_1.default.createElement(Radio_1.default, null), label: card.option }));
            }))));
    }
    else if (type == "paragraph") {
        method = (react_1.default.createElement("div", { className: "paragraph" },
            react_1.default.createElement(TextareaAutosize_1.default, { spellCheck: "false", placeholder: "Your answer", onChange: function (e) { return handleChangeAnswer(e.target.value); } }),
            react_1.default.createElement("div", { className: "lines" },
                react_1.default.createElement("div", { className: "line2" }),
                react_1.default.createElement("div", { className: "line" }))));
    }
    else if (type == "short") {
        method = (react_1.default.createElement("div", { className: "short" },
            react_1.default.createElement("input", { spellCheck: "false", placeholder: "Your answer", onChange: function (e) { return handleChangeAnswer(e.target.value); } }),
            react_1.default.createElement("div", { className: "lines" },
                react_1.default.createElement("div", { className: "line2" }),
                react_1.default.createElement("div", { className: "line" }))));
    }
    return (react_1.default.createElement(styles_1.Card, null,
        react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement("h1", null, question),
            method)));
};
var Answer = function (_a) {
    var options = _a.options, setOptions = _a.setOptions;
    var _b = react_1.useState([]), answerObj = _b[0], setAnswerObj = _b[1];
    var _c = react_1.useState(""), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState(""), confirm = _d[0], setConfirm = _d[1];
    var _e = react_1.useState(false), IsAnswer = _e[0], setIsAnswer = _e[1];
    var _f = react_1.useContext(UserProvider_1.Context), user = _f[0], setUser = _f[1];
    var result = Object.keys(answerObj).map(function (key) { return answerObj[key]; });
    var verifyAnswer = function () {
        var keyCount = Object.keys(answerObj).length;
        if (keyCount < options.cards.length) {
            return "answer all questions";
        }
        else {
            for (var k = 0; k < keyCount; k++) {
                if (answerObj[k].answer.length < 3) {
                    return "reply with at least 3 characters";
                    break;
                }
            }
        }
        return "";
    };
    var postAnswer = function () { return __awaiter(void 0, void 0, void 0, function () {
        var getErrors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getErrors = verifyAnswer();
                    if (!(getErrors.length < 1)) return [3 /*break*/, 4];
                    if (!!IsAnswer) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.default.post('/answer/createAnswer', {
                            form_id: options._id,
                            user_prop_id: options.user_id,
                            author: user.name ? user.name : "",
                            date: dayjs_1.default().format('DD/MM/YYYY'),
                            answers: result
                        })
                            .then(function (user) {
                            console.log(user);
                            setErrors("");
                            setIsAnswer(true);
                            setConfirm("send");
                        })
                            .catch(function (err) {
                            console.log(err);
                            setErrors(getErrors);
                            setConfirm("");
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    setErrors("your reply has already been sent");
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    setConfirm("");
                    setErrors(getErrors);
                    _a.label = 5;
                case 5:
                    console.log(getErrors);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(TitleCard, { title: options.title, description: options.description }),
        options.cards.map(function (option, index) {
            return (react_1.default.createElement(CardItem, { setAnswerObj: setAnswerObj, key: option._id, index: index, question: option.question, questions: option.questions, type: option.type }));
        }),
        react_1.default.createElement("div", { className: "confirm" },
            react_1.default.createElement("button", { className: "submitBtn", onClick: postAnswer }, "Submit"),
            errors && (react_1.default.createElement("div", { className: "error" },
                react_1.default.createElement(IconButton_1.default, { size: "small" },
                    react_1.default.createElement(ErrorOutlineRounded_1.default, null),
                    react_1.default.createElement("div", { className: "errorMessage" },
                        react_1.default.createElement("p", null, errors))))),
            confirm && (react_1.default.createElement("div", { className: "success" },
                react_1.default.createElement(IconButton_1.default, { size: "small" },
                    react_1.default.createElement(CheckCircleOutline_1.default, null),
                    react_1.default.createElement("div", { className: "successMessage" },
                        react_1.default.createElement("p", null, confirm))))))));
};
exports.default = Answer;
