import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import { Container, Title, Card } from './styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/ErrorOutlineRounded';
import api from '../../services/api';
import dayjs from 'dayjs';
import { Context } from '../../UserProvider';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
var TitleCard = function (_a) {
    var title = _a.title, description = _a.description;
    return (_jsx(Title, { children: _jsx("div", __assign({ className: "cardContainer" }, { children: _jsx("div", __assign({ className: "cardCreate" }, { children: _jsxs("div", __assign({ className: "card" }, { children: [_jsx("div", { className: "topBar" }, void 0),
                        _jsx("h1", { children: title }, void 0),
                        _jsx("p", { children: description }, void 0)] }), void 0) }), void 0) }), void 0) }, void 0));
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
        method = (_jsx(FormControl, __assign({ component: "fieldset" }, { children: _jsx(RadioGroup, __assign({ "aria-label": "gender", onChange: function (e) { return handleChangeAnswer(e.target.value); } }, { children: questions.map(function (card) {
                    return (_jsx(FormControlLabel, { value: card.option, control: _jsx(Radio, {}, void 0), label: card.option }, card._id));
                }) }), void 0) }), void 0));
    }
    else if (type == "paragraph") {
        method = (_jsxs("div", __assign({ className: "paragraph" }, { children: [_jsx(TextareaAutosize, { spellCheck: "false", placeholder: "Your answer", onChange: function (e) { return handleChangeAnswer(e.target.value); } }, void 0),
                _jsxs("div", __assign({ className: "lines" }, { children: [_jsx("div", { className: "line2" }, void 0),
                        _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0));
    }
    else if (type == "short") {
        method = (_jsxs("div", __assign({ className: "short" }, { children: [_jsx("input", { spellCheck: "false", placeholder: "Your answer", onChange: function (e) { return handleChangeAnswer(e.target.value); } }, void 0),
                _jsxs("div", __assign({ className: "lines" }, { children: [_jsx("div", { className: "line2" }, void 0),
                        _jsx("div", { className: "line" }, void 0)] }), void 0)] }), void 0));
    }
    return (_jsx(Card, { children: _jsxs("div", __assign({ className: "card" }, { children: [_jsx("h1", { children: question }, void 0), method] }), void 0) }, void 0));
};
var Answer = function (_a) {
    var options = _a.options, setOptions = _a.setOptions;
    var _b = useState([]), answerObj = _b[0], setAnswerObj = _b[1];
    var _c = useState(""), errors = _c[0], setErrors = _c[1];
    var _d = useState(""), confirm = _d[0], setConfirm = _d[1];
    var _e = useState(false), IsAnswer = _e[0], setIsAnswer = _e[1];
    var _f = useContext(Context), user = _f[0], setUser = _f[1];
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
                    return [4 /*yield*/, api.post('/answer/createAnswer', {
                            form_id: options._id,
                            user_prop_id: options.user_id,
                            author: user.name ? user.name : "",
                            date: dayjs().format('DD/MM/YYYY'),
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
    return (_jsxs(Container, { children: [_jsx(TitleCard, { title: options.title, description: options.description }, void 0),
            options.cards.map(function (option, index) {
                return (_jsx(CardItem, { setAnswerObj: setAnswerObj, index: index, question: option.question, questions: option.questions, type: option.type }, option._id));
            }),
            _jsxs("div", __assign({ className: "confirm" }, { children: [_jsx("button", __assign({ className: "submitBtn", onClick: postAnswer }, { children: "Submit" }), void 0),
                    errors && (_jsx("div", __assign({ className: "error" }, { children: _jsxs(IconButton, __assign({ size: "small" }, { children: [_jsx(ErrorIcon, {}, void 0),
                                _jsx("div", __assign({ className: "errorMessage" }, { children: _jsx("p", { children: errors }, void 0) }), void 0)] }), void 0) }), void 0)),
                    confirm && (_jsx("div", __assign({ className: "success" }, { children: _jsxs(IconButton, __assign({ size: "small" }, { children: [_jsx(CheckCircleOutlineIcon, {}, void 0),
                                _jsx("div", __assign({ className: "successMessage" }, { children: _jsx("p", { children: confirm }, void 0) }), void 0)] }), void 0) }), void 0))] }), void 0)] }, void 0));
};
export default Answer;
