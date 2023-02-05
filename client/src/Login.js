import React from 'react';
import './index.css';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login() {
  return (
    <div class="flex flex-col justify-center items-center w-auto h-70 p-4 rounded-2xl bg-black text-white">
      <p class="font-thin">Find your beat, stay on track</p>
      <h1 class="font-bold pt-4 pb-4">Connect your Spotify account</h1>
      <button class="btn text-white w-50 bg-pink-500">Connect</button>
      <p class="font-thin pt-4">OR</p>
      <p class="font-light pt-4">Continue as guest</p>
    </div>
  );
}
