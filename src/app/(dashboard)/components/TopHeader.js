import React from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function TopHeader() {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <button onClick={(errd)=>setNavBar()}><AlignJustify className=" md:hidden"/></button>
      <UserButton />
      <Image src='logo.svg' height={100} width={150} className="md:hidden"/>
    </div>
  );
}
