import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Group, Text } from 'react-konva';
import uniqid from 'uniqid';
import { otherItems, textItems } from '../CVElements';
import CanvasHandler from '../../../../data/CanvasHandler';

const CVSidebarList = React.forwardRef((props, ref) => {
  const { width, title, list, x, y, itemTitle, itemInfo } = props;
  const { h2 } = textItems;
  const { divider } = otherItems;
  const handler = new CanvasHandler(0, 0);

  return (
    list &&
    list.length > 0 && (
      <Group x={x} y={y} ref={ref}>
        {divider.element(0, handler.updateY(divider.height + 32), width)}
        {h2.element(0, handler.updateY(h2.height + 16), title)}
        {list.map((item) => (
          <ListItem
            x={handler.updateX(0)}
            y={handler.updateY(23)}
            title={item[itemTitle]}
            info={
              itemInfo && item[itemInfo] && item[itemInfo] !== 'Do not show'
                ? item[itemInfo]
                : null
            }
            key={uniqid()}
          />
        ))}
      </Group>
    )
  );
});

CVSidebarList.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any),
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemInfo: PropTypes.string,
};

CVSidebarList.defaultProps = {
  list: [],
  itemInfo: null,
};

function ListItem(props) {
  const { title, info, x, y } = props;
  const [ref, setRef] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = new CanvasHandler(0, 0);

  useEffect(() => {
    if (!ref) return;

    handler.x = 0;
    handler.y = 0;
  }, [handler, ref]);

  return (
    <Group x={x} y={y} height={19}>
      <Text
        fontFamily="Roboto"
        fontSize={16}
        fontStyle="700"
        text={`  •  ${title}`}
        x={handler.updateX(ref ? ref.getClientRect().width + 8 : 0)}
        y={handler.updateY(0)}
        fill="#212529"
        ref={setRef}
      />
      {info &&
        ref &&
        textItems.p.element(
          handler.updateX(0),
          handler.updateY(0),
          info,
          '300',
        )}
    </Group>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

ListItem.defaultProps = { info: null };

export default CVSidebarList;
