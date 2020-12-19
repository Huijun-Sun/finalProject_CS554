"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
class Champion extends React.Component {
    constructor(props) {
        super(props);
    }
    // static propTypes = {
    //   details: PropTypes.object,
    //   getChampName: PropTypes.func,
    // };
    render() {
        const { name } = this.props.details;
        const img = this.props.details.image.full;
        const imgsrc = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${img}`;
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "champion-container" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "champion-name" }, { children: jsx_runtime_1.jsx("h3", { children: name }, void 0) }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "champion-img" }, { children: jsx_runtime_1.jsx("img", { src: imgsrc, alt: name, className: "round-img", onClick: () => this.props.getChampName(this.props.index) }, void 0) }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "champion-button" }, { children: jsx_runtime_1.jsx("button", Object.assign({ className: "grey-button", onClick: () => this.props.getChampName(this.props.index) }, { children: "More Info" }), void 0) }), void 0)] }), void 0));
    }
}
exports.default = Champion;
