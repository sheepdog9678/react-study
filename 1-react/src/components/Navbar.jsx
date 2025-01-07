import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="Navbar">
      <a
        className={toggle ? "active" : ""}
        onClick={() => {
          setToggle(true);
        }}
        href="#"
      >
        메뉴목록
      </a>
      <a
        className={toggle ? "" : "active"}
        onClick={() => {
          setToggle(false);
        }}
        href="#"
      >
        주문내역
      </a>
    </nav>
  );
};

export default Navbar;
