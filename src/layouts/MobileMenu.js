import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
   
      <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#highlights">Highlights</Link>
                </li>
                <li>
                  <Link href="#champions">Champions</Link>
                </li>
                <li>
                  <Link href="#impact">Impact</Link>
                </li>
                <li>
                  <Link href="#voices">Voices</Link>
                </li>
                <li>
                  <Link href="#ceremonies">Ceremonies</Link>
                </li>
                <li>
                  <Link href="#diversity">Diversity</Link>
                </li>
    </ul>
  );
};
export default MobileMenu;
