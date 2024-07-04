import React from "react";
import Image from "next/image";
const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image className="h-50" src={"/spinner.svg"} alt="spinner" />
    </div>
  );
};

export default loading;
