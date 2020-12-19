"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const ChampionInfo_1 = require("./ChampionInfo");
const gsap_1 = require("gsap");
class ChampionCard extends React.Component {
    constructor(props) {
        super(props);
        // changeBackground = () => {
        //   const id = this.props.details.id;
        //   const champCard = document.querySelector('.championcard-container')
        //   let smallScreen = window.matchMedia('(max-width: 550px)');
        //   if (smallScreen.matches) {
        //     champCard.style.backgroundImage = `url("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg")`;
        //   } else {
        //     champCard.style.backgroundImage =  `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg")`;
        //   }
        // }
        this.BackgroundImgChanging = () => {
            const id = this.props.details.id;
            //const champCardContainer = document.querySelector('.championcard-container');
            let isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
            if (isSmallScreen) {
                let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_1.jpg`;
                //this.setState{imgURL}=url;
                this.setState({ imgURL: url });
            }
            else {
                let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_1.jpg`;
                //this.setState({imgURL:url});
                //this.state.imgURL=url;
                this.setState({ imgURL: url });
            }
        };
        this.revealInfo = () => {
            gsap_1.gsap.to('.championinfo-container', {
                duration: 1,
                y: 0,
                height: '50vh',
            });
            gsap_1.gsap.to('.up', {
                duration: 1.5,
                rotate: '90deg',
            });
            gsap_1.gsap.to('.empty-div2', {
                duration: 1,
                height: '30vh'
            });
            let infoShown = Object.assign({}, this.state.infoShown);
            infoShown = 1;
            this.setState({ infoShown });
        };
        this.hideInfo = () => {
            gsap_1.gsap.to('.championinfo-container', {
                duration: 1,
                y: 1000,
                height: 0,
            });
            gsap_1.gsap.to('.up', {
                duration: 1.5,
                rotate: '-90deg',
            });
            gsap_1.gsap.to('.empty-div2', {
                duration: 1,
                height: 0,
            });
            let infoShown = Object.assign({}, this.state.infoShown);
            infoShown = 0;
            this.setState({ infoShown });
        };
        this.runInfoAnimation = () => {
            if (this.state.infoShown === 0) {
                this.revealInfo();
            }
            else {
                this.hideInfo();
            }
        };
        this.state = {
            infoShown: 0,
            // imgURL:'url("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg")'
            imgURL: ''
        };
    }
    componentDidMount() {
        //this.changeBackground();
        this.BackgroundImgChanging();
    }
    render() {
        const { name, id, title } = this.props.details;
        const detailsProps = {
            details: this.props.details
        };
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "championcard-container", style: { backgroundImage: `url(${this.state.imgURL})` } }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "home-button" }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "home-button-container" }, { children: [jsx_runtime_1.jsx("button", { className: "home-arrow", onClick: () => this.props.goHome(id) }, void 0),
                            jsx_runtime_1.jsx("button", Object.assign({ className: "home", onClick: this.props.goHome }, { children: "Home" }), void 0)] }), void 0) }), void 0),
                jsx_runtime_1.jsx("div", { className: "empty-div full" }, void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "titles" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "championcard-title" }, { children: jsx_runtime_1.jsx("h2", Object.assign({ className: "champion-title" }, { children: name }), void 0) }), void 0),
                        jsx_runtime_1.jsx("div", Object.assign({ className: "championcard-subtitle" }, { children: jsx_runtime_1.jsx("h1", { children: title }, void 0) }), void 0)] }), void 0),
                jsx_runtime_1.jsx("div", { className: "empty-div2" }, void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "championcard-bio-button" }, { children: [jsx_runtime_1.jsx("h4", { children: "Champion Info" }, void 0),
                        jsx_runtime_1.jsx("button", { className: "arrow-button up", onClick: this.runInfoAnimation }, void 0)] }), void 0),
                jsx_runtime_1.jsx(ChampionInfo_1.default, Object.assign({}, detailsProps), void 0)] }), void 0));
    }
}
exports.default = ChampionCard;
