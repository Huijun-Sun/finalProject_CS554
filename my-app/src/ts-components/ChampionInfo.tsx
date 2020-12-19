import * as React from 'react';
import ChampionBio from './ChampionBio';
import ChampionTips from './ChampionTips';
import ChampionQ from './ChampionQ';
import ChampionW from './ChampionW';
import ChampionE from './ChampionE';
import ChampionR from './ChampionR';
import { gsap } from 'gsap';


const cards = [
  <ChampionBio  />,
  <ChampionTips />,
  <ChampionQ />,
  <ChampionW />,
  <ChampionE />,
  <ChampionR />,
];

let touchstartX = 0;
let touchendX = 0;

interface detailsProps {
  details:any;
}
class ChampionInfo extends React.Component<detailsProps,{index:any}> {
  constructor(props:any) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  nextCard = () => {
     let index = this.state.index;
     index = (index + 1) % cards.length;
     this.setState({ index });
     gsap.fromTo(".champion-details", {opacity: 0, x: 170}, {opacity: 1, x: 0, duration: 1.25});
  }

  prevCard = () => {
    let index = this.state.index;
    index = (index + cards.length - 1) % cards.length;
    this.setState({ index });
    gsap.fromTo(".champion-details", {opacity: 0, x: -170}, {opacity: 1, x: 0, duration: 1.25});
  }

  handleGesture = () => {
    if (touchendX < (touchstartX - 100) ) {
      let index = this.state.index;
      index = (index + 1) % cards.length;
      this.setState({ index });
      gsap.fromTo(".champion-details", {opacity: 0, x: 170}, {opacity: 1, x: 0, duration: 1.25});
      console.log('Swiped left');
    }
    
    if (touchendX > (touchstartX + 100) ) {
      let index = this.state.index;
      index = (index + cards.length - 1) % cards.length;
      this.setState({ index });
      gsap.fromTo(".champion-details", {opacity: 0, x: -170}, {opacity: 1, x: 0, duration: 1.25});
      console.log('Swiped right');
    }
  }

  swipeStart = (e:any) => {
    touchstartX = e.changedTouches[0].screenX;
  }

  swipeEnd = (e:any) => {
    touchendX = e.changedTouches[0].screenX;
    this.handleGesture();
  }

  


  render() {
    const detailsPropsOfInfo={
      details:this.props.details
    };
    const cards = [
      <ChampionBio {...detailsPropsOfInfo}  />,
      <ChampionTips {...detailsPropsOfInfo} />,
      <ChampionQ {...detailsPropsOfInfo} />,
      <ChampionW {...detailsPropsOfInfo} />,
      <ChampionE {...detailsPropsOfInfo} />,
      <ChampionR {...detailsPropsOfInfo} />,
    ];
    return (
      <div className="championinfo-container">
        <div className="champion-details-container">
          <div className="arrow-container">
            <button className="arrow-button left" onClick={this.prevCard} />
          </div>
          <div className="champion-details" onTouchStart={this.swipeStart} onTouchEnd={this.swipeEnd}>{cards[this.state.index] }</div>
          <div className="arrow-container">
            <button className="arrow-button" onClick={this.nextCard} />
          </div>
        </div>
        <div className="bottom-container"></div>
      </div>
    );
  }
}

export default ChampionInfo;
