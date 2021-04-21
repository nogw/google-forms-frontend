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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var RadioButtonChecked_1 = __importDefault(require("@material-ui/icons/RadioButtonChecked"));
var Subject_1 = __importDefault(require("@material-ui/icons/Subject"));
var ShortText_1 = __importDefault(require("@material-ui/icons/ShortText"));
var DeleteOutlineOutlined_1 = __importDefault(require("@material-ui/icons/DeleteOutlineOutlined"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var AddCircleOutlineOutlined_1 = __importDefault(require("@material-ui/icons/AddCircleOutlineOutlined"));
var TitleForm = function (_a) {
    var options = _a.options, setOptions = _a.setOptions;
    var optionsEdit = options;
    var handleUpdateTitle = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setOptions(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    return (react_1.default.createElement(styles_1.Title, null,
        react_1.default.createElement("div", { className: "cardContainer" },
            react_1.default.createElement("div", { className: "cardCreate" },
                react_1.default.createElement("div", { className: "card" },
                    react_1.default.createElement("div", { className: "topBar" }),
                    react_1.default.createElement("div", { className: "leftBar" }),
                    react_1.default.createElement("div", { className: "textareaTitle" },
                        react_1.default.createElement("textarea", { spellCheck: "false", onChange: function (e) { return handleUpdateTitle(e); }, name: "title", value: options.title, placeholder: "Form title" }),
                        react_1.default.createElement("div", { className: "lines" },
                            react_1.default.createElement("div", { className: "line2" }),
                            react_1.default.createElement("div", { className: "line" }))),
                    react_1.default.createElement("div", { className: "textareaDescription" },
                        react_1.default.createElement("textarea", { spellCheck: "false", onChange: function (e) { return handleUpdateTitle(e); }, name: "description", value: options.description, placeholder: "Form description" }),
                        react_1.default.createElement("div", { className: "lines" },
                            react_1.default.createElement("div", { className: "line2" }),
                            react_1.default.createElement("div", { className: "line" }))))))));
};
var CardForm = function (_a) {
    var options = _a.options, setOptions = _a.setOptions, question = _a.question, type = _a.type, questions = _a.questions, index = _a.index, _id = _a._id;
    var optionsEdit = options;
    var card = __spreadArray([], options.cards);
    var handleChange = function (event) {
        card[index].type = event.target.value;
        setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
    };
    var handleNewOption = function () {
        if (card[index].questions.length < 5) {
            card[index].questions.push({ option: "" });
            setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
        }
        else {
            console.log("max options");
        }
    };
    var updateQuestions = function (i, val) {
        card[index].questions[i].option = val;
        setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
    };
    var updateTitleQuestion = function (val) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            card[index].question = val;
            setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
            return [2 /*return*/];
        });
    }); };
    var deleteQuestion = function (j) {
        if (card[index].questions.length > 1) {
            card[index].questions.splice(j, 1);
            setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
        }
        else {
            console.log('no');
        }
    };
    var addNewCard = function () {
        card.push({
            question: "",
            type: "choice",
            questions: [
                {
                    option: ""
                }
            ]
        });
        setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
    };
    var deleteCard = function () {
        if (card.length > 1) {
            card.splice(index, 1);
            setOptions(function (prev) { return (__assign(__assign({}, prev), { cards: card })); });
        }
        else {
            console.log('no');
        }
    };
    var method;
    if (options.cards[index].type === "choice") {
        method = (react_1.default.createElement("div", { className: "questions" },
            options.cards[index].questions.map(function (option, index) {
                return (react_1.default.createElement("div", { key: index, id: "" + index, className: "question" },
                    react_1.default.createElement("div", { className: "circle" }),
                    react_1.default.createElement("div", { className: "inputQuestion" },
                        react_1.default.createElement("input", { type: "text", value: option.option, onChange: function (e) { return updateQuestions(index, e.target.value); }, spellCheck: "false", placeholder: "Option" }),
                        react_1.default.createElement("div", { className: "linesQuestion" },
                            react_1.default.createElement("div", { className: "lineQuestion2" }),
                            react_1.default.createElement("div", { className: "lineQuestion" }))),
                    react_1.default.createElement(IconButton_1.default, { className: "deleteBtn", onClick: function () { return deleteQuestion(index); }, size: "small" },
                        react_1.default.createElement(DeleteOutlineOutlined_1.default, { style: { fontSize: 20 } }))));
            }),
            optionsEdit.cards[index].questions.length < 5 ? (react_1.default.createElement("div", { className: "buttonAddNew" },
                react_1.default.createElement("div", { className: "circle" }),
                react_1.default.createElement("button", { onClick: handleNewOption },
                    "Add option",
                    react_1.default.createElement("div", { className: "line" })))) : ""));
    }
    else if (optionsEdit.cards[index].type === "paragraph") {
        method = (react_1.default.createElement("div", { className: "paragraph" },
            react_1.default.createElement("textarea", { disabled: true, placeholder: "Long response text" })));
    }
    else if (optionsEdit.cards[index].type === "short") {
        method = (react_1.default.createElement("div", { className: "short" },
            react_1.default.createElement("input", { disabled: true, type: "text", placeholder: "Short response text" })));
    }
    return (react_1.default.createElement(styles_1.Card, null,
        react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement("div", { className: "titleQuestion" },
                react_1.default.createElement("div", { className: "textareaQuestion" },
                    react_1.default.createElement("textarea", { spellCheck: "false", value: question, onChange: function (e) { return updateTitleQuestion(e.target.value); }, placeholder: "Question" }),
                    react_1.default.createElement("div", { className: "lines" },
                        react_1.default.createElement("div", { className: "line2" }),
                        react_1.default.createElement("div", { className: "line" }))),
                react_1.default.createElement(FormControl_1.default, { variant: "outlined", className: "input" },
                    react_1.default.createElement(Select_1.default, { value: optionsEdit.cards[index].type, onChange: handleChange },
                        react_1.default.createElement(MenuItem_1.default, { value: "choice" },
                            react_1.default.createElement(RadioButtonChecked_1.default, null),
                            " ",
                            react_1.default.createElement("span", { className: "teste" }, "Multiple choice")),
                        react_1.default.createElement(MenuItem_1.default, { value: "paragraph" },
                            react_1.default.createElement(Subject_1.default, null),
                            " ",
                            react_1.default.createElement("span", { className: "teste" }, "Paragraph")),
                        react_1.default.createElement(MenuItem_1.default, { value: "short" },
                            react_1.default.createElement(ShortText_1.default, null),
                            " ",
                            react_1.default.createElement("span", { className: "teste" }, "Short answer"))))),
            method,
            react_1.default.createElement("div", { className: "delete" },
                react_1.default.createElement("div", { className: "divisor" }),
                react_1.default.createElement("div", { className: "buttons" },
                    react_1.default.createElement(IconButton_1.default, { onClick: function () { return deleteCard(); } },
                        react_1.default.createElement(DeleteOutlineOutlined_1.default, null)),
                    react_1.default.createElement(IconButton_1.default, { className: "add", onClick: function () { return addNewCard(); } },
                        react_1.default.createElement(AddCircleOutlineOutlined_1.default, null)))))));
};
var FormCreate = function (_a) {
    var titleForm = _a.titleForm, setTitleForm = _a.setTitleForm, options = _a.options, setOptions = _a.setOptions;
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(TitleForm, { options: options, setOptions: setOptions }),
        options.cards.map(function (option, index) {
            return (react_1.default.createElement(CardForm, { key: index, question: option.question, type: option.type, questions: option.questions, options: options, setOptions: setOptions, index: index, _id: option._id }));
        })));
};
exports.default = FormCreate;
