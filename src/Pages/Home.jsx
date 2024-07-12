import React from "react";
import Navbar from "../Component/Navbar";
import UploadForm from "../Component/UploadForm";
import ImageGallery from "../Component/ImageGallery";
import { AuthContext } from "../Context/Auth";

function Home(){
    const {user} = React.useContext(AuthContext)
    console.log(user)
    return(
        <div className="max-w-4xl mx-auto">
            <Navbar/>
            <UploadForm/>
            <ImageGallery/>
        </div>
    )
}

export default Home