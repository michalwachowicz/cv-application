import React, { useEffect, useState } from 'react';
import { Group, Image, Layer } from 'react-konva';
import useImage from 'use-image';
import PropTypes from 'prop-types';
import calcClipFunc from '../../../../util/canvasUtil';
import PersonalSection from './CVPersonal';
import CanvasHandler from '../../../../data/CanvasHandler';
import CVSidebarList from './CVSidebarList';

function CVSidebar(props) {
  const { x, y, width, userData } = props;
  const [image] = useImage(userData.photo);
  const imageSize = 242;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = new CanvasHandler(0, 0);

  const [personalRef, setPersonalRef] = useState();
  const [skillsRef, setSkillsRef] = useState();
  const [languagesRef, setLanguagesRef] = useState();
  const [hobbiesRef, setHobbiesRef] = useState();

  useEffect(() => {
    if (!personalRef && !skillsRef && !languagesRef && !hobbiesRef) return;

    handler.x = 0;
    handler.y = 0;
  }, [handler, personalRef, skillsRef, languagesRef, hobbiesRef]);

  return (
    <Layer x={x} y={y}>
      {image && (
        <Group
          clipFunc={(ctx) => {
            calcClipFunc(ctx, 0, 0, imageSize, imageSize, 16);
          }}
          x={handler.updateX(0)}
          y={handler.updateY(imageSize + 40)}>
          <Image
            image={image}
            width={imageSize}
            height={imageSize}
            x={0}
            y={0}
          />
        </Group>
      )}
      <PersonalSection
        ref={setPersonalRef}
        x={handler.updateX(0)}
        y={handler.updateY(
          personalRef ? personalRef.getClientRect().height + 32 : 10,
        )}
        userData={userData}
        width={width}
      />
      <CVSidebarList
        ref={setSkillsRef}
        title="Skills"
        width={width}
        list={userData.skills}
        x={handler.updateX(0)}
        y={handler.updateY(
          skillsRef ? skillsRef.getClientRect().height + 32 : 10,
        )}
        itemTitle="skill"
        itemInfo="level"
      />
      <CVSidebarList
        ref={setLanguagesRef}
        title="Languages"
        width={width}
        list={userData.languages}
        x={handler.updateX(0)}
        y={handler.updateY(
          languagesRef ? languagesRef.getClientRect().height + 32 : 10,
        )}
        itemTitle="language"
        itemInfo="level"
      />
      <CVSidebarList
        ref={setHobbiesRef}
        title="Hobbies"
        width={width}
        list={userData.hobbies}
        x={handler.updateX(0)}
        y={handler.updateY(hobbiesRef ? hobbiesRef.getClientRect().height : 10)}
        itemTitle="hobby"
      />
    </Layer>
  );
}

CVSidebar.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CVSidebar;
