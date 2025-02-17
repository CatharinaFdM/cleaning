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
        <li className="p-5"><Link href="/schedule">Schedule</Link></li>
        <li className="p-5"><Link href="/facility_map">Facility map</Link></li>
      </ul>
      </div><div>
      <div className="w-90 h-90 bg-darkblue rounded-full border-2 border-white"/>
      </div>
    </nav>
  </header>;
};

export default Header