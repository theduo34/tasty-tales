'use client';

import { tastyTalesData } from "@/utils/tastyTales-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6 font-semibold capitalize">
      {
        tastyTalesData.map((tastyTale) => {
        const active = pathname === tastyTale.href;
        return (
          <div
            key={ tastyTale.key }
            className="relative px-2"
          >
            <Link
              href={ tastyTale.href }
              className={ `items-center ${active ? "text-tasty-primary-400" : ""} hover:text-tasty-primary-400` }
            >
              { tastyTale.name }
            </Link>
            {
              active && (
              <div className="absolute -bottom-2.5 left-0 right-0 h-1 bg-tasty-primary-400"></div>
              )
            }
          </div>
        );})
      }
    </div>
  );
};
export default NavLinks;
