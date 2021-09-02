import React from 'react'

const Modal = ({selectedImage, setSelectedImage}) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains('backdrop')) {
        setSelectedImage(null);
      }
  }
  return (
    <div className="backdrop" onClick={clickHandler}>
      <img src={selectedImage} alt=""/>        
    </div>
  )
}

export default Modal
