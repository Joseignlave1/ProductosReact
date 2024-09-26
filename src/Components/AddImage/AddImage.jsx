import React, { useState, useRef } from "react";

const AddImage = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    
    fileReader.onload = (event) => {
      setImagePreview(event.target.result);
      if (onImageSelect) {
        onImageSelect(event.target.result); // Asegúrate de que `onImageSelect` esté definida
      }
    };
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      uploadImage(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={() => fileInputRef.current.click()}
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Imagen subida"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <p>Arrastra una imagen aquí o haz clic para subir una</p>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AddImage;
