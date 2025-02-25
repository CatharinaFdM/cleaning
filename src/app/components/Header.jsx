"use client"
import Link from "next/link";
import React from 'react';

const Header = () => {
  return <header className='bg-darkblue text-white w-1280 p-2'>
    <nav className="flex justify-between items-center px-4  mx-auto">
      <div>
      <Link href="/"><img className="w-100 h-auto" src="/img/NN_logo.svg" alt="NN logo"/></Link>
      </div><div>
      <ul className="flex gap-20">
        <li className=" p-2 hover:bg-white hover:text-darkblue rounded-15"><Link href="/schedule">Schedule</Link></li>
        <li className="p-2 hover:bg-white hover:text-darkblue rounded-15"><Link href="/facility_map">Facility map</Link></li>
      </ul>
      </div>
      <div className="relative w-[70] h-auto">
          <img className="w-full h-full object-cover" src="/img/NN_UserDefault.svg" alt="NN user default"/>
          <img className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" src="/img/NN_UserHover.svg" alt="NN user hover"/>
        </div>
    </nav>
  </header>;
};

export default Header