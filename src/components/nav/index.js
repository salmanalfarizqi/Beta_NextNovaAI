/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../auth/config/firebase';

function Nav() {
  const history = useNavigate();

  const handleLogout = () => {
    signOut(database).then((val) => {
      history('/Auth');
      localStorage.clear();
    });
  };

  return (
    <nav className="bg-bg text-white">
      {/* mobile */}
      <div className="lg:hidden bg-bg fixed w-full p-4 flex items-center justify-between">
        <div className="left">
          <button onClick={() => Show_left()} className="text-xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-white">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <div id="hint_left" className="bg-bg duration-700 absolute top-0 -left-full p-4 w-1/2 h-screen">
            <button onClick={() => Hint_left()} className="block text-xl mb-2 font-semibold text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-white">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
              </svg>
            </button>
            <ul>
              <li className='border-b-2 border-slate-500'>
                <Link to="/Home" className="block text-center my-5 text-md text-white">
                  Home
                </Link>
              </li>
              <li className='border-b-2 border-slate-500'>
                <Link to="/Profile" className="block text-center my-5 text-md text-white">
                  Profile
                </Link>
              </li>
              {/* <ol>
                <p className="text-sm underline underline-offset-4 my-2">Today</p>
                <li className="my-1 flex justify-between">
                  <p className="text-xxs">How to make Css?</p>
                  <p className="text-xxs">01.09</p>
                </li>
                <li className="my-1 flex justify-between">
                  <p className="text-xxs">How to make Css?</p>
                  <p className="text-xxs">01.09</p>
                </li>
                <li className="my-1 flex justify-between">
                  <p className="text-xxs">How to make Css?</p>
                  <p className="text-xxs">01.09</p>
                </li>
                <p className="text-sm underline underline-offset-4 my-2">Yesterday</p>
                <li className="my-1 flex justify-between">
                  <p className="text-xxs">How to make Css?</p>
                  <p className="text-xxs">01.09</p>
                </li>
                <p className="text-sm underline underline-offset-4 my-2">2 Days ago</p>
                <li className="my-1 flex justify-between">
                  <p className="text-xxs">How to make Css?</p>
                  <p className="text-xxs">01.09</p>
                </li>
              </ol> */}
            </ul>
          </div>
        </div>
        <div className="middle text-xl font-bold tracking-widest">NextNova</div>
        {/* <div className="right inset-0">
          <button onClick={() => Show_right()} className="text-xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-white">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <div id="hint_right" className="bg-red-700 duration-700 hidden absolute top-0 right-full p-4 w-1/2 h-screen">
            <ul className="space-y-4">
              <button onClick={() => Hint_right()} className="block text-xl font-semibold text-white mb-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-white">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </button>
              <li>
                <Link to="/Profile" className="block text-lg text-white">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/Member" className="block text-lg text-white">
                  Membership
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} to="" className="block text-lg text-white">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="flex justify-start">
          <button onClick={() => Show_left()} className="text-xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-white">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          
          <div id="hint_left" className="bg-bg duration-700 absolute top-0 -left-full w-1/2 h-full lg:hidden">
            <div className="p-4">
              <button onClick={() => Hint_left()} className="block text-xl font-semibold text-white mb-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-white">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </button>
              <ul className="space-y-4">
                <li>
                  <Link to="/Profile" className="block text-lg text-white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Member" className="block text-lg text-white">
                    Membership
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} to="" className="block text-lg text-white">
                    Log out
                  </button>
                </li>
              </ul>
              <div className="inline absolute bottom-8">
                <p className="text-sm">logo pengaturan</p>
              </div>
            </div>
          </div>
          <span className="inline ml-1 px-3 text-sm font-irish text-black rounded-full bg-gradient-to-b from-[#9959C1] to-white relative left-3">Pro</span>
        </div>
        <Link to="/" className="font-bold z-0 tracking-widest hover:text-gray-300">
          NextNova
        </Link>
        
        <div className="flex justify-end overflow-hidden">
          <button onClick={() => Show_right()} className="text-xl focus:outline-none overflow-hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-white">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          
          <div id="right" className="bg-bg duration-700 absolute top-0 right-full h-full w-1/2 lg:hidden">
            <div className="p-4">
              <button onClick={() => Hint_right()} className="block text-xl font-semibold text-white mb-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-white">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </button>
              <ul className="space-y-4">
                <li>
                  <Link to="/Profile" className="block text-lg text-white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Member" className="block text-lg text-white">
                    Membership
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} to="" className="block text-lg text-white">
                    Log out
                  </button>
                </li>
              </ul>
              <div className="inline absolute bottom-8">
                <p className="text-sm">logo pengaturan</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden justify-between h-16 lg:flex lg:items-center lg:px-4 lg:py-2">
        <ul className="flex">
          <Link to="/Home" className="font-bold tracking-widest hover:text-gray-300">
            NextNova
          </Link>
        </ul>
        <ul className="flex space-x-4">
          <Link to="/Home" className="duration-200 hover:underline hover:underline-offset-4 hover:decoration-orange-600">
            Home
          </Link>
          <Link to="/Profile" className="duration-200 hover:underline hover:underline-offset-4 hover:decoration-orange-600">
            Profile
          </Link>
          <button onClick={handleLogout} className="duration-200 hover:underline hover:underline-offset-4 hover:decoration-orange-600">
            Log out
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

function Hint_left() {
  var hint = document.getElementById('hint_left');
  // hint.classList.add('hidden');
  hint.classList.add('-left-full');
  hint.classList.remove('left-0');
}

function Show_left() {
  var show = document.getElementById('hint_left');
  // show.classList.remove('hidden');
  show.classList.remove('-left-full');
  show.classList.add('left-0');
}