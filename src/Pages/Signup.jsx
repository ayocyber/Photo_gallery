import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Firebase";
import { Navigate, useNavigate } from "react-router-dom";


function Signup(){
  const [email , setEmail] = React.useState("")
  const [password , setPassword] = React.useState("")
  const [error , setError] = React.useState(false)
  const [message , setMessage] = React.useState("")
  const navigate = useNavigate()


  function changeError(){
    setError(false)
  }

async function handleSubmit(e){
  e.preventDefault()
  try {
   await createUserWithEmailAndPassword(auth,email,password)
    navigate("/")
  // console.log("hello world")
  } catch (error) {
    setError(true)
  }
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Image Pro</h1>
      <p className="py-6">Signup to share your photos to the world</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
        {error && <div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" onClick={changeError} className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Error! Something went wrong</span>
</div>}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="email" 
          className="input input-bordered" 
          required
           />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="password" 
          className="input input-bordered" 
          required 
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </div>
    </div>
  </div>
</div>
            </form>
        </div>
    )
}

export default Signup