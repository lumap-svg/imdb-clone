import Link from "next/link";
import React, { FC } from "react";
interface MenuitemProps {
  title: string;
  address: string;
  Icon: React.ElementType;
}
const MenuItem: FC<MenuitemProps> = ({ title, address, Icon }) => {
  return (
    <>
      <Link href={address} className="hover:bg-amber-200">
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
        <Icon className="sm:hidden text-2xl" />
      </Link>
    </>
  );
};

export default MenuItem;
