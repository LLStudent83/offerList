/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../itemList/ItemList';
import './listingStyle.css';

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => <ItemList item={item} key={item.listing_id} />)}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Listing;
