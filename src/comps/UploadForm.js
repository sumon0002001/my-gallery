import React, {useState} from 'react'

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png','image/jpeg', 'image/jpg']

  const changeHandler = (e) => {
    let selected = e.target.files[0]
    
    if(selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null);
      setError('Pleaase select an image file(png/jpeg/jpg');
    }
  }
  return (
    <form>
      <label htmlFor="">
      <input type="file" onChange= {changeHandler}/> 
      <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div> }
      </div>      
    </form>
  )
}

export default UploadForm;
