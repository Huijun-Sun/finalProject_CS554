"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Searchbox = ({ searchChange }) => {
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("input", { className: "search", placeholder: "Search Champions", type: "search", onChange: searchChange }, void 0) }, void 0));
};
exports.default = Searchbox;
