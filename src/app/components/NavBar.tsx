import React from "react";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
  return (
    <div className="flex gap-6 items-center justify-center p-4 lg:text-lg bg-amber-200 dark:bg-gray-600">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
