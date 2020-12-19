"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react';
const react_router_dom_1 = require("react-router-dom");
const react_transition_group_1 = require("react-transition-group");
const WelcomePage_1 = require("./WelcomePage");
const Login_1 = require("../../src/Components/Login");
const CommentPage_1 = require("../../src/Components/CommentPage");
const App_1 = require("./App");
const Router = () => (jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(react_router_dom_1.Route, { render: ({ location }) => (jsx_runtime_1.jsx(react_transition_group_1.TransitionGroup, { children: jsx_runtime_1.jsx(react_transition_group_1.CSSTransition, Object.assign({ timeout: 1000, classNames: "fade" }, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, Object.assign({ location: location }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: Login_1.default }, void 0),
                        jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/welcome", component: WelcomePage_1.default }, void 0),
                        jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/mainpage", component: App_1.default }, void 0),
                        jsx_runtime_1.jsx(react_router_dom_1.Route, { path: "/comment", component: CommentPage_1.default }, void 0)] }), void 0) }), location.key) }, void 0)) }, void 0) }, void 0));
exports.default = Router;
