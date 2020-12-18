import React from 'react';
import { gsap } from 'gsap'

class WelcomePage extends React.Component {
  goToMainPage = () => {
    this.props.history.push(`/mainpage`);
  }

  componentDidMount() {
    gsap.from('.center-button', {
      duration: 1.5,
      opacity: 0,
      delay: 0.5,
    });
  }

  render() {
    return (
      <div className="welcome-container">
        <div className="center-container">
          <div className="center-button">
            <h2 className="welcome-text">Welcome To The League Of Legends Universe</h2>
            <h4 className="welcome-text">Madeby Zehui, Yunxiang, Shiwei,Huijun</h4>
            <br/>
            <button
              className="grey-button-like"
              onClick={this.goToMainPage}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
