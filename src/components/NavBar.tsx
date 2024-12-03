import { useState } from "react";
import { menu_links } from "../constant";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="w-full flex justify-between items-center  h-20 px-8  bg-none fixed backdrop:blur-sm z-30 backdrop-blur-sm bg-blue-800 text-white">
      <div className={`${isOpen ? "overlay" : "hidden"}`}></div>
      <button className="text-5xl font-bold  z-[4]">Kay</button>
      <div className="h-12 w-12 z-[7]">
        <button className="w-12 h-12 hidden max-sm:block" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 text-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="flex gap-6 w-full justify-center max-sm:hidden">
        {menu_links.map((item) => (
          <button
            key={item.name}
            className="text-xl font-semibold text-white hover:underline underline-offset-8 "
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className={`menu ${isOpen ? "menu-open" : "menu-closed"} `}>
        <div className="w-full pt-20 px-4 flex flex-col gap-4 h-full">
          {menu_links.map((item) => (
            <button
              key={item.name}
              className="text-xl font-semibold text-blue-700"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
