import React from 'react';
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
const Header = () => {
    return (
      <div className="p-5 pr-2 w-screen h-fit fixed bg-blue-50 overflow-hidden z-50" >
        <section className="relative flex w-screen items-center justify-between">
          <h1 className="font-robert-regular text-xl font-bold ml-5">Gir House</h1>
          <div className="absolute-center flex justify-center gap-7">
            <a className="font-robert-regular text-lg font-bold hover:!text-blue-500 transition-all duration-300 ease-in-out  " href="">
              About Us
            </a>
            <a className="font-robert-regular text-lg font-bold hover:!text-blue-500 transition-all duration-300 ease-in-out" href="">
              Important Links
            </a>
            <a className="font-robert-regular text-lg font-bold hover:!text-blue-500 transition-all duration-300 ease-in-out" href="">
              Gir Apps
            </a>
          </div>
          <div className="ml-auto pr-3 flex justify-center items-center gap-8 mr-10">
            <a
              href=""
              className="font-robert-regular text-lg font-bold cursor-pointer hover:!text-blue-500 transition-all duration-300 ease-in-out"
            >
              Log In
            </a>
            <Button
              id="Sign-up"
              title="Sign up"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-violet-100 flex-center gap-2 hover:!bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
            />
          </div>
        </section>
      </div>
    );
  };
  
  export default Header;
  