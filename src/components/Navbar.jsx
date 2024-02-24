import React from 'react';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import GradientBtn from './GradientBtn';
import { Link } from 'react-scroll';

const Navbar = ({ isMenuShown, setIsMenuShown }) => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'products'
        },
        {
            id: 3,
            link: 'developer API'
        },
        {
            id: 4,
            link: 'customers'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];

    return (
        <div>
            <div className='w-full bg-black text-gray-200 fixed z-20'>

                <div className='flex justify-between items-center max-w-screen-xl mx-8 xl:mx-auto h-fit py-3 md:py-2'>

                    <div>
                        <Link to='home' smooth duration={500} className='text-thBlue text-2xl md:text-3xl py-5 font-bold cursor-pointer'>ANTON</Link>
                    </div>

                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='p-4 uppercase font-medium duration-200 hover:text-thBlue cursor-pointer'>
                                        <Link to={link} smooth duration={500}>
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <GradientBtn className='ml-4 capitalize' title='get anton' />
                    </div>


                    <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer'>
                        {isMenuShown ? <LiaTimesSolid size={25} /> : <HiMiniBars3BottomLeft size={25} />}
                    </div>

                </div>

            </div>
            
            {/* mobile view  */}
            <div className={`w-full bg-black text-gray-200 fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-lg duration-500 ${isMenuShown ? 'rounded-b-2xl opacity-95' : 'top-[-100%]'}`}>
                <ul>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='p-4 uppercase font-medium hover:text-thBlue cursor-pointer'>
                                <Link onClick={() => setIsMenuShown(false)} to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                    <GradientBtn className='m-10 capitalize' title='get anton' />
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
