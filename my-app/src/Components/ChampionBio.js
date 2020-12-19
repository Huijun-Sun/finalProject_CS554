"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const PropTypes = require("prop-types");
class ChampionBio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "info-box" }, { children: [jsx_runtime_1.jsx("h4", Object.assign({ className: "info-h4" }, { children: "Bio" }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "info-paragraph" }, { children: this.props.details.lore }), void 0)] }), void 0));
    }
}
ChampionBio.propTypes = {
    details: PropTypes.object,
};
exports.default = ChampionBio;
