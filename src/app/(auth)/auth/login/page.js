"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="p-6 w-full flex flex-col items-center justify-center min-h-screen">
      <form className="max-w-xl flex flex-col gap-6 border border-gray-200 rounded-2xl p-6 shadow-xl w-full max-h-[90vh] overflow-y-auto">
        <div>
          <h1 className="text-3xl font-bold ">Login</h1>
          <h1 className="text-lg ">Sign back into your account</h1>
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Email or Username"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-lg"
          required
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-lg"
          required
        ></Input>
        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={handleClick}
            className="text-lg rounded-2xl text-blue-500 w-1/4 mx-auto"
            variant="transparent"
            size="medium"
            label="Login"
          ></Button>
          - or -
          <Button
            onClick={handleClick}
            className="text-lg rounded-2xl text-blue-500 flex items-center justify-center w-1/2 mx-auto"
            variant="transparent"
            size="medium"
          >
            <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
