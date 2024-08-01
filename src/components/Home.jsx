import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebaseConfig";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full w-full space-y-10">
        <div className="text-9xl">Welcome to Home!</div>
        <button
          className="btn bg-amber-300"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Go back to login
        </button>

        <div className=" space-x-4">
          <button className="btn">Button</button>
          <button className="btn">Button</button>
          <button className="btn">Button</button>
          <button className="btn">Button</button>
        </div>
      </div>
    </>
  );
}
