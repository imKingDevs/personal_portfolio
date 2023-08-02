import React from 'react'
import aboutImg from '../assets/image/Mans2.jpg'

function About() {
    return (
        <section className="text-gray-400 h-fit bg-Mans2 bg-fixed bg-clip-padding bg-center bg-no-repeat bg-cover bg-gray-900 md:bg-none">
            <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 md:mb-0 mb-10 p-12 hidden md:flex">
                    <img className="object-cover object-center rounded-3xl" alt="hero" src={aboutImg} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <span className=''>Have A Nice Day!</span>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        I'm Looking For React Developer.
                    </h1>
                    <p className="mb-8 leading-relaxed text-md">
                        With 20 years experience as a professional a react developer, I have acquired the skills and knowledge necessary to make your project a success.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <a href='#'>Service</a>
                        </button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            <a href='#'>Contact</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About