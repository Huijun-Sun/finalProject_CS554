import * as React from 'react';
import * as PropTypes from 'prop-types';


interface detailsPropsOfInfo {
  details:any;
}

class ChampionE extends React.Component<detailsPropsOfInfo> {
  constructor(props:any) {
    super(props);
  }
  static propTypes = {
    details: PropTypes.object,
  };

  render() {
    const { spells } = this.props.details;
    const spellsObj = spells[Object.keys(spells)[2]];
    const img = `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/${spellsObj.id}.png`;

    return (
      <div className="info-box">
        <h4 className="info-h4">{spellsObj.name}</h4>
        <img src={img} alt="championq" className="ability-img" />
        <p className="info-paragraph">{spellsObj.description}</p>
      </div>
    );
  }
}

export default ChampionE;
