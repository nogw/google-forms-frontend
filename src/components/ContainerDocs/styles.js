"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doc = exports.Docs = exports.Texts = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #f1f1f1;\n  /* height: 200px; */\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  background-color: #f1f1f1;\n  /* height: 200px; */\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])));
exports.Texts = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  width: 68%;\n  padding: 0px 8px;\n\n  h1 {\n    font-size: 1rem;\n    color: #202124;\n    width: 100%;\n    margin-bottom: 3.5px;\n    font-weight: 600;\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 80%;\n\n    .MuiButtonBase-root {\n      position: relative;\n      left: 12px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  height: 4rem;\n  width: 68%;\n  padding: 0px 8px;\n\n  h1 {\n    font-size: 1rem;\n    color: #202124;\n    width: 100%;\n    margin-bottom: 3.5px;\n    font-weight: 600;\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 80%;\n\n    .MuiButtonBase-root {\n      position: relative;\n      left: 12px;\n    }\n  }\n"])));
exports.Docs = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  width: 68%;\n  padding-bottom: 26px;\n  \n  @media screen and (max-width: 600px) {\n    width: 80%\n  }\n"], ["\n  display: flex;\n  width: 68%;\n  padding-bottom: 26px;\n  \n  @media screen and (max-width: 600px) {\n    width: 80%\n  }\n"])));
exports.Doc = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .image {\n    border: 1px solid #dadce0;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    height: 114px;\n    width: 152px;\n    cursor: pointer;\n\n    img {\n      border-radius: 4px;\n      height: 100%;\n      width: 100%;\n    }\n  \n    &:hover {\n      border: 1px solid #7248b9;\n    }\n  }\n\n  .text {\n    h1 {\n      color: #202124;\n      font-size: 14px;\n      padding: 8px 0px;\n    }\n  }\n"], ["\n  .image {\n    border: 1px solid #dadce0;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    height: 114px;\n    width: 152px;\n    cursor: pointer;\n\n    img {\n      border-radius: 4px;\n      height: 100%;\n      width: 100%;\n    }\n  \n    &:hover {\n      border: 1px solid #7248b9;\n    }\n  }\n\n  .text {\n    h1 {\n      color: #202124;\n      font-size: 14px;\n      padding: 8px 0px;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
