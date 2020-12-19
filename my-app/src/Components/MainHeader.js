"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const Searchbox_1 = require("./Searchbox");
const PropTypes = require("prop-types");
class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const SearchboxProps = {
            searchChange: this.props.searchChange
        };
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "mainheader-container" }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "mainheader-center-container" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "mainheader-text" }, { children: [jsx_runtime_1.jsx("h2", { children: "League of Legends" }, void 0),
                            jsx_runtime_1.jsx("h2", { children: "Universe" }, void 0),
                            jsx_runtime_1.jsx("h1", { children: "League of Legends Universe" }, void 0)] }), void 0),
                    jsx_runtime_1.jsx("div", Object.assign({ className: "mainheader-search" }, { children: jsx_runtime_1.jsx(Searchbox_1.default, Object.assign({}, SearchboxProps), void 0) }), void 0)] }), void 0) }), void 0));
    }
}
MainHeader.propTypes = {
    searchChange: PropTypes.func,
};
exports.default = MainHeader;
