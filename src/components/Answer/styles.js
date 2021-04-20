"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Container = exports.Card = void 0;
var styled_components_1 = require("styled-components");
exports.Card = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 20px;\n  width: 60%;\n\n  .card {\n    width: 100%;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    border: 1px solid #dadce0;\n    background-color: #fff;\n    padding: 22px 24px 24px 24px;\n    border-radius: 10px;\n\n    .MuiRadio-root {\n      height: 35px;\n    }\n\n    .Mui-checked {\n      color: #673ab7;\n    } \n    \n    .short {\n      margin-top: 20px;\n\n      input {\n        color: #202124;\n        font-size: 14px;\n        height: 28px;\n        font-weight: 400;\n        font-family: \"Roboto\";\n        width: 50%;\n\n        outline: none;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        overflow-y: visible;\n        overflow-x: hidden;\n\n        background-color: transparent;\n        border: none;\n        display: block;\n                  \n        &:focus + .lines .line2 {\n          width: 100%;\n        }\n      }\n\n      .lines {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50%;\n        \n        .line {\n          width: 100%;\n          background-color: #e0e0e0;\n          height: 1px;\n        }\n\n        .line2 {\n          transition: all 300ms cubic-bezier(0.9, 0, 0.4, 1);\n          position: absolute;\n          background-color: #673ab7;\n          height: 2px;\n          width: 0px;\n        }\n      }\n    }\n\n    .paragraph {\n      margin-top: 25px;\n\n      textarea {\n        color: #202124;\n        font-size: 14px;\n        font-weight: 400;\n        font-family: \"Roboto\";\n        flex: 1;\n        width: 100%;\n\n        resize: none;\n        outline: none;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        overflow-y: visible;\n        overflow-x: hidden;\n\n        background-color: transparent;\n        border: none;\n        display: block;\n                  \n        margin-bottom: 6px;\n        height: 24px;\n\n        &:focus ~ .lines .line2 {\n          width: 100%;\n        }\n      }\n\n      \n\n      .lines {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        \n        .line {\n          width: 100%;\n          background-color: #e0e0e0;\n          height: 1px;\n        }\n\n        .line2 {\n          transition: all 300ms cubic-bezier(0.9, 0, 0.4, 1);\n          position: absolute;\n          background-color: #673ab7;\n          height: 2px;\n          width: 0px;\n        }\n      }\n    }\n\n    h1 {\n      font-size: 16px;\n      font-weight: 500;\n      letter-spacing: .1px;\n      line-height: 24px;\n      margin-bottom: 20px;\n      color: #202124;\n      font-weight: 400;\n      width: 100%;\n      word-break: break-word;\n    }\n\n    .MuiTypography-root {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: .2px;\n      line-height: 20px;\n      color: #202124;\n      min-width: 1px;\n    }\n\n  }\n"], ["\n  margin-top: 20px;\n  width: 60%;\n\n  .card {\n    width: 100%;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    border: 1px solid #dadce0;\n    background-color: #fff;\n    padding: 22px 24px 24px 24px;\n    border-radius: 10px;\n\n    .MuiRadio-root {\n      height: 35px;\n    }\n\n    .Mui-checked {\n      color: #673ab7;\n    } \n    \n    .short {\n      margin-top: 20px;\n\n      input {\n        color: #202124;\n        font-size: 14px;\n        height: 28px;\n        font-weight: 400;\n        font-family: \"Roboto\";\n        width: 50%;\n\n        outline: none;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        overflow-y: visible;\n        overflow-x: hidden;\n\n        background-color: transparent;\n        border: none;\n        display: block;\n                  \n        &:focus + .lines .line2 {\n          width: 100%;\n        }\n      }\n\n      .lines {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50%;\n        \n        .line {\n          width: 100%;\n          background-color: #e0e0e0;\n          height: 1px;\n        }\n\n        .line2 {\n          transition: all 300ms cubic-bezier(0.9, 0, 0.4, 1);\n          position: absolute;\n          background-color: #673ab7;\n          height: 2px;\n          width: 0px;\n        }\n      }\n    }\n\n    .paragraph {\n      margin-top: 25px;\n\n      textarea {\n        color: #202124;\n        font-size: 14px;\n        font-weight: 400;\n        font-family: \"Roboto\";\n        flex: 1;\n        width: 100%;\n\n        resize: none;\n        outline: none;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        overflow-y: visible;\n        overflow-x: hidden;\n\n        background-color: transparent;\n        border: none;\n        display: block;\n                  \n        margin-bottom: 6px;\n        height: 24px;\n\n        &:focus ~ .lines .line2 {\n          width: 100%;\n        }\n      }\n\n      \n\n      .lines {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        \n        .line {\n          width: 100%;\n          background-color: #e0e0e0;\n          height: 1px;\n        }\n\n        .line2 {\n          transition: all 300ms cubic-bezier(0.9, 0, 0.4, 1);\n          position: absolute;\n          background-color: #673ab7;\n          height: 2px;\n          width: 0px;\n        }\n      }\n    }\n\n    h1 {\n      font-size: 16px;\n      font-weight: 500;\n      letter-spacing: .1px;\n      line-height: 24px;\n      margin-bottom: 20px;\n      color: #202124;\n      font-weight: 400;\n      width: 100%;\n      word-break: break-word;\n    }\n\n    .MuiTypography-root {\n      font-size: 14px;\n      font-weight: 400;\n      letter-spacing: .2px;\n      line-height: 20px;\n      color: #202124;\n      min-width: 1px;\n    }\n\n  }\n"])));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  font-family: \"Roboto\";\n  height: 100vh;\n\n  ", ":last-child {\n  }\n\n  .confirm {\n    margin-bottom: 20px;\n    margin-top: 20px;\n    width: 60%;\n    display: flex;\n    align-items: center;\n\n    .submitBtn {\n      background-color: #673ab7;\n      border-radius: 5px;\n      border: none;\n      outline: none;\n      color: #fff;\n      font-family: \"Roboto\";\n      font-weight: 700;\n      font-size: 0.85rem;\n      padding: 10px 20px;\n      transition: all 200ms ease;\n      cursor: pointer;\n\n      &:hover {\n        filter: brightness(1.1);\n      }\n    }\n  \n    .error {\n      position: relative;\n      z-index: 999;\n      margin-left: 8px;\n\n      &:hover {\n        .errorMessage {\n          opacity: 1;\n          display: flex;\n        }\n      }\n\n      .MuiSvgIcon-root {\n        color: #e63946;\n      }\n\n      .errorMessage {\n        display: none;\n        opacity: 0;\n        background-color: #212121;\n        min-width: 170px;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        left: 40px;\n\n        p {\n          color: #f1f1f1;\n          font-size: 0.9rem;\n          padding: 10px;\n        }\n      }\n    }  \n\n    .success {\n      position: relative;\n      z-index: 999;\n      margin-left: 8px;\n\n      &:hover {\n        .successMessage {\n          opacity: 1;\n          display: flex;\n        }\n      }\n\n      .MuiSvgIcon-root {\n        color: #64f683;\n      }\n\n      .successMessage {\n        display: none;\n        opacity: 0;\n        background-color: #212121;\n        min-width: 170px;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        left: 40px;\n\n        p {\n          color: #f1f1f1;\n          font-size: 0.9rem;\n          padding: 10px;\n        }\n      }\n    }\n  }\n\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow: auto;\n  font-family: \"Roboto\";\n  height: 100vh;\n\n  ", ":last-child {\n  }\n\n  .confirm {\n    margin-bottom: 20px;\n    margin-top: 20px;\n    width: 60%;\n    display: flex;\n    align-items: center;\n\n    .submitBtn {\n      background-color: #673ab7;\n      border-radius: 5px;\n      border: none;\n      outline: none;\n      color: #fff;\n      font-family: \"Roboto\";\n      font-weight: 700;\n      font-size: 0.85rem;\n      padding: 10px 20px;\n      transition: all 200ms ease;\n      cursor: pointer;\n\n      &:hover {\n        filter: brightness(1.1);\n      }\n    }\n  \n    .error {\n      position: relative;\n      z-index: 999;\n      margin-left: 8px;\n\n      &:hover {\n        .errorMessage {\n          opacity: 1;\n          display: flex;\n        }\n      }\n\n      .MuiSvgIcon-root {\n        color: #e63946;\n      }\n\n      .errorMessage {\n        display: none;\n        opacity: 0;\n        background-color: #212121;\n        min-width: 170px;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        left: 40px;\n\n        p {\n          color: #f1f1f1;\n          font-size: 0.9rem;\n          padding: 10px;\n        }\n      }\n    }  \n\n    .success {\n      position: relative;\n      z-index: 999;\n      margin-left: 8px;\n\n      &:hover {\n        .successMessage {\n          opacity: 1;\n          display: flex;\n        }\n      }\n\n      .MuiSvgIcon-root {\n        color: #64f683;\n      }\n\n      .successMessage {\n        display: none;\n        opacity: 0;\n        background-color: #212121;\n        min-width: 170px;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        left: 40px;\n\n        p {\n          color: #f1f1f1;\n          font-size: 0.9rem;\n          padding: 10px;\n        }\n      }\n    }\n  }\n\n"])), exports.Card);
exports.Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 20px;\n  width: 60%;\n\n  .cardContainer {\n    width: 100%;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    border: 1px solid #dadce0;\n    border-radius: 10px;\n\n    .cardCreate {\n      .card {\n        background-color: #fff;\n        padding: 22px 24px 24px 24px;\n        border-radius:  10px;\n        position: relative;\n\n        .topBar {\n          border-top-right-radius: 10px;\n          border-top-left-radius:  10px;\n          background-color: #673ab7;\n          position: absolute;\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          height: 10px;\n        }\n        \n        h1 {\n          font-size: 32px;\n          font-weight: 400;\n          line-height: 40px;\n          color: #202124;\n          line-height: 135%;\n          max-width: 100%;\n          min-width: 0%;\n        }\n\n        p {\n          white-space: pre-wrap;\n          font-size: 14px;\n          font-weight: 400;\n          letter-spacing: .2px;\n          line-height: 20px;\n          color: #202124;\n          margin-top: 12px;\n        }\n\n        \n\n      }\n    }\n  }\n"], ["\n  margin-top: 20px;\n  width: 60%;\n\n  .cardContainer {\n    width: 100%;\n    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);\n    border: 1px solid #dadce0;\n    border-radius: 10px;\n\n    .cardCreate {\n      .card {\n        background-color: #fff;\n        padding: 22px 24px 24px 24px;\n        border-radius:  10px;\n        position: relative;\n\n        .topBar {\n          border-top-right-radius: 10px;\n          border-top-left-radius:  10px;\n          background-color: #673ab7;\n          position: absolute;\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          height: 10px;\n        }\n        \n        h1 {\n          font-size: 32px;\n          font-weight: 400;\n          line-height: 40px;\n          color: #202124;\n          line-height: 135%;\n          max-width: 100%;\n          min-width: 0%;\n        }\n\n        p {\n          white-space: pre-wrap;\n          font-size: 14px;\n          font-weight: 400;\n          letter-spacing: .2px;\n          line-height: 20px;\n          color: #202124;\n          margin-top: 12px;\n        }\n\n        \n\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
