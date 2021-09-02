import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) =>{

    const { progress, url } = useStorage(file);
    console.log(url, progress);
    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    return (
      <div className="progress-bar">progress</div>
    );
  } 
  
  export default ProgressBar;