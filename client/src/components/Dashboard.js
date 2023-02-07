import React from 'react';
import useAuth from '../useAuth.js';
import '../index.css';
import logo from '../images/logo.png';

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div>
      <nav class="flex justify-between items-center">
        <img src={logo} alt="" class="h-[55px] mb-4 aspect-auto" />
        <p class="text-white font-thin">Generate</p>
        <p class="text-white font-thin">History</p>
        <p class="text-white font-thin">Settings</p>
        <button class="font-montserrat btn text-white aspect-auto w-[140px] h-[60px] bg-pink-500 text-xl">
          Log Out
        </button>
      </nav>

      <section>
        <h1>Your playlists</h1>
      </section>
    </div>
  );
}
