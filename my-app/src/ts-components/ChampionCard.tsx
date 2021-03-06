import * as React from 'react';
import ChampionInfo from './ChampionInfo';
import { gsap } from 'gsap';

interface ChampionCardProps {
  key: any;
  index:any;
  details:any;
  goHome:any;
}
class ChampionCard extends React.Component<ChampionCardProps,{infoShown:any,imgURL:any}> {
  constructor(props:any) {
    super(props);
    this.state = {
      infoShown: 0,
      // imgURL:'url("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg")'
      imgURL:''
    }
  }

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

  BackgroundImgChanging=()=>{
    const id = this.props.details.id;
    //const champCardContainer = document.querySelector('.championcard-container');
    let isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
    if(isSmallScreen){
      let url=`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_1.jpg`;
      //this.setState{imgURL}=url;
      this.setState({imgURL:url});
    }else{
      let url=`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_1.jpg`;
      //this.setState({imgURL:url});
      //this.state.imgURL=url;
      this.setState({imgURL:url});
    }
  }

  componentDidMount() {
    //this.changeBackground();
    this.BackgroundImgChanging();
  }

  
  revealInfo = () => {
    gsap.to('.championinfo-container', {
      duration: 1,
      y: 0,
      height: '50vh',
    });
    gsap.to('.up', {
      duration: 1.5,
      rotate: '90deg',
    });
    gsap.to('.empty-div2', {
      duration: 1,
      height: '30vh'
    });
    let infoShown = { ...this.state.infoShown };
    infoShown = 1;
    this.setState({ infoShown });
  }

  hideInfo = () => {
    gsap.to('.championinfo-container', {
      duration: 1,
      y: 1000,
      height: 0,
    });
    gsap.to('.up', {
      duration: 1.5,
      rotate: '-90deg',
    });
    gsap.to('.empty-div2', {
      duration: 1,
      height: 0,
    });
    let infoShown = { ...this.state.infoShown };
    infoShown = 0;
    this.setState({ infoShown });
  }

  runInfoAnimation = () => {
    if(this.state.infoShown === 0) {
      this.revealInfo();
    }
    else
    {
      this.hideInfo();
    }

  }

  render() {
    const { name, id, title } = this.props.details;
    const detailsProps ={
      details: this.props.details
    };
    return (
      <div
        className="championcard-container" style={{ backgroundImage: `url(${this.state.imgURL})`}}
      >
        <div className="home-button">
          <div className="home-button-container">
            <button className="home-arrow" onClick={() => this.props.goHome(id)}></button>
            <button className="home" onClick={this.props.goHome}>Home</button>
          </div>
        </div>
        <div className="empty-div full"></div>
        <div className="titles">
          <div className="championcard-title">
            <h2 className="champion-title">{name}</h2>
          </div>
          <div className="championcard-subtitle">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="empty-div2"></div>
        <div className="championcard-bio-button">
          <h4>Champion Info</h4>
          <button className="arrow-button up" onClick={this.runInfoAnimation} />
        </div>
        <ChampionInfo {...detailsProps} />
      </div>
    );
  }
}

export default ChampionCard;
