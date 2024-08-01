import React from "react";

export default function Drawer() {
  return (
    <>
      <ul className="h-full w-[20%] space-y-4 bg-[#e7473c] p-4 pt-16">
        <li>
          <button className="btn w-full">Dashboard</button>
        </li>
        <li>
          <button className="btn w-full">Products</button>
        </li>
      </ul>
    </>
  );
}
