import React from "react";
import Image from "next/image";
const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-50"
        src={"/spinner.svg"}
        alt="spinner"
        width={500}
        height={500}
      />
    </div>
  );
};

export default loading;
