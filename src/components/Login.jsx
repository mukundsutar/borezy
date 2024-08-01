import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-[#e7473c]">
        <div className="flex w-72 flex-col space-y-4 rounded-lg bg-[#f8f9fa] p-4 shadow-lg">
          <div className="mb-4 text-2xl">Login</div>

          <input
            type="text"
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
              className="btn w-[60%] bg-[#232c33] text-white hover:text-[#232c33]"
              onClick={() => {
                handleSubmit();
              }}
            >
              Login
            </button>
            <button
              className="btn flex-1"
              onClick={() => {
                navigate("/auth/signup");
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
