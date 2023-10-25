import { Link } from 'react-router-dom';
import React from 'react';
import '../font.css';

export default function Member() {
  return (
    <div className="lg:bg-bg bg-bg-member w-full h-screen font-itim">
      {/* mobile */}
      <div className="lg:hidden">
        <img src="/image/Vector.png" className=" block w-full" alt='vector'/>
        <div className="absolute top-4 left-4">
          <p className="text-4xl text-white">PREMIUM</p>
          <p className="text-3xl text-white">PACKS</p>
        </div>
        <div className="absolute right-5 top-5">
          <Link to="/">
            <svg className="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
          </Link>
        </div>
        <div>
          <p className="text-4xl absolute left-40 top-32 bg-gradient-to-b from-black via-slate-500 to-violet-600 bg-clip-text text-transparent">60.000/</p>
          <p className="absolute left-56 top-40 text-2xl text-[#4B0079]">Month</p>
        </div>
        <div className="absolute left-10">
          <div className="flex justify-center pb-3 mt-4">
            <p className="text-2xl text-slate-400">BENEFIT</p>
            <div className="w-40 h-0.5 bg-slate-400 mt-4"></div>
          </div>

          <div className="flex pb-4 -ml-5">
            <svg className="fill-check w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <p className="pl-5 font-mono text-base text-check-font">Fast search</p>
          </div>

          <div className="flex pb-4 -ml-5">
            <svg className="fill-check w-5 h-5  " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <p className="pl-5 font-mono text-base text-check-font">Get more information</p>
          </div>

          <div className="flex pb-4 -ml-5">
            <svg className="fill-check w-5 h-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <p className="pl-5 font-mono text-base text-check-font">Responded and acurtion</p>
          </div>

          <div className="flex pb-4 -ml-5">
            <svg className="fill-check w-5 h-5  " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <p className="pl-5 font-mono  text-base text-check-font">Search, more, no limit</p>
          </div>
        </div>
        <div className="absolute bottom-5 w-screen font-itim flex align-center justify-center">
          <button className="w-72 h-10 border-2 rounded-[30px] tracking-wide shadow-md border-bg bg-bg text-white text-1xl font-black cursor-pointer">PAYMENT NOW</button>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden lg:block p-10 text-white">
        {/* text hero desktop */}
        <div className="flex justify-between">
          <p className="font-semibold text-6xl w-8/12">BUY A PREMIUM PACKAGES AND BE A KING</p>
          <svg className="fill-white w-10 h-10" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
          </svg>
        </div>
        {/* text benefit desktop */}
        <div>
          <p className="mt-10 text-3xl text-gray-text font tracking-wider underline">Benefit:</p>
          <div className="relative mt-5">
            {/* bubble desktop */}
            <div className="absolute rotate-[30deg] bg-bg-member -top-24 right-10 rounded-full py-20 px-16">
              <p className="text-5xl">60.000</p>
              <p className="text-5xl">Month</p>
            </div>
            {/* inside benefit desktop */}
            <div className="grid place-items-center gap-2">
              <div className="flex justify-start w-10/12 rounded-md py-2 px-1 bg-[#f1b8b838]">
                <svg className="fill-check w-7 h-7 ml-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="pl-5 font-mono text-xl">Fast search</p>
              </div>
              <div className="flex justify-start w-10/12 rounded-md py-2 px-1 bg-[#f1b8b838]">
                <svg className="fill-check w-7 h-7 ml-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="pl-5 font-mono text-xl">Fast search</p>
              </div>
              <div className="flex justify-start w-10/12 rounded-md py-2 px-1 bg-[#f1b8b838]">
                <svg className="fill-check w-7 h-7 ml-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="pl-5 font-mono text-xl">Fast search</p>
              </div>
              <div className="flex justify-start w-10/12 rounded-md py-2 px-1 bg-[#f1b8b838]">
                <svg className="fill-check w-7 h-7 ml-5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="pl-5 font-mono text-xl">Fast search</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="w-11/12 py-4 border-2 rounded-full tracking-wide shadow-md border-bg bg-white text-black text-2xl font-black cursor-pointer">PAYMENT NOW</button>
        </div>
      </div>
    </div>
  );
}
