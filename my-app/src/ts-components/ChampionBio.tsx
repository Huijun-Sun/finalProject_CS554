import * as React from 'react';
import * as PropTypes from 'prop-types';


interface detailsPropsOfInfo {
  details:any;
}

class ChampionBio extends React.Component<detailsPropsOfInfo> {
  
  constructor(props:any) {
    super(props);
  }
  static propTypes = {
    details: PropTypes.object,
  };

  render() {
    return (
      <div className="info-box">
        <h4 className="info-h4">Bio</h4>
        <p className="info-paragraph">{this.props.details.lore}</p>
      </div>
    );
  }
}

export default ChampionBio;
