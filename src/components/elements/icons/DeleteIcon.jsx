import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function DeleteIcon({ size, fill }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.755 20.783L4 8.5H20L18.245 20.783C18.1769 21.2596 17.9391 21.6956 17.5754 22.011C17.2117 22.3264 16.7464 22.5 16.265 22.5H7.735C7.25358 22.5 6.7883 22.3264 6.42458 22.011C6.06086 21.6956 5.82312 21.2596 5.755 20.783ZM21 4.5H16V3.5C16 3.23478 15.8946 2.98043 15.7071 2.79289C15.5196 2.60536 15.2652 2.5 15 2.5H9C8.73478 2.5 8.48043 2.60536 8.29289 2.79289C8.10536 2.98043 8 3.23478 8 3.5V4.5H3C2.73478 4.5 2.48043 4.60536 2.29289 4.79289C2.10536 4.98043 2 5.23478 2 5.5C2 5.76522 2.10536 6.01957 2.29289 6.20711C2.48043 6.39464 2.73478 6.5 3 6.5H21C21.2652 6.5 21.5196 6.39464 21.7071 6.20711C21.8946 6.01957 22 5.76522 22 5.5C22 5.23478 21.8946 4.98043 21.7071 4.79289C21.5196 4.60536 21.2652 4.5 21 4.5Z"
        fill={fill}
      />
    </svg>
  );
}

DeleteIcon.propTypes = {
  size: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

DeleteIcon.defaultProps = {
  fill: null,
};

const Path = styled.path`
  fill: ${({ fill, theme }) => fill || theme.textContent};
`;

export default DeleteIcon;
