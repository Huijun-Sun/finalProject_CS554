"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const PropTypes = require("prop-types");
class ChampionTips extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "info-box" }, { children: [jsx_runtime_1.jsx("h4", Object.assign({ className: "info-h4" }, { children: "Ally Tips" }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "info-paragraph" }, { children: this.props.details.allytips }), void 0),
                jsx_runtime_1.jsx("h4", Object.assign({ className: "info-h4" }, { children: "Enemy Tips" }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "info-paragraph" }, { children: this.props.details.enemytips }), void 0)] }), void 0));
    }
}
ChampionTips.propTypes = {
    details: PropTypes.object,
};
exports.default = ChampionTips;
