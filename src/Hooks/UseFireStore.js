import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { db } from '../Firebase'

const UseFireStore = (collectionName) => {
    const [docs, setDocs ] = React.useState([])
    const [isLoading , setIsLoading] = React.useState(true)
    const [unsubscribe, setUnsubscribe] = React.useState(null)
    
    React.useEffect(()=>{
        const getData = async ()=>{
            try {
                const q = query(collection(db, collectionName),orderBy("createAT","desc"));
                const unsub = onSnapshot(q, (querySnapshot) => {
                    const images = [];
                    querySnapshot.forEach((doc) => {
                        const imageUrl = doc.data().imageUrl
                        const createAT = doc.data().createAT.toDate()
                        const userEmail = doc.data().userEmail
                        images.push({imageUrl , createAT ,userEmail })
                    });
                    setDocs(images)
                    setIsLoading(false)
                
                });
            } catch (error) {
                console.log(error)
                setIsLoading(false)
                
            }
        }
        getData()
        return ()=>{
            if (unsubscribe) {
                unsubscribe();
            }
        }

    },[collectionName])
  
    return {
        docs, 
        isLoading
    }
}

export default UseFireStore
