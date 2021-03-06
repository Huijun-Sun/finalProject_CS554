import * as React from 'react';
import Searchbox from './Searchbox';
import * as PropTypes from 'prop-types';
import ButtonC from '../Components/ButtonP';
import { Link } from 'react-router-dom';
interface MainHeaderProps {
  searchChange:any;
}

class MainHeader extends React.Component<MainHeaderProps> {
  constructor(props:any) {
    super(props);
  }
  static propTypes = {
    searchChange: PropTypes.func,
  };

  render() {
    const SearchboxProps={
      searchChange:this.props.searchChange
    };
    return (
      <div className="mainheader-container">
        <div className="mainheader-center-container">
          <div className="mainheader-text">
            <h2>League of Legends</h2>
            <h2>Universe</h2>
            <h1>League of Legends Universe</h1>
          </div>
          <div className="mainheader-search">
            <Searchbox {...SearchboxProps} />
          </div>
          <div className="mainheader-favor">
            <ButtonC/>
            <button className="grey-button-like">
                <Link to='comment' className='link-button'>
                Comment
                </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
