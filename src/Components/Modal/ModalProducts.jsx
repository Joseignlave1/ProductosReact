import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddImage from '../AddImage/AddImage';
import "./ModalProducts.css";

const ModalProducts = ({ open, handleClose, addProduct }) => {
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [id, setId] = useState(0);

  const createProduct = () => {
    const newProduct = {
      id: id + 1, // Generar ID automáticamente
      name: inputName,
      description: inputDescription,
      image: inputImage,
      price: inputPrice,
    };

    addProduct(newProduct);
    setId(id + 1);

    // Limpiar los campos del formulario
    setInputName('');
    setInputPrice('');
    setInputDescription('');
    setInputImage('');
    handleClose(); // Cerrar el modal después de agregar el producto
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-container">
        <div className="modal-header">Agregar Producto</div>
        <div className="modal-content">
          <label htmlFor="inputName">Nombre</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="modal-input"
          />
          <label htmlFor="inputDescription">Descripción</label>
          <input
            type="text"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            className="modal-input"
          />
          <label htmlFor="inputPrice">Precio</label>
          <input
            type="number"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
            className="modal-input"
          />
          <AddImage onImageSelect={setInputImage} />
        </div>
        <div className="modal-buttons">
          <Button onClick={createProduct} className="add-product-btn">Agregar Producto</Button>
          <Button onClick={handleClose} className="close-modal-btn">Cerrar</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalProducts;
