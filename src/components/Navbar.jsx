import React from 'react'
import infinityLogo from '../assets/image/infinity.png'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 text-gray-400 bg-gray-900 border-b-[1px] border-zinc-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center md:mb-0">
                <img src={infinityLogo} className="h-10"/>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Home</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">About</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Service</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Portfolio</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Testimonial</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Statics</a>
                <a className="mx-0.5 font-medium text-zinc-600 hover:text-white py-2 hover:cursor-pointer px-4">Contact</a>
            </nav>
            <nav className="inline-flex items-center text-zinc-500 p-1 md:mt-0 before:content-['']">
                <a href='https://www.facebook.com/' className="mx-0.5 font-medium text-zinc-600 hover:text-red-900 py-2 hover:cursor-pointer hover:scale-110 transition px-4 text-xl">
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a href='https://www.instagram.com/' className="mx-0.5 font-medium text-zinc-600 hover:text-sky-800 py-2 hover:cursor-pointer hover:scale-110 transition px-4 text-xl">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href='https://www.twitter.com/' className="mx-0.5 font-medium text-zinc-600 hover:text-yellow-500 py-2 hover:cursor-pointer hover:scale-110 transition px-4 text-xl">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href='https://www.telegram.org/' className="mx-0.5 font-medium text-zinc-600 hover:text-green-900 py-2 hover:cursor-pointer hover:scale-110 transition px-4 text-xl">
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </nav>
        </div>
        </header>
  )
}

export default Navbar