import React from 'react';
import { Text, Rect } from 'react-konva';
import PropTypes from 'prop-types';

function TextItem({ x, y, text, size, weight, fill, width }) {
  return (
    <Text
      fontFamily="Roboto"
      fontSize={size}
      fontStyle={weight}
      text={text}
      x={x}
      y={y}
      fill={fill}
      width={width}
    />
  );
}

TextItem.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired,
  width: PropTypes.number,
  fill: PropTypes.string,
};
TextItem.defaultProps = { fill: '#212529', width: 1000 };

const textItems = {
  h1: {
    element: (x, y, text) => (
      <TextItem x={x} y={y} text={text} size={48} weight="900" />
    ),
    height: 56,
  },
  h2: {
    element: (x, y, text) => (
      <TextItem x={x} y={y} text={text} size={30} weight="700" />
    ),
    height: 38,
  },
  p: {
    element: (x, y, text, weight = '400', fill = '#212529', width = 1000) => (
      <TextItem
        x={x}
        y={y}
        text={text}
        size={16}
        weight={weight}
        fill={fill}
        width={width}
      />
    ),
  },
};

const otherItems = {
  divider: {
    element: (x, y, width) => (
      <Rect x={x} y={y} width={width} height={2} fill="#DEE2E6" />
    ),
    height: 2,
  },
};

export { textItems, otherItems };
