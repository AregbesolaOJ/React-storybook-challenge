import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Bestseller } from './Bestseller'

/**
 * Primary UI component for the Bestsellers
 */
export const Bestsellers = ({ data, ...props }) => {
  const [activeId, setActiveId] = useState(undefined);

  const handleSelection = id => {
    if (activeId !== id) {
      setActiveId(id);
      return;
    }
    setActiveId(undefined);
  }
  return (
    <div className="storybook-bestsellers">
      <h2 className="storybook-bestsellers__title">Bestsellers</h2>
      {data.map(item => (
        <Bestseller
          key={item._id}
          selected={item._id === activeId}
          onSelect={() => handleSelection(item._id)}
          {...item}
        />
      ))}
    </div>
  );
};

Bestsellers.propTypes = {
  data: PropTypes.array.isRequired,
};
