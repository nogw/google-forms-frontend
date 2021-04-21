import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, Card } from './styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import SubjectIcon from '@material-ui/icons/Subject';
import ShortTextIcon from '@material-ui/icons/ShortText';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
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
    return (_jsx(Title, { children: _jsx("div", __assign({ className: "cardContainer" }, { children: _jsx("div", __assign({ className: "cardCreate" }, { children: _jsxs("div", __assign({ className: "card" }, { children: [_jsx("div", { className: "topBar" }, void 0),
                        _jsx("div", { className: "leftBar" }, void 0),
                        _jsxs("div", __assign({ className: "textareaTitle" }, { children: [_jsx("textarea", { spellCheck: "false", onChange: function (e) { return handleUpdateTitle(e); }, name: "title", value: options.title, placeholder: "Form title" }, void 0),
                                _jsxs("div", __assign({ className: "lines" }, { children: [_jsx("div", { className: "line2" }, void 0),
                                        _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0),
                        _jsxs("div", __assign({ className: "textareaDescription" }, { children: [_jsx("textarea", { spellCheck: "false", onChange: function (e) { return handleUpdateTitle(e); }, name: "description", value: options.description, placeholder: "Form description" }, void 0),
                                _jsxs("div", __assign({ className: "lines" }, { children: [_jsx("div", { className: "line2" }, void 0),
                                        _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }, void 0));
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
        method = (_jsxs("div", __assign({ className: "questions" }, { children: [options.cards[index].questions.map(function (option, index) {
                    return (_jsxs("div", __assign({ id: "" + index, className: "question" }, { children: [_jsx("div", { className: "circle" }, void 0),
                            _jsxs("div", __assign({ className: "inputQuestion" }, { children: [_jsx("input", { type: "text", value: option.option, onChange: function (e) { return updateQuestions(index, e.target.value); }, spellCheck: "false", placeholder: "Option" }, void 0),
                                    _jsxs("div", __assign({ className: "linesQuestion" }, { children: [_jsx("div", { className: "lineQuestion2" }, void 0),
                                            _jsx("div", { className: "lineQuestion" }, void 0)] }), void 0)] }), void 0),
                            _jsx(IconButton, __assign({ className: "deleteBtn", onClick: function () { return deleteQuestion(index); }, size: "small" }, { children: _jsx(DeleteOutlineOutlinedIcon, { style: { fontSize: 20 } }, void 0) }), void 0)] }), index));
                }),
                optionsEdit.cards[index].questions.length < 5 ? (_jsxs("div", __assign({ className: "buttonAddNew" }, { children: [_jsx("div", { className: "circle" }, void 0),
                        _jsxs("button", __assign({ onClick: handleNewOption }, { children: ["Add option", _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0)) : ""] }), void 0));
    }
    else if (optionsEdit.cards[index].type === "paragraph") {
        method = (_jsx("div", __assign({ className: "paragraph" }, { children: _jsx("textarea", { disabled: true, placeholder: "Long response text" }, void 0) }), void 0));
    }
    else if (optionsEdit.cards[index].type === "short") {
        method = (_jsx("div", __assign({ className: "short" }, { children: _jsx("input", { disabled: true, type: "text", placeholder: "Short response text" }, void 0) }), void 0));
    }
    return (_jsx(Card, { children: _jsxs("div", __assign({ className: "card" }, { children: [_jsxs("div", __assign({ className: "titleQuestion" }, { children: [_jsxs("div", __assign({ className: "textareaQuestion" }, { children: [_jsx("textarea", { spellCheck: "false", value: question, onChange: function (e) { return updateTitleQuestion(e.target.value); }, placeholder: "Question" }, void 0),
                                _jsxs("div", __assign({ className: "lines" }, { children: [_jsx("div", { className: "line2" }, void 0),
                                        _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0),
                        _jsx(FormControl, __assign({ variant: "outlined", className: "input" }, { children: _jsxs(Select, __assign({ value: optionsEdit.cards[index].type, onChange: handleChange }, { children: [_jsxs(MenuItem, __assign({ value: "choice" }, { children: [_jsx(RadioButtonCheckedIcon, {}, void 0), " ", _jsx("span", __assign({ className: "teste" }, { children: "Multiple choice" }), void 0)] }), void 0),
                                    _jsxs(MenuItem, __assign({ value: "paragraph" }, { children: [_jsx(SubjectIcon, {}, void 0), " ", _jsx("span", __assign({ className: "teste" }, { children: "Paragraph" }), void 0)] }), void 0),
                                    _jsxs(MenuItem, __assign({ value: "short" }, { children: [_jsx(ShortTextIcon, {}, void 0), " ", _jsx("span", __assign({ className: "teste" }, { children: "Short answer" }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0), method, _jsxs("div", __assign({ className: "delete" }, { children: [_jsx("div", { className: "divisor" }, void 0),
                        _jsxs("div", __assign({ className: "buttons" }, { children: [_jsx(IconButton, __assign({ onClick: function () { return deleteCard(); } }, { children: _jsx(DeleteOutlineOutlinedIcon, {}, void 0) }), void 0),
                                _jsx(IconButton, __assign({ className: "add", onClick: function () { return addNewCard(); } }, { children: _jsx(AddCircleOutlineOutlinedIcon, {}, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0) }, void 0));
};
var FormCreate = function (_a) {
    var titleForm = _a.titleForm, setTitleForm = _a.setTitleForm, options = _a.options, setOptions = _a.setOptions;
    return (_jsxs(Container, { children: [_jsx(TitleForm, { options: options, setOptions: setOptions }, void 0),
            options.cards.map(function (option, index) {
                return (_jsx(CardForm, { question: option.question, type: option.type, questions: option.questions, options: options, setOptions: setOptions, index: index, _id: option._id }, index));
            })] }, void 0));
};
export default FormCreate;
