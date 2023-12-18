"use client";

import styles from "./SideNav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className={`${styles.side_nav_container}`}>
      <div className="side_nav_img">
        <Image
          src="/full_logo.png"
          className={`${styles.side_nav_link_icon}`}
          alt="home"
          width={114}
          height={24}
        />
      </div>
      <div className={`${styles.side_nav_group}`}>
        <p className={`${styles.side_nav_title}`}>MENU</p>
      </div>
      <div className={`${styles.side_nav_group_body}`}>
        <a
          href="/"
          className={`${styles.side_nav_link}  ${
            pathname === "/" && styles.side_nav_active
          }`}
        >
          <Image
            src={pathname === "/" ? "/nav/home_active.svg" : "/nav/home.svg"}
            className={`${styles.side_nav_link_icon}`}
            alt="home"
            width={24}
            height={24}
          />
          Home
        </a>
        <a
          href="/explore"
          className={`${styles.side_nav_link}  ${
            pathname === "/explore" && styles.side_nav_active
          }`}
        >
          <Image
            src={
              pathname === "/explore"
                ? "/nav/explore_active.svg"
                : "/nav/explore.svg"
            }
            className={`${styles.side_nav_link_icon}`}
            alt="explore"
            width={24}
            height={24}
          />
          Explore
        </a>
        <a
          href="/search"
          className={`${styles.side_nav_link}  ${
            pathname === "/search" && styles.side_nav_active
          }`}
        >
          <Image
            src="/nav/search.svg"
            className={`${styles.side_nav_link_icon}`}
            alt="search"
            width={24}
            height={24}
          />
          Search
        </a>
      </div>

      {/* nav  2*/}
      <div className={`${styles.side_nav_group}`}>
        <p className={`${styles.side_nav_title}`}>PERSONAL</p>
      </div>
      <div className={`${styles.side_nav_group_body}`}>
        <a href="/" className={`${styles.side_nav_link}`}>
          <Image
            src="/nav/bookmark.svg"
            className={`${styles.side_nav_link_icon}`}
            alt="menu"
            width={24}
            height={24}
          />
          Bookmarked
        </a>
        <a href="/" className={`${styles.side_nav_link}`}>
          <Image
            src="/nav/history.svg"
            className={`${styles.side_nav_link_icon}`}
            alt="menu"
            width={24}
            height={24}
          />
          History
        </a>
      </div>

      {/* nav  3*/}
      <div className={`${styles.side_nav_group}`}>
        <p className={`${styles.side_nav_title}`}>PERSONAL</p>
      </div>
      <div className={`${styles.side_nav_group_body}`}>
        <a href="/" className={`${styles.side_nav_link}`}>
          <Image
            src="/nav/profile.svg"
            className={`${styles.side_nav_link_icon}`}
            alt="menu"
            width={24}
            height={24}
          />
          Profile
        </a>
        <a href="/login" className={`${styles.side_nav_link}`}>
          <Image
            src="/nav/login.svg"
            className={`${styles.side_nav_link_icon}`}
            alt="menu"
            width={24}
            height={24}
          />
          Login
        </a>
      </div>
    </div>
  );
}
