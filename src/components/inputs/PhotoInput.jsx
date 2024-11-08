import React, { useState } from "react";

export default function PhotoInput() {
  const [imgSrc, setImgSrc] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImgSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <label htmlFor="photo" className="input input-photo">
      Photo
      <input
        type="file"
        name="photo"
        id="photo"
        accept="image/*"
        onChange={handlePhotoUpload}
      />
      {!imgSrc && (
        <div className="input-photo-placeholder">
          <div className="input-photo-placeholder-picture" />
          Add Photo
        </div>
      )}
      {imgSrc && (
        <img className="input-photo-img" src={imgSrc} alt="Uploaded" />
      )}
    </label>
  );
}
