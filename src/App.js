import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Signup from './comps/Signup';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { Container } from "react-bootstrap"
import { AuthProvider } from './context/AuthContext';

function App() {
  const [selectedImage, setSelectedImage] = useState()
  return (
    <AuthProvider>
    <div className="App">
      <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
     <div className="w-100" style={{ maxWidth: "400px" }}>
      <Signup />
      </div>
      </Container>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && (
      <Modal selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage}/>)}
    </div>
    </AuthProvider>
    
  );
}

export default App;
