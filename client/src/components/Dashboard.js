import React from 'react';
import useAuth from '../useAuth.js';
import '../index.css';
import logo from '../images/logo.png';

const LOGOUT_URL = 'https://accounts.spotify.com/en/logout';

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <div class="bg-gray-900 h-screen">
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 pt-12">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="flex items-center">
            <img src={logo} class="h-16 mr-3" alt="" />
          </div>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <div class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-light">
                  Generate
                </div>
              </li>
              <li>
                <div class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-light">
                  History
                </div>
              </li>
              <li>
                <div class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-light">
                  Settings
                </div>
              </li>
              <li>
                <a href={LOGOUT_URL}>
                  <button class="font-montserrat btn text-white aspect-auto w-[140px] h-[50px] bg-pink-500 text-l">
                    Log Out
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="container p-4 m-16">
        <h1 class="mb-4 text-xl text-white font-bold">Your playlists</h1>
        <div class="card w-[300px] h-[400px] bg-gray-800 shadow-xl flex flex-col items-center justify-center">
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            {' '}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />{' '}
          </svg>
        </div>
      </section>
    </div>
  );
}
