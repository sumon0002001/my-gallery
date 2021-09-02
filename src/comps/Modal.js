import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains('backdrop')) {
        setSelectedImage(null);
      }
  }
  return (
    <motion.div className="backdrop" onClick={clickHandler}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImage} alt=""
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}/>        
    </motion.div>
  )
}

export default Modal
