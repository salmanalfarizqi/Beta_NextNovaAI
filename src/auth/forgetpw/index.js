import React from "react";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div>
      <div className="contan_luar overflow-hidden font-itim">
        {/* mobile */}
        <div className="contan_dalam lg:hidden bg-white flex flex-wrap m-auto h-screen max-w-xs w-full">
          <div className="bulet_atas inline-block h-10 w-full pb-[6rem] rounded-b-full bg-bg">
            <Link to="/" className="text-white text-2xl block p-7 text-center cursor-pointer font-itim">
              SING UP
            </Link>
          </div>
          <div className="flex h-5 absolute z-10 top-28">
            <h3 className="text-bg max-w-xs text-3xl font-itim mb-14 font-medium ml-4">
              CHANGE YOUR PASSWORD
            </h3>
          </div>
          <div className="h-64 w-full mt-24 font-itim">
            <form action="" method="post" className="ml-4 inline-block w-72">
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    for="password"
                    className="block font-semibold text-bg"
                  >
                    Email
                  </label>
                  <span class="block font-semibold text-red-500 before:content-['*'] before:text-red-500">
                    input for confirmation
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent w-full border-b-2 text-black invalid:text-red-500 invalid:focus:border-b-red-500 peer border-gray-300 text-sm block p-2.5 outline-none"
                  placeholder="your email. . ."
                  required
                />
                <p class="text-sm font-itim mt-1 text-red-500 invisible peer-invalid:visible">
                  Email tidak valid
                </p>
              </div>
            </form>
            <div className="flex justify-center mt-1">
              <button
                type="submit"
                className="cursor-pointer text-white text-base bg-bg rounded-full px-7 py-1 text-center inline-flex items-center mt-1 mb-2"
              >
                CHANGE
              </button>
            </div>
          </div>
          <div className="bulet_atas max-w-xs w-full pb-4 absolute top-96 rounded-t-full bg-bg">
            <Link to="/" className="text-white text-2xl block p-7 text-center cursor-pointer font-itim">
              SING IN
            </Link>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="text-black hidden lg:block h-screen">
            {/* bubble right */}
            <div className="relative">
              <div className="absolute bg-bg top-0 right-0 rounded-bl-full p-20">
                <p className="text-white tracking-wider font-semibold text-2xl absolute left-14 bottom-20">
                  Sign In
                </p>
              </div>
            </div>
            {/* bubble left */}
            <div className="relative">
              <div className="absolute bg-bg top-0 left-0 rounded-br-full p-20">
                <p className="text-white tracking-wider font-semibold text-2xl absolute left-6 bottom-20">
                  Sign Up
                </p>
              </div>
            </div>
            <div className="text-center text-5xl pt-8">FORGOT PASSWORD</div>
            <div className=" w-2/3 mx-auto">
              <form action="">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-2xl text-darky"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent w-full border-b-2 text-black invalid:text-red-500 text-xl peer border-gray-300 block p-2.5 outline-none"
                    placeholder="your email. . ."
                    required
                  />
                  <p class="mt-2 text-red-500 invisible peer-invalid:visible">
                    Email tidak valid
                  </p>
                </div>
              </form>
              <button
                type=""
                className="cursor-pointer block mx-auto text-white text-base bg-bg rounded-full px-10 py-1.5"
              >
                CHANGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
