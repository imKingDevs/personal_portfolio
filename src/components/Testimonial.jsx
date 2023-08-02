import React from 'react';
import Img1 from '../assets/image/Man3.jpg';
import Img2 from '../assets/image/Girl1.jpeg';
import Img3 from '../assets/image/Man2.jpg';

function Testimonial() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-28 mx-auto">
        <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 hover:scale-105 transition border-[1px] border-transparent hover:border-white rounded-2xl hover:shadow-2xl hover:shadow-gray-800">
            <div className="h-full text-center">
            <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Img1} />
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
            </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 hover:scale-105 transition border-[1px] border-transparent hover:border-white rounded-2xl hover:shadow-2xl hover:shadow-gray-800">
            <div className="h-full text-center">
            <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Img2} />
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
            <p className="text-gray-500">UI Develeoper</p>
            </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4 hover:scale-105 transition border-[1px] border-transparent hover:border-white rounded-2xl hover:shadow-2xl hover:shadow-gray-800">
            <div className="h-full text-center">
            <img alt="testimonial" className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Img3} />
            <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
            <p className="text-gray-500">CTO</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Testimonial