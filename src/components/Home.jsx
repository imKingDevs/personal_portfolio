import React from 'react'
import hero from '../assets/image/Mans.jpg'

function Home() {
  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font static h-fit">
        <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 mx-10 items-center text-center">
                <h1 className="title-font text-5xl sm:text-7xl mb-4 font-medium text-white first-letter:text-red-500">I Am
                    <br className="hidden lg:inline-block" /> Parth
                </h1>
                <span className="mb-8 leading-relaxed capitalize text-sm md:text-2xl">
                    Welcome to My Company
                </span>
                <div className="flex justify-center">
                    <a href="#portfolio" className='hover:text-yellow-500 text-sm'>See My Projects →</a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 flex items-center justify-center sm:p-3 lg:p-16">
                <img className="object-cover object-center rounded-full" alt="hero" src={hero} />
            </div>
        </div>
        </section>
    </>
  )
}

export default Home