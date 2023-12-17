"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";

interface MainPageNavProps {
  children: ReactNode;
}

const MainPageNav: React.FC<MainPageNavProps> = ({ children }) => {
  const mySideNavRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    // Function to call on document click outside of mySideNavRef
    function handleClickOutside(event: MouseEvent) {
      if (
        mySideNavRef.current &&
        !mySideNavRef.current.contains(event.target as Node) &&
        document
          .getElementsByClassName("side_nav")[0]
          .classList.contains("opened") &&
        !document
          .getElementsByClassName("nav_btn")[0]
          .contains(event.target as Node)
      ) {
        toggleNav();
      }
    }

    // Add click event listener to the sidenav
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mySideNavRef]); // Empty dependency array means this effect runs once on mount

  function toggleNav() {
    const opened = document
      .getElementsByClassName("side_nav")[0]
      .classList.toggle("opened");
    if (opened) {
      document.getElementsByTagName("main")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("main")[0].style.overflow = "visible";
    }
  }

  return (
    <main>
      <div className="side_nav" ref={mySideNavRef}>
        xoxo
      </div>
      <div className="main_content">
        <header>
          <div className="header_top">
            <Image
              src="/full_logo.png"
              width={0}
              height={0}
              alt="logo"
              sizes="100vw"
              style={{ width: "150px", height: "auto" }}
            />
            <button className="nav_btn">
              <Image
                src="/menu.svg"
                alt="menu"
                width={24}
                height={24}
                priority
                onClick={toggleNav}
              />
            </button>
          </div>
          <div className="header_bottom">
            <div className="header_bottom_sections">
              <a href="/" className="header_bottom_sections_link">
                {pathname === "/" && (
                  <div className="active_header_section"></div>
                )}
                TV Show
              </a>
              <a href="/movies">
                {pathname === "/movies" && (
                  <div className="active_header_section"></div>
                )}
                Movie
              </a>
            </div>
            <div className="header_user">L</div>
          </div>
        </header>
        {children}
      </div>
    </main>
  );
};

export default MainPageNav;
