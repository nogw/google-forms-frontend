"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100vh;\n\n  .noResponses {\n    font-family: \"Roboto\";\n    color: #202124;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    \n    margin-top: 20px;\n    width: 60%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #fff;\n    padding: 24px 24px 24px 24px;\n    border-radius: 6px;  \n\n    p {\n      font-size: 12px;\n      color: #70757a;\n    }  \n  }\n\n  .list {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    .answer {\n      font-family: \"Roboto\";\n      color: #202124;\n      font-size: 1rem;\n      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n\n      /* border: 1px solid #dadce0; */\n\n      margin-top: 20px;\n      width: 60%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: #fff;\n      padding: 24px 24px 28px 24px;\n      border-radius: 6px;\n\n      .firstP {\n        font-size: 17px;\n        margin-bottom: 4px;\n      }\n\n      .secondP {\n        font-size: 13px;\n        margin-bottom: 26px;\n      }\n\n      .response {\n        background-color: #f8f9fa;\n        padding: 8px 6px;\n        margin: 2px;\n        font-size: 14px;\n        border-radius: 6px;\n      }\n    }\n\n    .answer:last-child {\n      margin-bottom: 130px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .list {\n      .answer {\n        width: 90%;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100vh;\n\n  .noResponses {\n    font-family: \"Roboto\";\n    color: #202124;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    \n    margin-top: 20px;\n    width: 60%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #fff;\n    padding: 24px 24px 24px 24px;\n    border-radius: 6px;  \n\n    p {\n      font-size: 12px;\n      color: #70757a;\n    }  \n  }\n\n  .list {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    .answer {\n      font-family: \"Roboto\";\n      color: #202124;\n      font-size: 1rem;\n      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n\n      /* border: 1px solid #dadce0; */\n\n      margin-top: 20px;\n      width: 60%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: #fff;\n      padding: 24px 24px 28px 24px;\n      border-radius: 6px;\n\n      .firstP {\n        font-size: 17px;\n        margin-bottom: 4px;\n      }\n\n      .secondP {\n        font-size: 13px;\n        margin-bottom: 26px;\n      }\n\n      .response {\n        background-color: #f8f9fa;\n        padding: 8px 6px;\n        margin: 2px;\n        font-size: 14px;\n        border-radius: 6px;\n      }\n    }\n\n    .answer:last-child {\n      margin-bottom: 130px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .list {\n      .answer {\n        width: 90%;\n      }\n    }\n  }\n"])));
exports.Counter = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: \"Roboto\";\n  color: #202124;\n  font-size: 1rem;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n  \n  margin-top: 20px;\n  width: 60%;\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  padding: 24px 24px 50px 24px;\n  border-radius: 6px;\n\n  h1 {\n    font-size: 28px;\n    font-weight: 400;\n    margin-right: auto;\n  }\n\n  .MuiButtonBase-root {\n    height: 32px;\n    width: 32px;\n    flex-shrink: 1;\n\n    .chart {\n      color: #64f683;\n    }\n  }\n  \n  @media screen and (max-width: 600px) {\n    width: 90%;\n  } \n"], ["\n  font-family: \"Roboto\";\n  color: #202124;\n  font-size: 1rem;\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n  \n  margin-top: 20px;\n  width: 60%;\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  padding: 24px 24px 50px 24px;\n  border-radius: 6px;\n\n  h1 {\n    font-size: 28px;\n    font-weight: 400;\n    margin-right: auto;\n  }\n\n  .MuiButtonBase-root {\n    height: 32px;\n    width: 32px;\n    flex-shrink: 1;\n\n    .chart {\n      color: #64f683;\n    }\n  }\n  \n  @media screen and (max-width: 600px) {\n    width: 90%;\n  } \n"])));
var templateObject_1, templateObject_2;
