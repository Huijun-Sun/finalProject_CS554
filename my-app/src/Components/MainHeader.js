"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const Link = require("react-router-dom").Link;
const Searchbox_1 = require("./Searchbox");
const ButtonC_1 = require("../Components/ButtonP");
const PropTypes = require("prop-types");
class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const SearchboxProps = {
            searchChange: this.props.searchChange
        };
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "mainheader-container" }, {
            children: jsx_runtime_1.jsxs("div", Object.assign({ className: "mainheader-center-container" }, {
                children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "mainheader-text" }, {
                    children: [jsx_runtime_1.jsx("h2", { children: "League of Legends" }, void 0),
                    jsx_runtime_1.jsx("h2", { children: "Universe" }, void 0),
                    jsx_runtime_1.jsx("h1", { children: "League of Legends Universe" }, void 0)]
                }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "mainheader-search" }, { children: jsx_runtime_1.jsx(Searchbox_1.default, Object.assign({}, SearchboxProps), void 0) }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "mainheader-favor" }, {
                    children: [jsx_runtime_1.jsx(ButtonC_1.default, Object.assign({}), void 0),
                    jsx_runtime_1.jsx("button", Object.assign({ className: "grey-button-like" }, { children: jsx_runtime_1.jsx(Link, Object.assign({ className: "link-button", to: "/comment" }, { children: "Comment" }), void 0) }), void 0)],
                }), void 0)],
            }), void 0)
        }), void 0));

    }
}
MainHeader.propTypes = {
    searchChange: PropTypes.func,
};
exports.default = MainHeader;
