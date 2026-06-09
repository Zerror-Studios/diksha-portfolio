import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Play Ground",
    path: "/playground",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

const Header = () => {

  const pathname = usePathname()

  const isChoc = pathname === "/contact" || pathname === "/playground";
  return (
    <div className="w-full py-5 absolute top-0 left-0 h-fit padding z-50 flex justify-between ">
      <Link href="/">
        <p className={`playfair text-2xl md:text-3xl capitalize hover:scale-95 transition-all duration-300 leading-none ${isChoc ? "text-choc" : "text-white"}`}>Diksha Ghanshani</p>
      </Link>

      <div className="flex flex-col">
        {
          navItems.map((item) => {
            const isActive = item.path === pathname

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`uppercase group relative w-fit  flex gap-x-2  ${isChoc ? "text-choc" : "text-white"} `}
              >
                <p className='relative font-semibold'>
                  <span
                    className={`
                        navLinkBar
                       ${isChoc ? "bg-choc" : "bg-white"}
              absolute left-0 bottom-1 h-[1.5px] rounded-full w-full
              transition-transform duration-300 ease-out
              ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-left group-hover:scale-x-100"}
            `}
                  ></span>
                  {item.name}
                </p>
              </Link>
            );
          })}
      </div>

    </div>
  )
}

export default Header