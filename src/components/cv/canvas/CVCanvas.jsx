import React, { useEffect, useRef } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import PropTypes from 'prop-types';
import CVSidebar from './sidebar/CVSidebar';
import CVMain from './main/CVMain';

function CVCanvas(props) {
  const { userData, onLoad } = props;
  const cvRef = useRef();
  const width = 1152;
  const height = 1628;

  useEffect(() => {
    if (cvRef.current && onLoad) {
      onLoad(cvRef.current);
    }
  }, [onLoad]);

  return (
    <Stage ref={cvRef} width={width} height={height}>
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
  onLoad: PropTypes.func,
};

CVCanvas.defaultProps = {
  onLoad: null,
};

export default CVCanvas;
