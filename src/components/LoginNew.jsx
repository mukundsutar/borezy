import React from "react";
import Logo from "../assets/logo.png";
import BgAbstract from "../assets/bg-abstract.png";
import { Button, Checkbox, TextField } from "@mui/material";

export default function LoginNew() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-row">
        <img src={BgAbstract} alt="" width={"55%"} />

        <div className="absolute top-20 left-20 text-6xl text-white">
          <img src={Logo} alt="Logo" width={200} />
        </div>

        <div className="absolute bottom-32 left-20 text-6xl text-white">
          Welcome <br /> Back!
        </div>

        <div className="mx-44 flex flex-1 flex-col justify-center space-y-6">
          <div className="text-5xl">Sign In</div>

          <div className="text-xl text-[#797979]">
            Welcome back! Please sign in to your account
          </div>

          <TextField id="outlined-basic" label="Email ID" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <div>
            <Checkbox defaultChecked />
            <label>Remember</label>
          </div>

          <div className="w-full text-center text-[#797979]">
            Forgot your password
          </div>

          <Button fullWidth variant="contained">
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
}
