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
        <p className={`playfair text-2xl md:text-3xl leading-none ${isChoc ? "text-choc" : "text-white"}`}>Diksha <span className='playfair-italic'>Ghanshani</span></p>
      </Link>

      <div className="flex flex-col">
        {
          navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`uppercase hover:underline flex gap-x-2 font-semibold ${isChoc ? "text-choc" : "text-white"} `}
            >
              <div className={`size-1.5 translate-y-1.5 ${isChoc ? "bg-choc" : "bg-white"} `}></div>
              {item.name}
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Header