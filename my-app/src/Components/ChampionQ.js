"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const PropTypes = require("prop-types");
class ChampionQ extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { spells } = this.props.details;
        const spellsObj = spells[Object.keys(spells)[0]];
        const img = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spellsObj.id}.png`;
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "info-box" }, { children: [jsx_runtime_1.jsx("h4", Object.assign({ className: "info-h4" }, { children: spellsObj.name }), void 0),
                jsx_runtime_1.jsx("img", { src: img, alt: "championq", className: "ability-img" }, void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "info-paragraph" }, { children: spellsObj.description }), void 0)] }), void 0));
    }
}
ChampionQ.propTypes = {
    details: PropTypes.object,
};
exports.default = ChampionQ;
