import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
const Header = () => {
  return (
    <div className="flex justify-between p-3 max-w-6xl mx-auto">
      {/* left side naviagetion the about and home page links */}
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      {/* The right side navigation light and dark mode icon  */}
      <Link href={"/"} className="flex items-center">
        <span className="bg-amber-500 font-bold text-2xl rounded py-1 px-2">
          IMDB
        </span>
        <span className="text-xl  hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
