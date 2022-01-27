import React from 'react';
import PropTypes from 'prop-types';
import { Group, Text } from 'react-konva';
import { textItems } from '../CVElements';
import CanvasHandler from '../../../../data/CanvasHandler';

const CVMainBasic = React.forwardRef((props, ref) => {
  const { x, y, width, userData } = props;
  const { h1 } = textItems;
  const handler = new CanvasHandler(0, 0);

  return (
    <Group x={x} y={y} ref={ref}>
      {h1.element(
        handler.updateX(0),
        handler.updateY(h1.height + (userData.description ? 24 : 40)),
        `${userData.firstName || ''} ${userData.lastName || ''}`,
      )}
      {userData.description && (
        <Description
          x={handler.x}
          y={handler.y}
          width={width}
          text={userData.description}
        />
      )}
    </Group>
  );
});

CVMainBasic.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
};

function Description({ x, y, width, text }) {
  return (
    <Text
      x={x}
      y={y}
      width={width}
      fontFamily="Roboto"
      fontSize={24}
      fontStyle="400"
      fill="#868E96"
      text={text}
    />
  );
}

Description.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default CVMainBasic;
