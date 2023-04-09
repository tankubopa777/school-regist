import React from 'react';
import { redirect, useNavigate, useHistory } from 'react-router-dom';
import Logo from '../assets/pks.png';

export default function PageNotFound(props) {

    const navigate = useNavigate();

    const home = () => {
        navigate("/")
  }

    return (
        <div className='w-screen h-screen'>
            <section className="flex items-center h-full p-16 bg-green-600 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <div className='margin-auto w-fit'>
                            <img src={Logo}  />
                        </div>
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-100">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-gray-200">ขออภัยไม่พบหน้าที่คุณต้องการ</p>
                        <button onClick={home} className="px-8 py-3 font-semibold rounded bg-white hover:bg-green-400 text-black hover:text-white">Back to Login</button>
                    </div>
                </div>
            </section>
        </div>
    );
}