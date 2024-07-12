import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoute from "./Routes/PrivateRoute";
import { AuthContext } from "./Context/Auth";

function App() {
  const {user} = React.useContext(AuthContext)
  return (
    
   <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/signup" element={<PublicRoutes><Signup/></PublicRoutes>} />
      </Routes>
    
    
  );
}

export default App;
