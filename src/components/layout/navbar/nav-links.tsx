'use client';

import { tastyTalesMenu } from "@/utils/tasty-tales-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6 font-semibold capitalize">
      { tastyTalesMenu.slice(0,4).map((tastyTale) => {
        const active = pathname === tastyTale.href;
        return (
          <div
            key={ tastyTale.key }
            className="relative px-2"
          >
            <Link
              href={ tastyTale.href }
              className={ `flex flex-row items-center ${active ? "text-tasty-primary-400" : ""} hover:text-tasty-primary-400` }
            >
              {tastyTale.icon}
              <span className={"ml-1"}> { tastyTale.label }</span>
            </Link>
            {active && (
              <span
                className="absolute -bottom-2.5 left-0 h-1 bg-tasty-primary-400"
                style={{
                  width: "100%",
                  transform: active ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.5s ease-in-out",
                }}
              ></span>
            )}
          </div>
        );
        })
      }
    </div>
  );
};
export default NavLinks;
