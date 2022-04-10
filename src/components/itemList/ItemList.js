/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';

function CreateItem({ item }) {
  const {
    url, MainImage, state, title, currency_code, price, quantity,
  } = item;

  if (state === 'removed') {
    return null;
  }

  const currencyMatching = {
    USD: '$',
    EUR: '€',
  };

  const name = title.length > 50 ? `${title.slice(0, 49)}...` : title;

  let currency = '';
  for (const val in currencyMatching) {
    if (val === currency_code) { currency = currencyMatching[val]; }
  }

  const quantityClass = ['item-quantity'];
  if (quantity <= 10) quantityClass.push('level-low');
  if (quantity <= 20 && quantity > 10) quantityClass.push('level-medium');
  if (quantity > 20) quantityClass.push('level-high');
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt="изображение товара" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{name}</p>
        <p className="item-price">{currency === '' ? `${price}${currency_code}` : `${currency}${price}`}</p>
        <p className={quantityClass.join(' ')}>{quantity} left</p>
      </div>
    </div>
  );
}

CreateItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    MainImage: PropTypes.object,
    state: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,

};

export default CreateItem;
