"use client";

import { usePathname } from "next/navigation";

export default function HomeTopNav() {
  const pathname = usePathname();
  return (
    <div className="header_bottom">
      <div className="header_bottom_sections">
        <a href="/" className="header_bottom_sections_link">
          {pathname === "/" && <div className="active_header_section"></div>}
          TV Shows
        </a>
        <a href="/movies">
          {pathname === "/movies" && (
            <div className="active_header_section"></div>
          )}
          Movies
        </a>
      </div>
      <div className="header_user">L</div>
    </div>
  );
}
