"use client"

import { CloudUpload, Shield, Upload, File } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";


export default function SideNav() {
    const menuList = [
        {
            id:1,
            name:'Upload',
            icon:CloudUpload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
       
    ]


    const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div>
      <div className="p-5 border-b">
        <Image src='logo.svg' height={100} width={150}/>
        <div className="flex flex-col float-left w-full text-gray-500">
        {menuList.map((item, index)=>(
          <button className={`flex gap-2 p-4 px-6 hover:bg-gray-100 ${activeIndex == index ? 'bg-blue-50 text-primary' : null}`} onClick={()=>setActiveIndex(index)}>
           <item.icon className="w-6 h-6" />
          <h2>{item.name}</h2>
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}