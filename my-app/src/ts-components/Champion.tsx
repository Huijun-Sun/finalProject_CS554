import * as React from 'react';
import * as PropTypes from 'prop-types';


interface ChampionProps {
  key: any;
  index:any;
  details:any;
  getChampName:any;
}
class Champion extends React.Component<ChampionProps> {
  constructor(props:any) {
    super(props);
  }
  // static propTypes = {
  //   details: PropTypes.object,
  //   getChampName: PropTypes.func,
  // };


  render() {
    const { name } = this.props.details;
    const img = this.props.details.image.full;
    const imgsrc = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${img}`;
    return (
      <div className="champion-container">
        <div className="champion-name">
          <h3>{name}</h3>
        </div>
        <div className="champion-img">
          <img 
          src={imgsrc} 
          alt={name} className="round-img" 
          onClick={() => this.props.getChampName(this.props.index)}
          />
        </div>
        <div className="champion-button">
          <button
            className="grey-button"
            onClick={() => this.props.getChampName(this.props.index)}
          >
            More Info
          </button>
        </div>
      </div>
    );
  }
}

export default Champion;
