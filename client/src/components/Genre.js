import React from 'react';
import '../index.css';
import logo from '../images/logo.png';

export default function Genre() {
  return (
    <section class="bg-pink-500 min-h-screen flex flex-col bg-cover bg-center pt-40">
      <div class="space-y-[20px]" id="title">
        <h1 class="font-Gotham font-extrabold text-white p-4 text-8xl mx-32">
          What music genre are you feeling?
        </h1>
      </div>

      <div class="flex space-x-8 justify-between mx-40 pt-20" id="options">
        <button class="font-montserrat btn text-[#030718] aspect-auto w-[190px] h-[77px] bg-white text-xl hover:bg-[#030718] hover:text-white">
          RANDOM
        </button>
        <button class="font-montserrat btn text-[#030718] aspect-auto w-[190px] h-[77px] bg-white text-xl hover:bg-[#030718] hover:text-white">
          SAD
        </button>
        <button class="font-montserrat btn text-[#030718] aspect-auto w-[190px] h-[77px] bg-white text-xl hover:bg-[#030718] hover:text-white">
          CHILL
        </button>
        <button class="font-montserrat btn text-[#030718] aspect-auto w-[190px] h-[77px] bg-white text-xl hover:bg-[#030718] hover:text-white">
          PUMPED
        </button>
        <button class="font-montserrat btn text-[#030718] aspect-auto w-[190px] h-[77px] bg-white text-xl hover:bg-[#030718] hover:text-white">
          VILLAIN
        </button>
      </div>

      <div>
        <img
          src={logo}
          alt=""
          class=" absolute bottom-0 right-0 pr-40 h-[96px]"
        />
      </div>
    </section>
  );
}
