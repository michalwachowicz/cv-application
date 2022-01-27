import React from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import PropTypes from 'prop-types';
import CVSidebar from './sidebar/CVSidebar';
import CVMain from './main/CVMain';

function CVCanvas(props) {
  const { userData } = props;
  const width = 1152;
  const height = 1628;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect width={width} height={height} x={0} y={0} fill="#fff" />
      </Layer>
      <CVSidebar x={64} y={64} width={298} userData={userData} />
      <CVMain x={406} y={64} width={694} userData={userData} />
    </Stage>
  );
}

CVCanvas.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CVCanvas;
