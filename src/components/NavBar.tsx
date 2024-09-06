import { ReactElement, useEffect, useRef, useState } from "react";

interface Submenu {
  title: string;
  url: string;
}

interface NavItem {
  title: string;
  url: string | null;
  submenu: Submenu[];
}

export default function Navbar(): ReactElement {
  const [navbarData, setNavbarData] = useState<NavItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    async function fetchNavbarData() {
      const response = await fetch("/src/data/navbar.json");
      const data = await response.json();
      setNavbarData(data.navbar);
    }
    fetchNavbarData();

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleSubmenu(index: number) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <nav className="h-20 bg-blue-400 text-lg">
      <ul className="flex gap-16 h-full items-center ml-16">
        {navbarData.map((item, index) => (
          <li
            key={index}
            className="relative text-gray-50 font-bold cursor-pointer"
            onClick={() => toggleSubmenu(index)}
          >
            <a href={item.url!}>{item.title}</a>
            {item.submenu.length > 0 && (
              <ul
                className={`absolute top-full left-0 bg-blue-600 p-2 rounded-lg transition-all duration-300 ${activeIndex === index ? "block" : "hidden"}`}
                ref={menuRef}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <a href={subItem.url} key={subIndex}>
                    <li className="my-1 hover:bg-purple-700 px-4 py-2 rounded-md">
                      {subItem.title}
                    </li>
                  </a>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
