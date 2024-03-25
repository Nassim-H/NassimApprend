'use client'
import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

const Hero = () => {



      
    return (
      <div className="relative bg-primary h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around h-full">
          <div className="md:w-1/2 text-center md:text-left mt-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white ">Bienvenue sur Nassim Apprend</h1>
            <p className="text-lg md:text-xl mb-8 text-white">Portfolio enseignant de Nassim</p>
            
            <div className="flex items-center justify-center">
            <a href="#a-propos" className="btn-primary flex items-center py-2 px-4 bg-accent rounded-full shadow-md hover:shadow-lg transition duration-300 max-w-max">
              <span>En savoir plus</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>


          </div>
          <div className="w-full h-[400px]">
          <Spline scene="https://prod.spline.design/r2eVHGyys85kZko6/scene.splinecode" />

        </div>

        </div>
      </div>
    );
  };
  
  export default Hero;
  