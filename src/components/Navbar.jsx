import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import GradientBtn from './GradientBtn';

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

                <div className='flex justify-between items-center max-w-screen-xl mx-auto h-full'>

                    <div>
                        <h1 className='text-thBlue text-3xl font-bold py-3'>ANTON</h1>
                    </div>

                    <div className='hidden md:flex items-center'>
                        <ul className='flex'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='p-4 uppercase font-medium duration-200 hover:text-thBlue cursor-pointer'>
                                        <a>
                                            {link}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <GradientBtn className='ml-4 font-medium capitalize' title='get anton' />
                    </div>


                    <div onClick={() => setIsMenuShown(!isMenuShown)} className='block md:hidden cursor-pointer'>
                        {isMenuShown ? <LiaTimesSolid size={30} /> : <AiOutlineMenu size={30} />}
                    </div>

                </div>

            </div>

            <div className={`w-full bg-black text-gray-200  fixed z-10 left-0 h-fit py-12 md:hidden flex justify-center text-center text-2xl duration-500 ${isMenuShown ? 'top-10 rounded-b-2xl opacity-95' : 'top-[-100%]'}`}>
                <ul>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='p-4 uppercase font-medium hover:text-thBlue cursor-pointer'>
                                <a>
                                    {link}
                                </a>
                            </li>
                        ))
                    }
                    <GradientBtn className='m-10 font-medium capitalize' title='get anton' />
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
