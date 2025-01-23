"use client"; // Mark this file as a client component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCartIcon, UserIcon } from "lucide-react";

function MainHeader() {
  const text = "Personalized Anniversary Keepsake"; // Text to animate
  const speed = 100;
  const interval = 10000;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const resetTyping = () => {
      setDisplayedText("");
      setIndex(0);
    };

    const typingInterval = setInterval(() => {
      resetTyping();
    }, interval);

    const typeText = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
      clearInterval(typeText);
    };
  }, [index, text, speed, interval]);

  return (
    <div className="bg-[#C5ECFB] py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-4">
          <div className="logoBox basis-1/4">
            <Link href="/">
              <Image src={Logo} alt="Logo" height={70} />
            </Link>
          </div>
          <div className="searchBox basis-1/2 text-center">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder={displayedText}
                className="bg-white border-0 rounded-xl flex-1"
              />
              <Button
                variant="blue"
                size="icon"
                className="hidden sm:flex items-center justify-center h-[47px] w-[47px] rounded-lg"
              >
                <Search />
              </Button>
            </div>
          </div>
          <div className="rightContent basis-1/4">
            <ul className="flex items-center justify-end gap-x-4">
              <li>
                <a
                  href="#"
                  className="p-3 block relative rounded-full hover:text-brand"
                >
                  <ShoppingCartIcon />
                  <span className="absolute right-0 top-0 font-bold text-sm text-red-500">
                    0
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-brand">
                  <UserIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
