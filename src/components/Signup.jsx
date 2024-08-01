import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
      navigate("/auth/login");
    } catch (error) {
      console.error("Error signing up:", error.code, error.message);
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-[#e7473c]">
        <div className="flex w-72 flex-col space-y-4 rounded-lg bg-[#f8f9fa] p-4 shadow-lg">
          <div className="mb-4 text-2xl">Sign up</div>

          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="flex flex-row space-x-4">
            <button
              className="btn flex-1"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Login
            </button>

            <button
              className="btn w-[60%] bg-[#232c33] text-white hover:text-[#232c33]"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
