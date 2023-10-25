import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { database } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Login() {
  const history = useNavigate();
  
  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        history("/");
      }
    });
  }, [history]);

  const handleMove = () => {
    history('/Regist')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "user");
        localStorage.setItem("user", JSON.stringify(data.user));
        history("/Profile");
      })
      .catch((err) => {
        alert(err.code);
      });
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

  return (
    <div className="bg-bg font-itim lg:bg-white lg:m-0 lg: p-0">
      {/* mobile */}
      <button onClick={handleMove}>
        <h1 className="text-2xl text-center text-white p-5 lg:hidden">
          Sing Up
        </h1>
      </button>

        <div className="z-10 bg-white rounded-t-[30rem] relative top-4 p-6 lg:hidden">
          <h1 className="text-[40px] text-center text-bg mb-10">Sing In</h1>
        </div>
        <div className="bg-white h-screen w-screen lg:hidden">
          <div>
            <div className="mx-5">
              <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-bg dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border-b-2 text-bg border-gray-300 text-sm block mb-4 w-full p-2.5 outline-none"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="pass"
                    className="block mb-2 text-sm font-medium text-bg dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    className="bg-transparent border-b-2 text-bg border-gray-300 mb-4 text-sm block w-full p-2.5 outline-none"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="flex justify-center mt-7">
                  <button
                    type="submit"
                    className="justify-center text-white font-xl bg-bg font-medium rounded-3xl text-xl w-44 h-10 px-3 py-2 text-center inline-flex items-center mr-2 mb-2"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleLoginGoogle}
                  type="button"
                  className="bg-white font-medium text-sm w-72 h-10 px-3 py-2 text-center inline-flex items-center mr-2 mb-2 pl-14 border-2 shadow-xl shadow-slate-400"
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
      {/* desktop */}
      <div className="text-black hidden lg:block h-screen">
        {/* bubble right */}
        <div className="relative">
          <button onClick={handleMove} className="absolute bg-bg top-0 right-0 rounded-bl-full p-20">
            <p className="text-white tracking-wider font-semibold text-2xl absolute left-14 bottom-20">
              Sign Up
            </p>
          </button>
        </div>
        <div className="text-center text-5xl pt-8">SIGN IN</div>
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
        <div className="w-2/3 mx-auto mt-10">
          <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="email" className="block mb-2 text-2xl text-darky">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent border-b-2 text-black border-gray-300  block mb-4 w-full p-2.5 outline-none"
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
                className="bg-transparent border-b-2 text-black border-gray-300 mb-4 block w-full p-2.5 outline-none"
                placeholder="********"
                required
              />
            </div>
            <button
            type="submit"
            className="cursor-pointer block mt-10 mx-auto text-white text-base bg-bg rounded-full px-10 py-1.5"
          >
            Sign In
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
