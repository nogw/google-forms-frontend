import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useContext, useEffect, useState } from 'react';
import FormCreate from '../../components/FormCreate';
import TopbarCreateForm from '../../components/TopbarCreateForm';
import Answer from '../../components/Answer';
import FormAnswers from '../../components/FormAnswers';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Context } from '../../UserProvider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  background-color: #f1f1f1;\n\n  .top {\n    width: 100%;\n    min-height: 40px;\n    \n    .MuiTabs-root {\n      background-color: #fff;\n      height: 40px;\n      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n      position: relative;\n      z-index: 996;\n\n      .MuiTab-root {\n        font-size: 14px;\n        text-transform: lowercase;\n        min-width: 120px;\n        padding: 0px;\n        display: flex;\n        align-items: center;\n      \n        .MuiButtonBase-root {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 40px;\n\n          .MuiTouchRipple-root {\n            height: 40px;\n          }\n        } \n      }\n    }\t\n  }\n"], ["\n  height: 100vh;\n  background-color: #f1f1f1;\n\n  .top {\n    width: 100%;\n    min-height: 40px;\n    \n    .MuiTabs-root {\n      background-color: #fff;\n      height: 40px;\n      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n      position: relative;\n      z-index: 996;\n\n      .MuiTab-root {\n        font-size: 14px;\n        text-transform: lowercase;\n        min-width: 120px;\n        padding: 0px;\n        display: flex;\n        align-items: center;\n      \n        .MuiButtonBase-root {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 40px;\n\n          .MuiTouchRipple-root {\n            height: 40px;\n          }\n        } \n      }\n    }\t\n  }\n"])));
var LoadContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #f1f1f1;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  background-color: #f1f1f1;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var New = function () {
    var _a = useState(""), errors = _a[0], setErrors = _a[1];
    var id = useParams();
    var _b = useContext(Context), user = _b[0], setUser = _b[1];
    var _c = useState([]), answers = _c[0], setAnswers = _c[1];
    var _d = useState(true), load = _d[0], setLoad = _d[1];
    var _e = useState(""), confirm = _e[0], setConfirm = _e[1];
    var _f = useState({
        title: "",
        description: "",
        cards: []
    }), options = _f[0], setOptions = _f[1];
    useEffect(function () {
        var getForm = function () {
            api.get('/form/getForm', {
                params: {
                    idForm: id.id
                }
            }).then(function (res) {
                setOptions(res.data.result);
                setLoad(false);
            }).catch(function (err) {
                console.log(err);
            });
        };
        getForm();
    }, []);
    useEffect(function () {
        var getAnswers = function () {
            api.get('/answer/getAnswer', {
                params: {
                    idForm: id.id
                }
            }).then(function (res) {
                console.log(res.data.result);
                setAnswers(res.data.result);
            }).catch(function (err) {
                console.log(err);
            });
        };
        getAnswers();
    }, []);
    var updateForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.post('/form/update', {
                        _id: options._id,
                        user_id: options.user_id,
                        title: options.title,
                        description: options.description,
                        cards: options.cards
                    })
                        .then(function (sucess) {
                        console.log(sucess.data);
                    })
                        .catch(function (err) {
                        console.log(err.response);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var verifyErrors = function () {
        if (options.title.length < 3) {
            return "the title must be at least 3 characters";
        }
        if (options.description.length < 3) {
            return "the description must be at least 3 characters";
        }
        for (var c = 0; c < options.cards.length; c++) {
            if (options.cards[c].question.length < 3) {
                return "all cards must have a question of at least 3 characters " + c;
            }
            if (options.cards[c].type == "choice") {
                for (var j = 0; j < options.cards[c].questions.length; j++) {
                    if (options.cards[c].questions[j].option.length < 3) {
                        return "in choice cards, put at least one option of at least 3 characters";
                    }
                }
            }
        }
        return "";
    };
    var _g = React.useState(0), value = _g[0], setValue = _g[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (load ? (_jsx(LoadContainer, { children: _jsx(CircularProgress, {}, void 0) }, void 0)) : (_jsx(Container, { children: options.user_id == user.id ? (_jsxs(_Fragment, { children: [_jsx(TopbarCreateForm, { errors: errors, setErrors: setErrors, titleForm: options.title, updateForm: updateForm, verifyErrors: verifyErrors, confirm: confirm, setConfirm: setConfirm }, void 0),
                _jsx("div", __assign({ className: "top" }, { children: _jsxs(Tabs, __assign({ value: value, onChange: handleChange, indicatorColor: "primary", textColor: "primary", centered: true }, { children: [_jsx(Tab, { label: "questions" }, void 0),
                            _jsx(Tab, { label: "answers" }, void 0)] }), void 0) }), void 0),
                value == 0 ? (_jsx(FormCreate, { options: options, setOptions: setOptions }, void 0)) : (_jsx(FormAnswers, { answers: answers, setAnswers: setAnswers }, void 0))] }, void 0)) : (_jsx(Answer, { options: options, setOptions: setOptions }, void 0)) }, void 0)));
};
export default New;
var templateObject_1, templateObject_2;
