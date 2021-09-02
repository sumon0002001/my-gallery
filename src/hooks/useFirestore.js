import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]) 

  useEffect(() => {
    projectFirestore.collection(collection)
  }, [collection])

  return { docs }
}