"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const gsap_1 = require("gsap");
class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.goToMainPage = () => {
            this.props.history.push(`/mainpage`);
        };
    }
    componentDidMount() {
        gsap_1.gsap.from('.center-button', {
            duration: 1.5,
            opacity: 0,
            delay: 0.5,
        });
    }
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "welcome-container" }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "center-container" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "center-text" }, { children: jsx_runtime_1.jsx("h2", Object.assign({ className: "welcome-text" }, { children: "Welcome To The League Of Legends Universe" }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", Object.assign({ className: "center-button" }, { children: jsx_runtime_1.jsx("button", Object.assign({ className: "grey-button", onClick: this.goToMainPage }, { children: "Enter" }), void 0) }), void 0)] }), void 0) }), void 0));
    }
}
exports.default = WelcomePage;
