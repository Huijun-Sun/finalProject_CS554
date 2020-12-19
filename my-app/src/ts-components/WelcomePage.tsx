import * as React from 'react';
import { gsap } from 'gsap'

interface userHistory{
  history:any;
}
class WelcomePage extends React.Component<userHistory> {
  constructor(props:any) {
    super(props);
  }
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
          <div className="center-text">
            <h2 className="welcome-text">Welcome To The League Of Legends Universe</h2>
          </div>
          <div className="center-button">
            <button
              className="grey-button"
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
