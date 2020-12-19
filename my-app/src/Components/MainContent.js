"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const Champion_1 = require("./Champion");
class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    // static propTypes = {
    //   allChamps: PropTypes.object,
    //   searchfield: PropTypes.string,
    // };
    render() {
        const filteredChamps = Object.keys(this.props.allChamps).filter((filteredChamps) => {
            return filteredChamps
                .toLowerCase()
                .includes(this.props.searchfield.toLowerCase());
        });
        const ALLCHAMPS = this.props.allChamps;
        const GETCHAMPNAME = this.props.getChampName;
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "maincontent-container" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "maincontent-inner" }, { children: filteredChamps.map(function (key, index) {
                    const ChampionProps = {
                        key: key,
                        index: key,
                        details: ALLCHAMPS[key],
                        getChampName: GETCHAMPNAME
                    };
                    return jsx_runtime_1.jsx(Champion_1.default, Object.assign({}, ChampionProps), void 0);
                }) }), void 0) }), void 0));
    }
}
exports.default = MainContent;
