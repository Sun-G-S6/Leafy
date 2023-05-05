import { Link } from "react-router-dom";
import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserContext } from "./UserContext";
//****************yarn add '@headlessui/react'********************/

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const {user} = useContext(UserContext);
    return (
        <header className='flex justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="50px" height="40px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                    <g>
                        <path fill="#B4CCB9" d="M56,28c0,11.047-8.953,20-20,20H16V28c0-11.047,8.953-20,20-20h20V28z" />
                        <g>
                            <path fill="#394240" d="M36,0C20.535,0,8,12.535,8,28v22.344l-6.828,6.828c-1.562,1.562-1.562,4.094,0,5.656
			                    C1.953,63.609,2.977,64,4,64s2.047-0.391,2.828-1.172L13.656,56H36c15.465,0,28-12.535,28-28V0H36z M56,28
			                    c0,11.047-8.953,20-20,20H16V28c0-11.047,8.953-20,20-20h20V28z"/>
                            <path fill="#394240" d="M32,20c0-2.211-1.789-4-4-4s-4,1.789-4,4v14.344l-2.828,2.828c-1.562,1.562-1.562,4.094,0,5.656
			                    C21.953,43.609,22.977,44,24,44s2.047-0.391,2.828-1.172l2.824-2.824H44c2.211,0,4-1.789,4-4s-1.789-4-4-4h-6.348l13.176-13.176
			                    c1.562-1.562,1.562-4.094,0-5.656s-4.094-1.562-5.656,0L32,26.344V20z"/>
                        </g>
                    </g>
                </svg>
                <span className='italic text-xl'>Leafy</span>
            </Link>
            <Link to={"/about"}>
                <button>
                    <div className='flex border border-gray-400 rounded-full py-3.5 px-1 shadow-md shadow-gray-300'>
                        <div className='px-2'>About Us</div>
                    </div>
                </button>
            </Link>
            <Link to={"/how"}>
                <button>
                    <div className='flex border border-gray-400 rounded-full py-3.5 px-1 shadow-md shadow-gray-300'>
                        <div className='px-2'>How we work</div>
                    </div>
                </button>
            </Link>
            <div className='flex border border-gray-400 rounded-full py-3 px-4 shadow-md shadow-gray-300'>
                <div className='px-2'>Search</div>
                <Link to={"/search"}>
                    <button className='bg-primary text-white p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </Link>
            </div>
            <div className='flex items-center gap-2 border border-gray-400 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>

                                <form method="POST" action="#">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Link to={user?'/account':'/login'} className='flex overflow-hidden'>
                    <div className="bg-gray-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                        
                    {!!user &&(
                        <div className="pl-1">
                            {user.fName} {user.lName}
                        </div>
                    )}
                </Link>
            </div>
        </header>
    );
}