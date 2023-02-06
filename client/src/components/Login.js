import React from 'react';
import '../index.css';
import logo from '../images/logo.png';
import { Container } from 'react-bootstrap';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=f1e7c3672ff745879a343af3876bc441&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login() {
  return (
    <section class="bg-[#13182A] min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      <img src={logo} alt="" class="h-[55px] mb-4 aspect-auto" />

      {/* login container */}
      <div class="bg-[#030718] bg-opacity-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center justify-center">
        {/* login elements */}
        <div class="px-8 md:px-16 text-center">
          <p class="font-montserrat font-thin pt-4 text-base">
            Find your beat, stay on track
          </p>
          <h1 class="font-montserrat font-extrabold pt-4 pb-4 text-4xl">
            Connect your Spotify account
          </h1>
          <a href={AUTH_URL}>
            <button class="font-montserrat btn text-white aspect-auto w-[160px] h-[60px] bg-pink-500 text-xl">
              Connect
            </button>
          </a>
          <p class="font-montserrat font-thin pt-4">or</p>
          <a href="https://google.com">
            <p class="font-light pt-4 pb-4">Continue as guest</p>
          </a>
        </div>
      </div>
    </section>
  );
}
