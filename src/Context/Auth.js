import React, { useState, createContext } from 'react';
import {  onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

export const AuthContext = createContext({
    user: null,
    isLoading: false,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    React.useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
           setUser(user)
           setIsLoading(false)
        })
        return()=>{
            unsub()
        }
    },[])
    const value = {
        user,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

// import  React from 'react'
// import  { FC } from 'react';
// import {User} from "firebase/auth"

// interface  AuthContextType{
//     user: User |null,
//     isloading : boolean,
// }
// export const AuthContext = React.createContext<AuthContextType>({
//     user:null,
//     isloading : false,
// })


// interface AuthProviderProps {
//     children : React.ReactElement
// }
// export const AuthProvider:FC<AuthProviderProps> =({children}) =>{
//     const [user , setUser] = React.useState<User | null>(null)
//     const [isloading , setIsLoading] = React.useState<boolean>(false)

//     const value = {
//         user, 
//         isloading
//     }
//     return (
//         <AuthContext.Provider value={value}>
//             {children }
//         </AuthContext.Provider>
//     )
// }