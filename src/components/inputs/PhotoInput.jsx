import React from "react";

export default function PhotoInput({ image, onChange }) {
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => onChange("image", reader.result);
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
      {!image && (
        <div className="input-photo-placeholder">
          <div className="input-photo-placeholder-picture" />
          Add Photo
        </div>
      )}
      {image && <img className="input-photo-img" src={image} alt="Uploaded" />}
    </label>
  );
}
