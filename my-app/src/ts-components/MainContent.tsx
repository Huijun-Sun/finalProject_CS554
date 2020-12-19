import * as React from 'react';
import Champion from './Champion';
import * as PropTypes from 'prop-types';


interface MainContentProps {
  allChamps:any;
  searchfield:any;
  getChampName:any;
}


class MainContent extends React.Component<MainContentProps> {
  constructor(props:any) {
    super(props);
  }
  // static propTypes = {
  //   allChamps: PropTypes.object,
  //   searchfield: PropTypes.string,
  // };

  render() {
    const filteredChamps = Object.keys(this.props.allChamps).filter(
      (filteredChamps) => {
        return filteredChamps
          .toLowerCase()
          .includes(this.props.searchfield.toLowerCase());
      }
    );
    const ALLCHAMPS:any=this.props.allChamps;
    const GETCHAMPNAME:any=this.props.getChampName;

    return (
      <div className="maincontent-container">
        <div className="maincontent-inner">
          {filteredChamps.map(function (key, index) {
            const ChampionProps = { // make sure all required component's inputs/Props keys&types match
            key: key,
            index:key,
            details:ALLCHAMPS[key],
            getChampName:GETCHAMPNAME
          };

            return <Champion {...ChampionProps}/>
          })}
        </div>
      </div>
    );
  }
}

export default MainContent;
