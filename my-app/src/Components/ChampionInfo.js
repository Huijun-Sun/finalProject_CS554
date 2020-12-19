"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const ChampionBio_1 = require("./ChampionBio");
const ChampionTips_1 = require("./ChampionTips");
const ChampionQ_1 = require("./ChampionQ");
const ChampionW_1 = require("./ChampionW");
const ChampionE_1 = require("./ChampionE");
const ChampionR_1 = require("./ChampionR");
const gsap_1 = require("gsap");
const cards = [
    jsx_runtime_1.jsx(ChampionBio_1.default, {}, void 0),
    jsx_runtime_1.jsx(ChampionTips_1.default, {}, void 0),
    jsx_runtime_1.jsx(ChampionQ_1.default, {}, void 0),
    jsx_runtime_1.jsx(ChampionW_1.default, {}, void 0),
    jsx_runtime_1.jsx(ChampionE_1.default, {}, void 0),
    jsx_runtime_1.jsx(ChampionR_1.default, {}, void 0),
];
let touchstartX = 0;
let touchendX = 0;
class ChampionInfo extends React.Component {
    constructor(props) {
        super(props);
        this.nextCard = () => {
            let index = this.state.index;
            index = (index + 1) % cards.length;
            this.setState({ index });
            gsap_1.gsap.fromTo(".champion-details", { opacity: 0, x: 170 }, { opacity: 1, x: 0, duration: 1.25 });
        };
        this.prevCard = () => {
            let index = this.state.index;
            index = (index + cards.length - 1) % cards.length;
            this.setState({ index });
            gsap_1.gsap.fromTo(".champion-details", { opacity: 0, x: -170 }, { opacity: 1, x: 0, duration: 1.25 });
        };
        this.handleGesture = () => {
            if (touchendX < (touchstartX - 100)) {
                let index = this.state.index;
                index = (index + 1) % cards.length;
                this.setState({ index });
                gsap_1.gsap.fromTo(".champion-details", { opacity: 0, x: 170 }, { opacity: 1, x: 0, duration: 1.25 });
                console.log('Swiped left');
            }
            if (touchendX > (touchstartX + 100)) {
                let index = this.state.index;
                index = (index + cards.length - 1) % cards.length;
                this.setState({ index });
                gsap_1.gsap.fromTo(".champion-details", { opacity: 0, x: -170 }, { opacity: 1, x: 0, duration: 1.25 });
                console.log('Swiped right');
            }
        };
        this.swipeStart = (e) => {
            touchstartX = e.changedTouches[0].screenX;
        };
        this.swipeEnd = (e) => {
            touchendX = e.changedTouches[0].screenX;
            this.handleGesture();
        };
        this.state = {
            index: 0,
        };
    }
    render() {
        const detailsPropsOfInfo = {
            details: this.props.details
        };
        const cards = [
            jsx_runtime_1.jsx(ChampionBio_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
            jsx_runtime_1.jsx(ChampionTips_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
            jsx_runtime_1.jsx(ChampionQ_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
            jsx_runtime_1.jsx(ChampionW_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
            jsx_runtime_1.jsx(ChampionE_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
            jsx_runtime_1.jsx(ChampionR_1.default, Object.assign({}, detailsPropsOfInfo), void 0),
        ];
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "championinfo-container" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "champion-details-container" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "arrow-container" }, { children: jsx_runtime_1.jsx("button", { className: "arrow-button left", onClick: this.prevCard }, void 0) }), void 0),
                        jsx_runtime_1.jsx("div", Object.assign({ className: "champion-details", onTouchStart: this.swipeStart, onTouchEnd: this.swipeEnd }, { children: cards[this.state.index] }), void 0),
                        jsx_runtime_1.jsx("div", Object.assign({ className: "arrow-container" }, { children: jsx_runtime_1.jsx("button", { className: "arrow-button", onClick: this.nextCard }, void 0) }), void 0)] }), void 0),
                jsx_runtime_1.jsx("div", { className: "bottom-container" }, void 0)] }), void 0));
    }
}
exports.default = ChampionInfo;
