import * as React from 'react';
import MainPage from './MainPage';
import ChampionCard from './ChampionCard';
import { gsap } from 'gsap';
const reqestAllChampions = 'https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json';

class App extends React.Component<{}, { allChamps: any,  searchfield:any, singleChamp:any}> {
  constructor(props:any) {
    super(props);
    this.state = {
      allChamps: {},
      searchfield: '',
      singleChamp: {}
    };
  }

  fetchChamps = async (champData:any) => {
    let allChamps = { ...this.state.allChamps };
    const resp = await fetch(reqestAllChampions);
    const champs = await resp.json();
    allChamps = champs.data;
    this.setState({ allChamps });
   }

  componentDidMount() {
    this.fetchChamps(0);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
  }

  onSearchChange = (event:any) => {
    this.setState({ searchfield: event.target.value });
  };

  getChampName = async (key:any) => {
    let singleChamp = { ...this.state.singleChamp };
    const resp = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${key}.json`);
    const champ = await resp.json();
    singleChamp = champ.data;
    this.setState({ singleChamp });
    gsap.to('.mainpage-container', {
      duration: 1.25,
      y: -1500,
      
    });
    gsap.from('.championcard-container', {
      duration: 1,
      y: 1000,
    })
  }

  goHome = (key:any) => {
    let singleChamp = { ...this.state.singleChamp };
    delete singleChamp[key];
    gsap.to('.mainpage-container', {
      duration: 1,
      y: 0,
      
    });
    gsap.to('.championcard-container', {
      duration: 1,
      y: 1000,
    })
    this.setState({ singleChamp })
  }


   render(){
    const MainPageProps = { // make sure all required component's inputs/Props keys&types match
      allChamps: this.state.allChamps,
      searchChange:this.onSearchChange,
      searchfield:this.state.searchfield,
      getChampName:this.getChampName
      };
    const toGoHome=this.goHome;
    let singleChamps=this.state.singleChamp;
    return (
      
      <div className="main-container">
        <MainPage 
        // allChamps={this.state.allChamps } 
        {...MainPageProps}
        // searchChange={this.onSearchChange}
        // searchfield={this.state.searchfield}
        // getChampName={this.getChampName}
        />
        {/* {Object.keys(this.state.singleChamp).map(key =>(
          
          <ChampionCard
            key={key}
            index={key}
            details={this.state.singleChamp[key]}
            goHome={this.goHome}
          />
          )
        )} */}

        {Object.keys(singleChamps).map(function(key, index) {
          const ChampionCardProps = { // make sure all required component's inputs/Props keys&types match
          key: key,
          index:key,
          details:singleChamps[key],
          goHome:toGoHome
          };

          return <ChampionCard
            {...ChampionCardProps}
          />
        }
        )}
      </div>
    );
  }
}

export default App;
