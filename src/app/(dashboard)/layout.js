"use client"

import React, { useState } from 'react';
import SideNav from './components/SideNav';
import TopHeader from './components/TopHeader';


function layout({children}) {

  const [navBar, setNavBar] = useState('hidden');
 

  return (
    <div>
      <div className=' h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
      <TopHeader />
        {children}
        </div>
    </div>
  )
}

export default layout