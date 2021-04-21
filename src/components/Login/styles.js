"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.Bgc = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Bgc = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  z-index: 0;\n  left: -70vh;\n"], ["\n  width: 100%;\n  position: absolute;\n  z-index: 0;\n  left: -70vh;\n"])));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #4285f4;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .MuiCircularProgress-circle {\n    color: #fff;\n  }\n\n  .menu {\n    width: 100%;\n  }\n  .menu-primary-enter {\n    position: absolute;\n    transform: translateX(160px) scale(0.4);\n    opacity: 0;\n  }\n  .menu-primary-enter-active {\n    transform: translateX(0%)  scale(1);\n    transition: all 450ms ease;\n    opacity: 1;\n  }\n  .menu-primary-exit {\n    position: absolute;\n  }\n  .menu-primary-exit-active {\n    transform: translateX(-160px)  scale(0.4);\n    transition: all 450ms ease;\n    opacity: 0;\n  }\n  .menu-secondary-enter {\n    transform: translateX(160px) scale(0.4);\n    opacity: 0;\n  }\n  .menu-secondary-enter-active {\n    transform: translateX(0%) scale(1);\n    transition: all 450ms ease;\n    opacity: 1;\n  }\n  .menu-secondary-exit {\n  }\n  .menu-secondary-exit-active {\n    transform: translateX(-160px) scale(0.4);\n    transition: all 450ms ease;\n    opacity: 0;\n  }\n\n  @media screen and (max-width: 450px) {\n    background-color: #fff;\n  }\n  \n  main {\n    z-index: 1;\n    background-color: #fff;\n    min-width: 26rem;\n    border-radius: 6px;\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);\n    padding: 36px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    h1 {\n      color: #202020;\n      font-weight: bold;\n      font-size: 1.5rem;\n    }\n    h4 {\n      color: #202124;\n      font-weight: lighter;\n      font-size: 1rem;\n      line-height: 24px;\n      margin-bottom: 12px;\n    }\n    .input {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      margin: 10px 0px 4px 0px;\n      \n      label {\n        color: #202020;\n        font-size: 0.7rem;\n        margin: 4px 0px 4px 0px;\n        font-weight: 600;\n      }\n    \n      input {\n        border: none;\n        outline: none;\n        width: 100%;\n        background-color: transparent;\n        border: 2px solid #212121;\n        padding: 10px 10px 10px 10px;\n        height: 2.5rem;\n        color: #000;\n        font-size: 0.9rem;\n        border-radius: 4px;\n        transition: all 300ms ease;\n\n        &:focus {\n          border: 2px solid #4285f4;\n        }\n\n        @media screen and (max-width: 450px) {\n          width: auto;\n        }\n      }\n    }\n    button {\n      margin: 28px 0px 10px 0px;\n      border: none;\n      outline: none;\n      width: 100%;\n      background-color: #4285f4;\n      height: 2.5rem;\n      border-radius: 4px;\n      color: #fff;\n      font-weight: bold;\n      padding: 10.5px 6px 14px 6px;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: all 300ms ease;\n      &:hover {\n        filter: brightness(0.9);\n      }\n    }\n    p {\n      margin-right: auto;\n      color: #686c73;\n      font-size: 0.8rem;\n      margin-top: 4px;\n      span {\n        color: #4285f4;\n        transition: all 300ms ease;\n        cursor: pointer;\n        font-weight: bold;\n        &:hover {\n          filter: brightness(1.3)\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 450px) {\n    main {\n      z-index: 1;\n      min-width: unset;\n      width: 100%;\n      box-shadow: none;\n      padding: 48px;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    .MuiCircularProgress-circle {\n      color: #4285f4;\n    }\n  }\n"], ["\n  background-color: #4285f4;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .MuiCircularProgress-circle {\n    color: #fff;\n  }\n\n  .menu {\n    width: 100%;\n  }\n  .menu-primary-enter {\n    position: absolute;\n    transform: translateX(160px) scale(0.4);\n    opacity: 0;\n  }\n  .menu-primary-enter-active {\n    transform: translateX(0%)  scale(1);\n    transition: all 450ms ease;\n    opacity: 1;\n  }\n  .menu-primary-exit {\n    position: absolute;\n  }\n  .menu-primary-exit-active {\n    transform: translateX(-160px)  scale(0.4);\n    transition: all 450ms ease;\n    opacity: 0;\n  }\n  .menu-secondary-enter {\n    transform: translateX(160px) scale(0.4);\n    opacity: 0;\n  }\n  .menu-secondary-enter-active {\n    transform: translateX(0%) scale(1);\n    transition: all 450ms ease;\n    opacity: 1;\n  }\n  .menu-secondary-exit {\n  }\n  .menu-secondary-exit-active {\n    transform: translateX(-160px) scale(0.4);\n    transition: all 450ms ease;\n    opacity: 0;\n  }\n\n  @media screen and (max-width: 450px) {\n    background-color: #fff;\n  }\n  \n  main {\n    z-index: 1;\n    background-color: #fff;\n    min-width: 26rem;\n    border-radius: 6px;\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);\n    padding: 36px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    h1 {\n      color: #202020;\n      font-weight: bold;\n      font-size: 1.5rem;\n    }\n    h4 {\n      color: #202124;\n      font-weight: lighter;\n      font-size: 1rem;\n      line-height: 24px;\n      margin-bottom: 12px;\n    }\n    .input {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      margin: 10px 0px 4px 0px;\n      \n      label {\n        color: #202020;\n        font-size: 0.7rem;\n        margin: 4px 0px 4px 0px;\n        font-weight: 600;\n      }\n    \n      input {\n        border: none;\n        outline: none;\n        width: 100%;\n        background-color: transparent;\n        border: 2px solid #212121;\n        padding: 10px 10px 10px 10px;\n        height: 2.5rem;\n        color: #000;\n        font-size: 0.9rem;\n        border-radius: 4px;\n        transition: all 300ms ease;\n\n        &:focus {\n          border: 2px solid #4285f4;\n        }\n\n        @media screen and (max-width: 450px) {\n          width: auto;\n        }\n      }\n    }\n    button {\n      margin: 28px 0px 10px 0px;\n      border: none;\n      outline: none;\n      width: 100%;\n      background-color: #4285f4;\n      height: 2.5rem;\n      border-radius: 4px;\n      color: #fff;\n      font-weight: bold;\n      padding: 10.5px 6px 14px 6px;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: all 300ms ease;\n      &:hover {\n        filter: brightness(0.9);\n      }\n    }\n    p {\n      margin-right: auto;\n      color: #686c73;\n      font-size: 0.8rem;\n      margin-top: 4px;\n      span {\n        color: #4285f4;\n        transition: all 300ms ease;\n        cursor: pointer;\n        font-weight: bold;\n        &:hover {\n          filter: brightness(1.3)\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 450px) {\n    main {\n      z-index: 1;\n      min-width: unset;\n      width: 100%;\n      box-shadow: none;\n      padding: 48px;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    .MuiCircularProgress-circle {\n      color: #4285f4;\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
