import React from 'react'
import Usestorage from '../Hooks/Usestorage'

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = React.useState(null)
  const {startUpload, progress} = Usestorage()
  function handlefileChange(e){
    if(e.target.files && e.target.files[0]){
      setSelectedFile(e.target.files[0])
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    if(selectedFile){
      startUpload(selectedFile)
    }
    setSelectedFile(null)
  }
  return (
    <div className='text-center mt-10' onSubmit={handleSubmit}>
      <form className='flex items-center flex-col gap-8'>
      <input 
      type="file" 
      onChange={handlefileChange}
      className="file-input file-input-bordered w-full max-w-xs" 
      />
      <button 
      type='submit' 
      className={`btn gap-3 ${progress && "loading"}`}
      disabled={!selectedFile}
      >Upload 🚀</button>
      </form>
    </div>
  )
}

export default UploadForm
