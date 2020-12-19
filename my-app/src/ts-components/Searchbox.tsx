import * as React from 'react';

interface SearchboxProps {
  searchChange: any;
}
const Searchbox = ( {searchChange}:SearchboxProps) => {
  return (
    <div>
      <input
        className="search"
        placeholder="Search Champions"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
