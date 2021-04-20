"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.Avatar = exports.IconApps = void 0;
var styled_components_1 = require("styled-components");
var io5_1 = require("react-icons/io5");
exports.IconApps = styled_components_1.default(io5_1.IoApps)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
exports.Avatar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 8px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fff;\n    font-size: 1rem;\n    position: relative;\n    bottom: 1.51px;\n  }\n"], ["\n  margin: 8px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fff;\n    font-size: 1rem;\n    position: relative;\n    bottom: 1.51px;\n  }\n"])), function (props) { return props.bgcColor || '#767F8C'; });
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 64px;\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n\n  .left {\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    display: flex;\n    align-items: center;\n\n    img {\n      height: 40px;\n      width: 40px;\n      margin-right: 10px;\n      object-fit: cover;\n      animation: spin infinite 20s linear;\n    }\n\n    h1 {\n      font-size: 22px;\n      font-weight: 600;\n      color: #5f6368;\n      margin-bottom: 1px;\n    }\n  }\n\n  .input {\n    position: relative;\n    align-items: center;\n    display: flex;\n    width: 750px;\n\n    margin-left: 30px;\n    margin-right: 20px;\n\n    .MuiSvgIcon-root {\n      position: absolute;\n      margin-top: auto;\n      left: 20px;\n      color: #5f6368;\n    }\n\n    input {\n      background-color: #f1f3f4;\n      padding: 15px 58px;\n      border: none;\n      font-size: 1rem;\n      border-radius: 6px;\n      max-width: 100%;\n      width: 100%;\n      transition: all 300ms ease;\n      margin-right: 70px;\n\n      @media screen and (max-width: 1300px) {\n        margin-right: 0px;\n      }\n\n      &::placeholder {\n        color: rgba(0,0,0,0.54);\n      }\n\n      &:focus {\n        background-color: #fff;\n        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);\n      }\n    }\n  }\n\n  .right {\n    display: flex;\n  }\n\n  @media screen and (max-width: 620px) {\n    .right {\n      .MuiButtonBase-root {\n        display: none;\n        color: red;\n      }\n    }\n  }\n\n  @media screen and (max-width: 500px) {\n    .left {\n      h1 {\n        display: none;\n      }\n\n      img {\n        display: none;\n      }\n    }\n\n    .input {\n      margin-left: 10px;\n      margin-right: 16px;\n    }\n  }\n"], ["\n  height: 64px;\n  background-color: #fff;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n\n  .left {\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    display: flex;\n    align-items: center;\n\n    img {\n      height: 40px;\n      width: 40px;\n      margin-right: 10px;\n      object-fit: cover;\n      animation: spin infinite 20s linear;\n    }\n\n    h1 {\n      font-size: 22px;\n      font-weight: 600;\n      color: #5f6368;\n      margin-bottom: 1px;\n    }\n  }\n\n  .input {\n    position: relative;\n    align-items: center;\n    display: flex;\n    width: 750px;\n\n    margin-left: 30px;\n    margin-right: 20px;\n\n    .MuiSvgIcon-root {\n      position: absolute;\n      margin-top: auto;\n      left: 20px;\n      color: #5f6368;\n    }\n\n    input {\n      background-color: #f1f3f4;\n      padding: 15px 58px;\n      border: none;\n      font-size: 1rem;\n      border-radius: 6px;\n      max-width: 100%;\n      width: 100%;\n      transition: all 300ms ease;\n      margin-right: 70px;\n\n      @media screen and (max-width: 1300px) {\n        margin-right: 0px;\n      }\n\n      &::placeholder {\n        color: rgba(0,0,0,0.54);\n      }\n\n      &:focus {\n        background-color: #fff;\n        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);\n      }\n    }\n  }\n\n  .right {\n    display: flex;\n  }\n\n  @media screen and (max-width: 620px) {\n    .right {\n      .MuiButtonBase-root {\n        display: none;\n        color: red;\n      }\n    }\n  }\n\n  @media screen and (max-width: 500px) {\n    .left {\n      h1 {\n        display: none;\n      }\n\n      img {\n        display: none;\n      }\n    }\n\n    .input {\n      margin-left: 10px;\n      margin-right: 16px;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
