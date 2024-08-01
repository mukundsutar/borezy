import React from "react";

export default function Navbar() {
// const navbar
  
  return (
    <>
      <div className="navbar bg-[#e7473c] text-white">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Rentwale</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Rentwale</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Account</summary>
                <ul className="rounded-t-none bg-base-100 p-2 text-black">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Sign out</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
