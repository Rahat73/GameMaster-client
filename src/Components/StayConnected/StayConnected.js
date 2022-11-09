import React from 'react';
import { FaFacebook } from "react-icons/fa";

const StayConnected = () => {
    return (
        <div className='mx-auto w-10/12 py-10 my-20 bg-black-700 bg-opacity-70 bg-clip-padding backdrop-filter backdrop-blur-md border-x border-red-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <iframe title="Protato Rahat Plays" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100076149736348%2Fvideos%2F1468589890321568%2F&show_text=false&width=560&t=0" width="445" height="250" className="w-11/12 h-auto md:w-full md:h-72 border-0 overflow-hidden" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold my-6'>Want to stay Connected?</h1>
                    <h1 className='text-2xl font-semibold flex justify-center items-center'>Follow me on <FaFacebook className='mx-3'></FaFacebook></h1>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;