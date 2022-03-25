import { useRouter } from "next/router";
import requests from "../utils/requests";
import { useRef, useEffect, useCallback } from "react";

export default function Nav() {
  const router = useRouter();
  const navRef = useRef(null);

  // useEffect(() => {
  //   const nav = navRef.current;
  //   nav.addEventListener("wheel", handleWheel);

  //   return () => {
  //     nav.removeEventListener("wheel", handleWheel);
  //   };
  // });

  // const handleWheel = useCallback(e => {
  //   e.preventDefault();
  //   console.log("scroll");
  //   const navPosition = navRef.current.scrollLeft;
  //   navRef.current.scrollTo({
  //     top: 0,
  //     left: navPosition + e.deltaY + e.deltaX,
  //     behaviour: "smooth",
  //   });
  // }, []);

  return (
    <nav ref={navRef} className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </h2>
          );
        })}
      </div>
      {/* <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" /> */}

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}
