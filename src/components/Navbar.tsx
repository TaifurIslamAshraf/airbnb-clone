import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import SearchModal from "./SearchModal";
import UserNav from "./UserNav";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            width={128}
            height={120}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />

          <Image
            width={128}
            height={120}
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>

        <SearchModal />

        <UserNav />
      </div>
    </nav>
  );
}
