import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Layer } from 'react-konva';
import CVMainBasic from './CVMainBasic';
import CanvasHandler from '../../../../data/CanvasHandler';
import CVMainSection from './CVMainSection';

function CVMain(props) {
  const { x, y, width, userData } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = new CanvasHandler(0, 0);

  const [basicRef, setBasicRef] = useState();
  const [workRef, setWorkRef] = useState();
  const [educationRef, setEducationRef] = useState();
  const [trainingsRef, setTrainingsRef] = useState();

  useEffect(() => {
    if (!basicRef && !workRef && !educationRef && !trainingsRef) return;

    handler.x = 0;
    handler.y = 0;
  }, [handler, basicRef, workRef, educationRef, trainingsRef]);

  return (
    <Layer x={x} y={y} width={width}>
      <CVMainBasic
        ref={setBasicRef}
        x={handler.x}
        y={handler.updateY(basicRef ? basicRef.getClientRect().height + 40 : 0)}
        width={width}
        userData={userData}
      />
      <CVMainSection
        ref={setWorkRef}
        x={handler.x}
        y={handler.updateY(workRef ? workRef.getClientRect().height + 40 : 0)}
        width={width}
        title="Job Experience"
        list={userData.work}
        itemTitle="position"
        firstInfo="company"
        secondInfo="city"
      />
      <CVMainSection
        ref={setEducationRef}
        x={handler.x}
        y={handler.updateY(
          educationRef ? educationRef.getClientRect().height + 40 : 0,
        )}
        width={width}
        title="Education"
        list={userData.education}
        itemTitle="studies"
        firstInfo="institution"
        secondInfo="city"
      />
      <CVMainSection
        ref={setTrainingsRef}
        x={handler.x}
        y={handler.updateY(
          trainingsRef ? trainingsRef.getClientRect().height + 40 : 0,
        )}
        width={width}
        title="Trainings, courses, certificates"
        list={userData.trainings}
        startMonth="month"
        startYear="year"
        itemTitle="training"
        firstInfo="provider"
      />
    </Layer>
  );
}

CVMain.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CVMain;
