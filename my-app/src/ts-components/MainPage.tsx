import * as React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import { gsap } from 'gsap';

interface MainPageProps {
  allChamps?: any;
  searchChange?:any;
  searchfield?:any;
  getChampName?:any;
}

class MainPage extends React.Component<MainPageProps> {
  constructor(props:any) {
    super(props);
    // this.state = {
    //   allChamps: {},
    //   searchfield: '',
    //   singleChamp: {}
    // };
  }
  componentDidMount() {
    gsap.from('.mainheader-container', {
      duration: 0.75,
      y: -200,
      ease: 'power1.in',
      delay: 0.5,
      opacity: 0,
    });
    gsap.from('.maincontent-container', {
      duration: 0.75,
      y: 200,
      ease: 'power1.in',
      delay: 0.5,
      opacity: 0,
    });
    gsap.from('.mainheader-text', {
      duration: 2,
      opacity: 0,
      delay: 1.75,
    });
    gsap.from('.mainheader-search', {
      duration: 2,
      opacity: 0,
      delay: 2.25,
    });
    gsap.from('.maincontent-inner', {
      duration: 2,
      opacity: 0,
      delay: 2.75,
    });
  }

  render() {
    const MainHeaderProps={
      searchChange:this.props.searchChange
    };
    const MainContentProps={
      allChamps:this.props.allChamps,
      searchfield:this.props.searchfield,
      getChampName:this.props.getChampName
    };
    return (
      <div className="mainpage-container">
        <MainHeader {...MainHeaderProps} />
        <MainContent {...MainContentProps} />
      </div>
    );
  }
}

export default MainPage;
