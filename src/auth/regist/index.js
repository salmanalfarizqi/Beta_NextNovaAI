import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Regist() {
  const history = useNavigate();

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        history("/");
      }
    });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repass = e.target.repass.value;

    if (password !== repass) {
      alert("password are not the same");
    } else {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "user");
          localStorage.setItem("user", JSON.stringify(data.user));
          history("/Profile");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleLoginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data, "user");
        localStorage.setItem("user", JSON.stringify(data.user));
        history("/Profile");
      })
      .catch((err) => {
        alert(err.code);
        console.log(err);
      });
  };
  const handleMove = () => {
    history('/Login')
  }

  return (
    <div className="bg-bg">
      {/* mobile */}
      <div className="font-itim lg:hidden">
        <div className="mx-5 ">
          <h1 className="text-5xl text-center font-itim text-[#fff] pt-10 mb-10">
            Sing Up
          </h1>
          <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm  font-medium text-white dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-b-2 text-white border-gray-300  text-sm block mb-4 w-full p-2.5 outline-none"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="pass"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pass"
                className="bg-transparent border-b-2 text-white border-gray-300 mb-4 text-sm block w-full p-2.5 outline-none"
                placeholder="********"
                required
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm  font-medium text-white dark:text-white"
              >
                Nama
              </label>
              <input
                type="password"
                name="repass"
                id="repass"
                className="bg-transparent border-b-2 text-white border-gray-300  text-sm block mb-4 w-full p-2.5 outline-none"
                placeholder="*********"
                required
              />
            </div>

            <div className="flex justify-center mt-[2rem]">
              <button
                type="submit"
                className="justify-center bg-white text-xl font-medium rounded-3xl  w-[170px] h-[40px] px-3 py-2 text-center inline-flex items-center mr-2 mb-2"
              >
                Regist
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              onClick={handleLoginGoogle}
              type="button"
              className=" bg-white text-slate-500 font-medium mt-5 text-sm w-[170px] h-[40px] px-3 py-2 text-center inline-flex items-center mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign Up with Google
            </button>
          </div>
        </div>
        {/* sing in bulet */}
        <button onClick={handleMove} className="bg-white relative mt-5 bottom-0 h-64 w-full rounded-t-[9rem] ">
          <p
            className="block text-[30px] font-itim pt-3 text-center text-[#213555]"
          >
            SIGN IN
          </p>
        </button>
      </div>

      {/* desktop */}
      <div className="text-white hidden lg:block h-screen">
        {/* bubble right */}
        <div className="relative">
          <button onClick={handleMove} className="absolute bg-white top-0 right-0 rounded-bl-full p-20">
            <p className="text-bg tracking-wider font-semibold text-2xl absolute left-14 bottom-20">
              Sign In
            </p>
          </button>
        </div>
        <div className="text-center text-5xl pt-8">SIGN UP</div>
        <div className="w-2/3 mx-auto mt-20">
          <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="email" className="block mb-2 text-2xl text-darky">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-b-2 text-white border-gray-300  block mb-4 w-full p-2.5 outline-none"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="pass" className="block mb-2 text-2xl text-dark">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pass"
                className="bg-transparent border-b-2 text-white border-gray-300 mb-4 block w-full p-2.5 outline-none"
                placeholder="********"
                required
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-2xl text-darky">
                Repassword
              </label>
              <input
                type="password"
                name="repass"
                id="repass"
                className="bg-transparent border-b-2 text-white border-gray-300  block mb-4 w-full p-2.5 outline-none"
                placeholder="******"
                required
              />
            </div>
            <button
            type="submit"
            className="cursor-pointer block mx-auto text-bg text-base bg-white rounded-full px-10 py-1.5"
          >
            Regist
          </button>
          </form>
          <div className="flex justify-center">
            <button
              onClick={handleLoginGoogle}
              type="button"
              className="bg-white font-medium justify-center text-sm text-black text-center my-8 mb-4 h-10 w-1/4 px-6 py-2 inline-flex items-center border-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Regist;
