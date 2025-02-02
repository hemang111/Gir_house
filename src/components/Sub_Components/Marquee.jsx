import React, { useRef} from "react";
import Marquee from "react-fast-marquee";
import { useMouseMagnet3D } from "../../hooks/useMouseMagnet3D";


const Marquee1 = () => {
  return (
    <section className="flex flex-col  justify-center items-center  relative mt-40">
      <Marquee
        className="absolute flex h-36 justify-start overflow-hidden font-semibold text-blue-200 font-zentry  items-center text-8xl bg-blue-100 origin-center"
        style={{ border: "2px solid black", rotate: "0deg", width: "1000vw" }}
        direction="right"
        speed={240}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((item) => (
          <div key={item} className="flex h-full w-full items-center">
            <h1 className="ml-2"> Gir </h1>
            <div className="ml-2 h-16 w-16 bg-blue-80 rounded-full"></div>{" "}
            <h1 className="ml-2 mr-5">The Lion's Adobe</h1>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12].map((item) => (
          <div key={item} className="flex h-full w-full items-center">
            <h1 className="ml-2"> Gir </h1>
            <div className="ml-2 h-16 w-16 bg-blue-80 rounded-full"></div>{" "}
            <h1 className="ml-2 mr-5">The Lion's Adobe</h1>
          </div>
        ))}
      </Marquee>
      {/* <Marquee className='absolute flex h-full justify-start overflow-hidden text-red-400  font-semibold font-zentry items-center text-9xl bg-yellow-400 orgin-center top-[-1em]' direction='left' speed={200} style={{border: '2px solid black', rotate: '-9deg' , width:'150vw' }}>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
    </Marquee> */}
    </section>
  );
};

export default Marquee1;
