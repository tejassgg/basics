"use client";
import Input from "@/components/Input";

export default function Register() {
  return (
    <div className="p-6 w-full flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-lg font-bold">Login</h1>
      <form className="max-w-3xl flex flex-col gap-6 border border-gray-200 rounded-2xl p-6 shadow-xl w-full max-h-[90vh] overflow-y-auto">
        <Input
          name="name"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-md"
        ></Input>
        <Input
          name="email"
          type="email"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-md"
        ></Input>
        <Input
          name="phone"
          type="number"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-md"
        ></Input>
        <Input
          type="submit"
          name="name"
          className="bg-white rounded-xl border border-gray-200 px-4 py-2 w-full text-black text-md"
        ></Input>
      </form>
    </div>
  );
}
