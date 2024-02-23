import React, { useRef, useState } from 'react';
import bgVideo from '../assets/bgVideo.mp4';
import GradientBtn from './GradientBtn';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const Home = ({ isMenuShown }) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    const videoRef = useRef();

    const handleVideoPause = () => {
        videoRef.current.pause();
        setIsVideoPlaying(false);
    }

    const handleVideoPlay = () => {
        videoRef.current.play();
        setIsVideoPlaying(true);
    }

    return (
        <div name='home' className='flex items-end justify-center w-full h-screen text-center'>

            <video ref={videoRef} src={bgVideo} autoPlay loop muted className='object-cover h-full w-full absolute -z-10' />

            <div className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${isVideoPlaying ? '' : 'bg-black/80'} ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}>

                <h1 className='text-gray-200 tracking-wide text-4xl lg:text-5xl'>Web 3.0</h1>
                <h1 className='text-gray-200 tracking-wide text-4xl lg:text-5xl capitalize mb-12'>the <span className='text-thBlue font-bold'>future</span> is here</h1>

                <div className='flex flex-row justify-center items-center'>
                    <GradientBtn className='font-medium text-xs lg:text-base capitalize' title='get anton' />
                    <GradientBtn className='font-medium capitalize mx-12' title='products' />

                    {
                        isVideoPlaying ? <FaPauseCircle size={30} onClick={handleVideoPause} className='cursor-pointer hover:scale-110 ease-in duration-200 text-thBlue' />
                            : <FaPlayCircle size={30} onClick={handleVideoPlay} className='cursor-pointer hover:scale-110 ease-in duration-200 text-thBlue' />
                    }

                </div>

            </div>

        </div>
    )
}

export default Home;
