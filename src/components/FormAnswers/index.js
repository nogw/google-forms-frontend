import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Counter } from './styles';
import { Chart } from "react-google-charts";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var AnswersList = function (_a) {
    var answer = _a.answer;
    return (_jsxs(_Fragment, { children: [_jsx("p", __assign({ className: "firstP" }, { children: answer.question }), void 0),
            _jsxs("p", __assign({ className: "secondP" }, { children: [answer.answer.length, " response"] }), void 0),
            answer.answer.map(function (ans, index) {
                return (_jsx("p", __assign({ className: "response" }, { children: ans.response }), index));
            })] }, void 0));
};
var AnswerGraphic = function (_a) {
    var answer = _a.answer;
    var myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];
    var _b = useState([['Linguagens', 'Quantidade']]), data = _b[0], setData = _b[1];
    var list = [];
    var list2 = [['Linguagens', 'Quantidade']];
    var dataGraphic = [];
    useEffect(function () {
        for (var k = 0; k < answer.answer.length; k++) {
            list.push(answer.answer[k].response);
        }
        var count = function (names) {
            return names.reduce(function (a, b) {
                var _a;
                return (__assign(__assign({}, a), (_a = {}, _a[b] = (a[b] || 0) + 1, _a)));
            }, {});
        };
        var duplicates = function (dict) {
            return Object.keys(dict).filter(function (a) { return dict[a] > 1; });
        };
        var obj = count(list);
        for (var i in obj) {
            list2.push([i, obj[i]]);
        }
        setData(list2);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("p", __assign({ className: "firstP" }, { children: answer.question }), void 0),
            _jsxs("p", __assign({ className: "secondP" }, { children: [answer.answer.length, " response"] }), void 0),
            _jsx("div", __assign({ className: "chart" }, { children: _jsx(Chart, { chartType: "PieChart", loader: _jsx("div", { children: "Loading Chart" }, void 0), data: data, rootProps: { 'data-testid': '1' } }, void 0) }), void 0)] }, void 0));
};
var FormAnswers = function (_a) {
    var answers = _a.answers, setAnswers = _a.setAnswers;
    var _b = useState([]), answersUsers = _b[0], setAnswersUsers = _b[1];
    var result = Object.keys(answersUsers).map(function (key) { return answersUsers[key]; });
    useEffect(function () {
        var answerAddInState = function (value, index) {
            setAnswersUsers(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[index] = __assign(__assign({}, prev[index]), { answer: __spreadArray(__spreadArray([], prev[index].answer), [{ response: value.answer }]) }), _a)));
            });
        };
        var tmp = __spreadArray([], answersUsers);
        for (var k = 0; k < answers.length; k++) {
            for (var j = 0; j < answers[k].answers.length; j++) {
                if (tmp[j]) {
                    tmp[j].answer.push({
                        response: answers[k].answers[j].answer
                    });
                }
                else {
                    tmp.push({
                        question: answers[k].answers[j].question,
                        type: answers[k].answers[j].typeForm,
                        answer: [
                            { response: answers[k].answers[j].answer }
                        ]
                    });
                }
                console.log(tmp);
            }
        }
        setAnswersUsers(tmp);
    }, []);
    return (_jsxs(Container, { children: [_jsxs(Counter, { children: [_jsxs("h1", { children: [answers.length, " replies"] }, void 0),
                    _jsx(IconButton, __assign({ size: "small" }, { children: _jsx(EqualizerIcon, { className: "chart" }, void 0) }), void 0),
                    _jsx(IconButton, __assign({ size: "small" }, { children: _jsx(MoreVertIcon, {}, void 0) }), void 0)] }, void 0),
            answers.length > 1 ? (_jsx("div", __assign({ className: "list" }, { children: result.map(function (answer, index) {
                    return (_jsx("div", __assign({ className: "answer" }, { children: answer.type == "choice" ? (_jsx(AnswerGraphic, { answer: answer }, void 0)) : (_jsx(AnswersList, { answer: answer }, void 0)) }), index));
                }) }), void 0)) : (_jsx("div", __assign({ className: "noResponses" }, { children: _jsx("p", { children: "Waiting for answers" }, void 0) }), void 0))] }, void 0));
};
export default FormAnswers;
