import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../auth/config/firebase';
import { useNavigate } from 'react-router-dom';
import { sendMsg } from '../openAiConf';
import Balancer from 'react-wrap-balancer';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './home.css'

function Home() {
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [message, setMessage] = useState([
    {
      text: 'Hi, ada yang bisa saya bantu?',
      // text: 'hi apakah ada yang bisa saya bantu',
      isBot: true,
    },
  ]);
  const handelSubmit = async (e) => {
    const text = input;
    setInput('');
    setMessage([
      ...message,
      {
        text,
        isBot: false,
      },
    ]);
    const res = await sendMsg(text);
    console.log(res);
    setMessage([
      ...message,
      {
        text: input,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      },
    ]);
    const now = new Date()
      const time = now.getHours
      const min = now.getMinutes
      const data = {
        time,
        min
      }
    localStorage.setItem('lastTime', JSON.stringify(data));
  };

  const handelEnter = async (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        alert('Search box tidak boleh kosong');
      } else {
        await handelSubmit();
        const now = new Date()
        const time = now.getHours()
        const min = now.getMinutes()
        const data = {
          time,
          min
        }
        localStorage.setItem('lastTime', JSON.stringify(data));
      }
    }
  };

  useEffect(() => {
    database.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/Auth');
      }
    });
  }, [navigate]);

  return (
    <div className="lg:bg-bg">
      <Navbar/>
      {/* parent */}
      <div class="lg:flex">
        {/* left */}
        <div className="hidden left fixed top-0  border-r-2 border-slate-500 font-itim lg:block lg:w-1/4 lg:p-4 min-h-full h-screen">
          <ul>
            <li className="flex justify-center items-center">
              <p className="text-white text-2xl font-bold">Next Nova</p>
            </li>
            <li className="border-b-2 border-slate-500">
              <Link to="/Home" className="block my-4 text-center text-md text-white duration-200 hover:text-slate-500">
              <FontAwesomeIcon icon={faHome} className='mr-3'/>Home
              </Link>
            </li>
            <li className="border-b-2 border-slate-500">
            <Link to="/Profile" className="block my-4 text-center text-md text-white duration-200 hover:text-slate-500">
              <FontAwesomeIcon icon={faUser} /> Profile
              </Link>
            </li>
          </ul>
        </div>
        {/* right */}
        <div class="right px-2 bg-bg pt-10 pb-10 lg:ml-96">
          <div class="ml-2 text-white">
            <p class="lg:text-semibold font-lalezar text-white text-3xl my-4">Ask with NextNova now!</p>
            <p class="lg:text-xl lg:w-3/4 tracking-wider font-karla">ask questions and solve your problems with Next Nova. Solve your problems and ask AI opinions.</p>
            <p class="lg:text-xl lg:mt-0 lg:w-3/4 font-karla text-white tracking-wider mt-4">NEXTNOVA's AI Try to find the best solution to each of your questions using existing data</p>
          </div>
          {message.map((item) => (
            <div className={item.isBot ? 'flex p-2 items-start my-4 bg-red' : 'flex items-end justify-end my-4 text-right lg:mr-2'}>
              <div class="bg-chat text-white rounded-lg p-3 max-w-xs w-fit">
                <Balancer>{item.text}</Balancer>
              </div>
            </div>
          ))}
          <div class="container flex bg-gray border min-w-full rounded-full border-gray mx-auto my-2 ">
            <input type="text" class="w-full bg-transparent px-4 py-2 text-white rounded-full outline-none placeholder-gray-800" placeholder="Ask Here..." value={input} onKeyDown={handelEnter} onChange={(e) => setInput(e.target.value)} />
            <div class="mt-2.5 mr-4">
              <button class="text-white focus:outline-none">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" onClick={handelSubmit}>
                  <path d="M22 22L15.5 15.5M15.5 15.5C17.9853 12.7314 17.9853 8.26863 15.5 5.5C13.0147 2.73137 8.98528 2.73137 6.5 5.5C4.01472 8.26863 4.01472 12.7314 6.5 15.5C8.98528 18.2686 13.0147 18.2686 15.5 15.5L22 22Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" h-screen pb-[1rem] bg-red-500"> </div> */}
      </div>
    </div>
  );
}

export default Home;

function Navbar() {
  return (
    <nav className="bg-bg text-white lg:hidden">
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

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
