"use client";
import React, { useEffect } from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className=" mt-8 flex flex-col gap-4 justify-center items-center">
      <h2>Something Went wrong please try again</h2>
      <button className="hover:text-amber-600 border-amber-600 border-2 py-1 px-2 rounded">
        Try Again
      </button>
    </div>
  );
};

export default error;
