import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="side_nav">xoxo</div>
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
              />
            </button>
          </div>
          <div className="header_bottom">
            <div className="header_bottom_sections">
              <a href="/" className="header_bottom_sections_link">
                <div className="active_header_section"></div>
                TV Show
              </a>
              <a href="/">Movie</a>
            </div>
            <div className="header_user">L</div>
          </div>
        </header>
        <div className="main_body">corousel</div>
      </div>
    </main>
  );
}
