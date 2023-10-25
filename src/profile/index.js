import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import { useNavigate } from 'react-router-dom';
import { database } from '../auth/config/firebase';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';

export default function Profile() {
  const navigate = useNavigate();
  const handelmove = () => {
    navigate('/Home');
  };

  const handleLogout = () => {
    signOut(database).then((val) => {
      navigate('/Auth');
      localStorage.clear();
    });
  };

  const [user, setUser] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    database.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
    setList(JSON.parse(localStorage.getItem('lastTime')))
  }, [navigate]);

  const photo = user?.photoURL;

  return (
    <div className="font-itim bg-white h-screen">
      {/* mobile */}
      <div className="lg:hidden">
        <div className="bg-bg grid grid-rows-2">
          <div className="flex justify-between">
            <button onClick={handelmove} className="text-3xl ml-4 mt-4 text-white">
              <svg style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </svg>
            </button>
            <button className="text-3xl mr-4 mt-8 text-red-600" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} size="sm" />
            </button>
          </div>
          {/* profile image */}
          <p className="text-3xl text-center text-white font-semibold">{user?.displayName}</p>
          <div className="flex justify-center">
            <img src={photo ? photo : '/image/images.png'} alt="profile" className="w-[200px] h-[200px] rounded-full mt-5" />
          </div>
          <p className="text-center text-white my-2">{user?.email}</p>
        </div>
        <div className="text-center my-16 gap-y-10 flex flex-col justify-center items-center">
          {/* <p className="bg-btn-profile text-lg text-bg rounded-full w-72 py-1.5 px-10">
            Membership: <span className="text-blue-600">Premium</span>
          </p> */}
          <p className="bg-btn-profile text-lg text-bg rounded-full w-72 py-1.5 px-10">Last ask {list?.time}.{list?.min}</p>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden bg-bg h-1/2 relative lg:block">
        <Nav />
        <div className="flex">
          <div className="relative">
            <img src={photo ? photo : '/image/images.png'} alt="profile" className="min-w-[300px] min-h-[300px] absolute -bottom-2/3 ml-5 border-8 border-bg rounded-full" />
          </div>
          <div className="flex-1 h-52 grid place-items-center text-white">
            <div>
              <p className="flex text-3xl">
                {user?.displayName ? user?.displayName : 'User'}
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="ml-3 fill-white">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                </svg> */}
              </p>
              <p className="text-xl text-slate-400">{user?.email}</p>
              <button onClick={handleLogout}>
                <FontAwesomeIcon className="mt-2 text-red-600" icon={faRightFromBracket} size="xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute grid place-items-center mt-16">
            {/* <p className="bg-btn-profile text-lg text-bg rounded-full w-128 py-3 px-10">
              Membership: <span className="text-blue-600">Premium</span>
            </p> */}
            <p className="bg-btn-profile text-lg text-bg rounded-full mt-10 mb-5 w-128 py-3 px-10">Last ask {list?.time}.{list?.min}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
