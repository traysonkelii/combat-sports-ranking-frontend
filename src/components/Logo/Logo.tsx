import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={80}
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </Link>
  );
};

export default Logo;
