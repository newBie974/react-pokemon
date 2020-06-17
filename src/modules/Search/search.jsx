import React from 'react';

const Search = ({
  search,
  onChange,
  ...rest
}) => {
  return (
    <input type="text" value={search} onChange={onChange} {...rest}/>
  )
}

export default Search;
