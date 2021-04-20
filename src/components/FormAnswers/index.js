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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Equalizer_1 = require("@material-ui/icons/Equalizer");
var IconButton_1 = require("@material-ui/core/IconButton");
var MoreVert_1 = require("@material-ui/icons/MoreVert");
var styles_1 = require("./styles");
var react_google_charts_1 = require("react-google-charts");
var AnswersList = function (_a) {
    var answer = _a.answer;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: "firstP" }, answer.question),
        react_1.default.createElement("p", { className: "secondP" },
            answer.answer.length,
            " response"),
        answer.answer.map(function (ans, index) {
            return (react_1.default.createElement("p", { className: "response", key: index }, ans.response));
        })));
};
var AnswerGraphic = function (_a) {
    var answer = _a.answer;
    var myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];
    var _b = react_1.useState([['Linguagens', 'Quantidade']]), data = _b[0], setData = _b[1];
    var list = [];
    var list2 = [['Linguagens', 'Quantidade']];
    var dataGraphic = [];
    react_1.useEffect(function () {
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: "firstP" }, answer.question),
        react_1.default.createElement("p", { className: "secondP" },
            answer.answer.length,
            " response"),
        react_1.default.createElement("div", { className: "chart" },
            react_1.default.createElement(react_google_charts_1.Chart, { chartType: "PieChart", loader: react_1.default.createElement("div", null, "Loading Chart"), data: data, rootProps: { 'data-testid': '1' } }))));
};
var FormAnswers = function (_a) {
    var answers = _a.answers, setAnswers = _a.setAnswers;
    var _b = react_1.useState([]), answersUsers = _b[0], setAnswersUsers = _b[1];
    var result = Object.keys(answersUsers).map(function (key) { return answersUsers[key]; });
    react_1.useEffect(function () {
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
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Counter, null,
            react_1.default.createElement("h1", null,
                answers.length,
                " replies"),
            react_1.default.createElement(IconButton_1.default, { size: "small" },
                react_1.default.createElement(Equalizer_1.default, { className: "chart" })),
            react_1.default.createElement(IconButton_1.default, { size: "small" },
                react_1.default.createElement(MoreVert_1.default, null))),
        answers.length > 1 ? (react_1.default.createElement("div", { className: "list" }, result.map(function (answer, index) {
            return (react_1.default.createElement("div", { className: "answer", key: index }, answer.type == "choice" ? (react_1.default.createElement(AnswerGraphic, { answer: answer })) : (react_1.default.createElement(AnswersList, { answer: answer }))));
        }))) : (react_1.default.createElement("div", { className: "noResponses" },
            react_1.default.createElement("p", null, "Waiting for answers")))));
};
exports.default = FormAnswers;
