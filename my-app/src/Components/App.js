"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const MainPage_1 = require("./MainPage");
const apiRoutes = require("../API/api_routes");
const ChampionCard_1 = require("./ChampionCard");
const gsap_1 = require("gsap");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.fetchChamps = (champData) => __awaiter(this, void 0, void 0, function* () {
            let allChamps = Object.assign({}, this.state.allChamps);
            const resp = yield fetch(apiRoutes.reqestAllChampions);
            const champs = yield resp.json();
            allChamps = champs.data;
            this.setState({ allChamps });
        });
        this.onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value });
        };
        this.getChampName = (key) => __awaiter(this, void 0, void 0, function* () {
            let singleChamp = Object.assign({}, this.state.singleChamp);
            const resp = yield fetch(`https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${key}.json`);
            const champ = yield resp.json();
            singleChamp = champ.data;
            this.setState({ singleChamp });
            gsap_1.gsap.to('.mainpage-container', {
                duration: 1.25,
                y: -1500,
            });
            gsap_1.gsap.from('.championcard-container', {
                duration: 1,
                y: 1000,
            });
        });
        this.goHome = (key) => {
            let singleChamp = Object.assign({}, this.state.singleChamp);
            delete singleChamp[key];
            gsap_1.gsap.to('.mainpage-container', {
                duration: 1,
                y: 0,
            });
            gsap_1.gsap.to('.championcard-container', {
                duration: 1,
                y: 1000,
            });
            this.setState({ singleChamp });
        };
        this.state = {
            allChamps: {},
            searchfield: '',
            singleChamp: {}
        };
    }
    componentDidMount() {
        this.fetchChamps(0);
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.cookie = 'cookie2=value2; SameSite=None; Secure';
    }
    render() {
        const MainPageProps = {
            allChamps: this.state.allChamps,
            searchChange: this.onSearchChange,
            searchfield: this.state.searchfield,
            getChampName: this.getChampName
        };
        const toGoHome = this.goHome;
        let singleChamps = this.state.singleChamp;
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "main-container" }, { children: [jsx_runtime_1.jsx(MainPage_1.default
                // allChamps={this.state.allChamps } 
                , Object.assign({}, MainPageProps), void 0),
                Object.keys(singleChamps).map(function (key, index) {
                    const ChampionCardProps = {
                        key: key,
                        index: key,
                        details: singleChamps[key],
                        goHome: toGoHome
                    };
                    return jsx_runtime_1.jsx(ChampionCard_1.default, Object.assign({}, ChampionCardProps), void 0);
                })] }), void 0));
    }
}
exports.default = App;
