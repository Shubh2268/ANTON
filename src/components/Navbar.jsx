import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {

    const [isMenuShown, setIsMenuShown] = useState(false);

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
            <div className='fixed w-full h-16 bg-black text-white z-20'>

                <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-fulls'>

                    <div>
                        <h1 className='text-thBlue tracking-widest text-3xl'>ANTON</h1>
                    </div>

                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='p-4 uppercase duration-200 hover:text-thBlue cursor-pointer'>
                                        <a>
                                            {link}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <button className='ml-4 capitalize'>get anton</button>
                    </div>

                    <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer'>
                        {isMenuShown ? <LiaTimesSolid size={30} /> : <AiOutlineMenu size={30} />}
                    </div>

                </div>

            </div>

            <div className={`w-full bg-black text-white fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${isMenuShown ? 'top-10 rounded-b-2xl opacity-95' : 'top-[-100%]'}`}>
                <ul>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='p-4 uppercase cursor-pointer'>
                                <a>
                                    {link}
                                </a>
                            </li>
                        ))
                    }
                    <button className='ml-4 capitalize'>get anton</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
