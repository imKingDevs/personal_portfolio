import React from 'react'
import infinityLogo from '../assets/image/infinity.png'

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={infinityLogo} className="h-10"/>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Infinity Corporation —
        <a className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@infinity</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
        </span>
    </div>
    </footer>
  )
}

export default Footer