import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React from 'react'
import { db, storage } from '../Firebase'
import {v4 as uuid} from "uuid"
import { addDoc, collection } from 'firebase/firestore'
import { AuthContext } from '../Context/Auth'

const Usestorage = () => {
    const [progress , setProgress] = React.useState(0)
    const [error , setError] = React.useState(null)
    const {user} = React.useContext(AuthContext)
    

    function startUpload(file){
        if(!file){
            return
        }
        const fileID = uuid()
        const formatFile =   file.type.split("/")[1]
        console.log(formatFile)
        const storageRef = ref(storage, `images/${fileID}.${formatFile}`);
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', 
        (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(progress)
   
  }, 
  (error) => {
    setError(error)
  }, async () => {
    const downloadURL = await  getDownloadURL(uploadTask.snapshot.ref)
   
    setProgress(progress)

    await addDoc(collection(db, "images"), {
      imageUrl: downloadURL,
      createAT: new Date(),
      userEmail : user?.email
    });
  }
);
    }
  return {
    progress , error , startUpload
  }
}

export default Usestorage
