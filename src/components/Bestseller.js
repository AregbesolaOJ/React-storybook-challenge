import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for single Bestseller item
 */

export const Bestseller = ({
  modelName,
  thumbnail,
  brandName,
  price,
  selected,
  onSelect
}) => (
  <div className={["storybook-bestseller", selected ? 'storybook-bestseller__selected' : ''].join(' ')} onClick={onSelect}>
    <div className="storybook-bestseller__thumbnail">
      <img src={thumbnail} alt="bestseller item thumbnail" />
    </div>
    <div className="storybook-bestseller__main">
      <p className="storybook-bestseller__main-model">{modelName}</p>
      <p className="storybook-bestseller__main-brand">{brandName}</p>
      <p className="storybook-bestseller__main-price">{new Intl.NumberFormat(`${'en-US'}`, { style: 'currency', currency: 'USD' }).format(price)}</p>
    </div>
  </div>
);

Bestseller.defaultProps = {
  selected: false,
};

Bestseller.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  modelName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
