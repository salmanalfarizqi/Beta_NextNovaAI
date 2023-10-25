import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { database } from '../auth/config/firebase';

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      }
    });
  }, [navigate]);
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <h1 className="text-center text-5xl md:text-7xl font-itim text-white mb-5">NextNova</h1>
        <div className="flex justify-around space-x-4 md:space-x-10">
          <div className="text-center shadow-2xl bg-[#4B0079] text-white px-8 md:px-12 py-2 rounded-full">
            <Link to="/Login" className="text-white text-center">
              Sign In
            </Link>
          </div>
          <div className="text-center shadow-2xl bg-[#4B0079] text-white px-8 md:px-12 py-2 rounded-full">
            <Link to="/Regist" className="text-white text-center">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;
