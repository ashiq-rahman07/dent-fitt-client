import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200  drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>




                    </ul>
                </div>
                <div>
                    {
                        user?.uid ?
                            <>
                                <Link className='text-lg font-medium hover:bg-indigo-400 px-2 py-1 rounded' to='/my-reviews'>My Reviews</Link>
                                <Link className='mx-3 text-lg font-medium hover:bg-indigo-400 px-2 py-1 rounded' to='/add-services'>Add Services</Link>
                                <button onClick={handleLogOut}>Log Out</button>
                            </>
                            :
                            <>
                            <Link to='/login'>Sign In</Link>
                            <Link to='/register' className='mx-4'>Sign Up</Link>
                                {/* <button className='mr-2 px-8 py-3 '>Sign In</button>
                                <button className='px-8 py-3'>Sign Up</button> */}
                            </>
                    }
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}

                </div>
            </div>
            <ul onClick={handleClose} className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platfrom</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>

                <div className='flex flex-col my-4'>
                    {
                        user?.uid ?
                            <>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                                <button onClick={handleLogOut}>Log Out</button>
                            </>

                            :
                            <>
                                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                                <button className='px-8 py-3'>Sign Up</button>
                            </>
                    }

                </div>
            </ul>


        </div>
    );
};

export default Navbar;