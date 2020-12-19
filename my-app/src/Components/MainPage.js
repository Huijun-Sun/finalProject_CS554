"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const MainHeader_1 = require("./MainHeader");
const MainContent_1 = require("./MainContent");
const gsap_1 = require("gsap");
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   allChamps: {},
        //   searchfield: '',
        //   singleChamp: {}
        // };
    }
    componentDidMount() {
        gsap_1.gsap.from('.mainheader-container', {
            duration: 0.75,
            y: -200,
            ease: 'power1.in',
            delay: 0.5,
            opacity: 0,
        });
        gsap_1.gsap.from('.maincontent-container', {
            duration: 0.75,
            y: 200,
            ease: 'power1.in',
            delay: 0.5,
            opacity: 0,
        });
        gsap_1.gsap.from('.mainheader-text', {
            duration: 2,
            opacity: 0,
            delay: 1.75,
        });
        gsap_1.gsap.from('.mainheader-search', {
            duration: 2,
            opacity: 0,
            delay: 2.25,
        });
        gsap_1.gsap.from('.maincontent-inner', {
            duration: 2,
            opacity: 0,
            delay: 2.75,
        });
    }
    render() {
        const MainHeaderProps = {
            searchChange: this.props.searchChange
        };
        const MainContentProps = {
            allChamps: this.props.allChamps,
            searchfield: this.props.searchfield,
            getChampName: this.props.getChampName
        };
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "mainpage-container" }, { children: [jsx_runtime_1.jsx(MainHeader_1.default, Object.assign({}, MainHeaderProps), void 0),
                jsx_runtime_1.jsx(MainContent_1.default, Object.assign({}, MainContentProps), void 0)] }), void 0));
    }
}
exports.default = MainPage;
