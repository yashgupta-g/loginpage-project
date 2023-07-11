import React from 'react'
import "./Loginpage.css";
import { GoogleLogin } from 'react-google-login';

function Loginpage() {


    const responseGoogle = (response) => {
        console.log(response);
    };
    
    return (


       
        <div className="main flex w-full bg-gray-100 flex-wrap ">

            {/* left container  */}
            
            <div className="left-side hidden object-cover sm:block h-full">
                <div className=" items-center flex justify-center h-screen">
                    <h1 className=" font-montserrat text-7xl text-white w-61 h-20 ">
                        Board.
                    </h1>
                </div>
            </div>

            {/* right container  */}
            <div className='right-side  '>

                
<div >
              <form>
                   
                        <div className='  Container w-full  flex flex-col text-left mb-10   '>
                            <h2 className=' text-6xl font-montserrat font-bold mb-2'>Sign In</h2>
                            <h3 className=' heading '>Sign in to your account</h3>
                        </div>
                    

                            {/* auth buttons */}
                            <div className='Container w-full flex flex-row  items-center mb-10  '>

                                <GoogleLogin
                                    clientId="YOUR_GOOGLE_CLIENT_ID"
                                    buttonText="Sign in with Google "
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className='auth '
                                />

                                <button className=' apple-button'>
                                    <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="apple" className=" h-3 w-3.5 inline-block m-4  " />
                                    <p className=' text-gray-400'>Sign in with Apple </p>
                                </button>
                            </div>
                 </form>

                {/*  form card */}
                <form className=" formcontainer justify-center flex bg-white rounded-2xl  ">
                        <div className=" form-content  ">
                            {/* email */}
                            <label
                                className="block text-black  mb-2 font-lato font-normal text-2xl"
                                htmlFor="email">
                                Email address
                            </label>
                            <input
                                className=" heading input rounded-xl bg-gray-color  text-black leading-tight focus:outline-none p-4 mb-8 "
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com" />

                            <div className="mb-6">
                                <label
                                    className="block text-black text-2xl  mb-2 heading  "
                                    htmlFor="password" >
                                    Password
                                </label>
                                <input
                                    className="input rounded-xl bg-gray-color text-black leading-tight focus:outline-none p-4 heading mb-8  "
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                />
                                <a className="inline-block align-baseline heading  text-blue-500 hover:text-blue-800 mb-8"
                                    href="www.google.com">
                                    Forgot password?
                                </a>
                                {/* sign in button */}
                                <div className="flex items-center justify-between">

                                    <button
                                        className='rounded-xl bg-black w-11/12 h-16 py-2 px-3 text-white leading-tight focus:outline-none mt-1 heading'
                                        type="button" >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                        </div> 
                </form>
               
                    
                    {/* card footer */}
                    <div className='w-full flex items-center justify-center mt-5 '>
                        <p className='text-gray-600 heading '>Dont have account?<span className='heading cursor-pointer text-blue-600 '>Register here</span> </p>
                    </div>
                    </div> 
                </div>
            </div>
       
    )
}

export default Loginpage