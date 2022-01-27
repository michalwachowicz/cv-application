/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import { textItems } from '../CVElements';
import CanvasHandler from '../../../../data/CanvasHandler';
import { formatDate } from '../../../../util/dateUtil';

const CVMainSection = React.forwardRef((props, ref) => {
  const {
    x,
    y,
    width,
    title,
    list,
    itemTitle,
    startMonth,
    startYear,
    endMonth,
    endYear,
    firstInfo,
    secondInfo,
    description,
  } = props;
  const { h2 } = textItems;
  const handler = new CanvasHandler(0, 0);

  useEffect(() => {
    const clearHandler = () => {
      handler.x = 0;
      handler.y = 0;
    };
    clearHandler();
  }, [list]);

  const updatePosition = (element) => {
    if (!element) return;

    element.position({
      x: handler.x,
      y: handler.updateY(element.getClientRect().height + 24),
    });
  };

  return (
    list &&
    list.length > 0 && (
      <Group x={x} y={y} ref={ref}>
        {h2.element(handler.x, handler.updateY(h2.height + 24), title)}
        {list.map((item) => (
          <ListItem
            ref={updatePosition}
            title={item[itemTitle]}
            width={width}
            startMonth={item[startMonth]}
            startYear={item[startYear]}
            endMonth={item[endMonth]}
            endYear={item[endYear]}
            firstInfo={item[firstInfo]}
            secondInfo={item[secondInfo]}
            description={item[description]}
            key={item.id}
          />
        ))}
      </Group>
    )
  );
});

CVMainSection.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  startMonth: PropTypes.string,
  startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  endMonth: PropTypes.string,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  firstInfo: PropTypes.string,
  secondInfo: PropTypes.string,
  description: PropTypes.string,
  itemTitle: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any),
};

CVMainSection.defaultProps = {
  startMonth: 'startMonth',
  startYear: 'startYear',
  endMonth: 'endMonth',
  endYear: 'endYear',
  firstInfo: null,
  secondInfo: null,
  description: 'description',
  list: null,
};

const ListItem = React.forwardRef((props, ref) => {
  const {
    width,
    startMonth,
    startYear,
    endMonth,
    endYear,
    title,
    firstInfo,
    secondInfo,
    description,
  } = props;
  const { p } = textItems;
  const handler = new CanvasHandler(0, 0);

  return (
    <Group ref={ref}>
      {((startMonth && startYear) || (endMonth && endYear)) &&
        p.element(
          handler.x,
          handler.updateY(19 + 4),
          `${formatDate(startMonth, startYear) || ''}${
            startMonth && startYear && endMonth && endYear ? ' - ' : ''
          }${formatDate(endMonth, endYear) || ''}`,
          '300',
        )}
      {!title || p.element(handler.x, handler.updateY(19 + 4), title, '700')}
      {(firstInfo || secondInfo) &&
        p.element(
          handler.x,
          handler.updateY(19 + 16),
          `${firstInfo || ''}${firstInfo && secondInfo && ' / '}${
            secondInfo || ''
          }`,
        )}
      {!description || (
        <Group x={handler.x} y={handler.y}>
          {p.element(0, 0, 'Description:')}
          {p.element(0, 19 + 4, description, '300', '#868E96', width)}
        </Group>
      )}
    </Group>
  );
});

ListItem.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  startMonth: PropTypes.string,
  startYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  endMonth: PropTypes.string,
  endYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  firstInfo: PropTypes.string,
  secondInfo: PropTypes.string,
  description: PropTypes.string,
};

ListItem.defaultProps = {
  startMonth: null,
  startYear: null,
  endMonth: null,
  endYear: null,
  firstInfo: null,
  secondInfo: null,
  description: null,
};

export default CVMainSection;
