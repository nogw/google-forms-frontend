import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './UserProvider';
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(UserProvider, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById('root'));
