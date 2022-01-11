import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from './InputStyles';
import ImageIcon from './icons/ImageIcon';
import DeleteIcon from './icons/DeleteIcon';

function ImageInput({ image, onUploadImage }) {
  const uploadImage = (e) => {
    const [file] = e.target.files;
    if (file) onUploadImage(URL.createObjectURL(file).toString());
  };
  return (
    <div>
      <Label htmlFor="photo">Photo</Label>
      <ImageContainer>
        <ImageInputField
          type="file"
          accept="image/*"
          onChange={uploadImage}
          id="photo"
          name="photo"
        />
        {image || (
          <EmptyImage>
            <ImageIcon size="3rem" />
            <EmptyImageText>Add photo</EmptyImageText>
          </EmptyImage>
        )}
        {!image || (
          <>
            <DeleteIconContainer>
              <DeleteIcon
                size="1rem"
                fill="#fff"
                onRemove={() => onUploadImage(null)}
              />
            </DeleteIconContainer>
            <PhotoContainer>
              <Photo src={image} alt="User's Image" />
            </PhotoContainer>
          </>
        )}
      </ImageContainer>
    </div>
  );
}

ImageInput.propTypes = {
  image: PropTypes.string,
  onUploadImage: PropTypes.func.isRequired,
};

ImageInput.defaultProps = {
  image: null,
};

const ImageContainer = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin-top: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const ImageInputField = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 1;
`;

const EmptyImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  border: 2px dashed ${({ theme }) => theme.textContent};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.input};
`;

const EmptyImageText = styled.div`
  color: ${({ theme }) => theme.textContent};
  font-size: 1rem;
  font-weight: 700;
`;

const PhotoContainer = styled.div`
  position: absolute;
  inset: 0;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 100px 16px 100px 100px;
  background-color: #fa5252;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 2;
`;

export default ImageInput;
