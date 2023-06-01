'use client'
import { useState } from 'react'

export default function Navbar({ children }) {
    const [nav, setNav] = useState(false)

    const signOutHandler = () => {
        setUserProfile(null)
        signOut()
    }

    return (
        <nav className="w-screen fixed top-0 z-10 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between bg-transparent mx-auto p-4 z-[1000]">
                <a className="flex items-center">
                    <img src="/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                </a>
                <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setNav(!nav)}>
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"  ></path></svg>
                </button>


            </div>
            <div className={`absolute items-center justify-between top-[40px] w-1/2 bg-transparent md:flex md:w-auto  transition-all	z-0 ${nav ? 'right-0' : 'right-[-400px]'}`} >
                <ul className="flex flex-col bg-transparent p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Servicios</a>
                    </li>
                    <li>
                        <span href="#" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" onClick={signOutHandler}>Cerrar sesión</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


