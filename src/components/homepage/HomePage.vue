import NavBar from '../navigation/NavBar.vue';
<template class="bg-cyan-200">
  <!-- Landing Page & Navbar -->
  <section class="bg-sky-200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <NavBar />
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-7xl text-blue-900"
        >
          Your Partner in Health & wellness
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl font-normal"
        >
          We are committed to providing you with the best medical and healthcare services to help
          you live healthier and happier..
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-black-200 hover:fill-white focus:ring-transparent focus:ring-blue-300"
        >
          <svg
            class="w-10 h-10 p-2 -mr-1 rounded-full bg-white fill-blue-500 hover:fill-white hover:bg-blue-500"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="indent-3 hover:transition duartion-700 ease-in-out"> See How we Work</span>
        </a>
      </div>
      <div class="lg:mt-12 lg:col-span-5 lg:flex">
        <img class="-mt-20" src="../../assets/images/2doctors-removebg-preview.png" alt="doctors" />
      </div>
    </div>
  </section>
  <!-- Landing Page & Navbar -->

  <!-- DateSection Book Now 36&40 scales-->
  <div class="bg-white mx-10 -mt-37 mb-20">
    <div class="flex md:flex-row rounded-md shadow-xl p-5">
      <div class="md:w-4/12">
        <a href="">
          <svg
            class="h-10 w-12 justify-center fill-white rounded-full bg-blue-500 p-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            padding="5"
          >
            <path
              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
            />
          </svg>
          <div class="relative">
            <p class="ml-16 truncate text-sm font-medium text-gray-900">Date</p>
            <p class="ml-16 truncate text-sm font-medium text-gray-800">August 23, 2023</p>
          </div>
        </a>
      </div>
      <div class="md:w-4/12 inline-flex relative">
        <svg
          class="h-11 w-11 fill-white rounded-full bg-blue-500 p-3 justify-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
          />
        </svg>

        <div class="relative">
          <p class="ml-4 truncate text-sm font-medium text-gray-900">Specialization</p>
          <input type="checkbox" id="sortbox" class="hidden absolute" />
          <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
            <span class="text-sm indent-3">Cardiology</span>
            <svg
              class="h-6 w-4 fill-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                stroke-width="2"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
          </label>

          <div
            id="sortboxmenu"
            class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
          >
            <ul class="block text-right text-gray-900">
              <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">labaratory</a></li>
              <li><a href="#" class="block px-3 py-2 hover:bg-gray-200">Physiotheraphy</a></li>
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">Gnaecology</a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 hover:bg-gray-200">ENT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="md:w-4/12 inline-flex">
        <svg
          class="h-9 w-9 fill-white rounded-full bg-blue-500 p-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <div class="relative">
          <h3 class="ml-3 truncate text-sm font-medium text-gray-900">Location</h3>
          <p class="ml-3 truncate text-sm font-medium text-gray-800">New York, US</p>
        </div>
      </div>

      <div class="md:w-2/12">
        <button
          class="rounded-lg p-2 outline outline-offset-2 outline-2 outline-cyan-500 transition duration-0 hover:duration-700 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
  <!-- DateSection Book Now -->

  <section class="container-lg bg-gradient-to-b from-white to-cyan-200">
    <!-- //About Us Values -->
    <h2 class="text-center justify-center text-5xl mb-10 mt-5 font-bold text-sky-950">
      Our Values
    </h2>
    <div class="px-6 flex flex-wrap">
      <div class="lg:pt-12 pt-4 w-full md:w-4/12 px-10 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
                />
              </svg>
            </div>
            <h6 class="text-xl font-semibold">Compassion</h6>
            <p class="mt-12 mb-14 text-blueGray-500">
              Divide details about your product or agency work into parts. A paragraph describing a
              feature will be enough.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-4/12 px-10 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-fuchsia-500"
            >
              <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                />
              </svg>
            </div>
            <h6 class="text-xl font-semibold rounded-lg">Excellence</h6>
            <p class="mt-12 mb-14 text-blueGray-500">
              Keep you user engaged by providing meaningful information. Remember that by this time,
              the user is curious.
            </p>
          </div>
        </div>
      </div>
      <div class="pt-6 w-full md:w-4/12 px-10 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"
                />
              </svg>
            </div>
            <h6 class="text-xl font-semibold">Integrity</h6>
            <p class="mt-12 mb-14 text-blueGray-500">
              Write a few lines about each one. A paragraph describing a feature will be enough.
              Keep you user engaged!
            </p>
          </div>
        </div>
      </div>
      <div class="flex m-10 px-8 pt-4">
        <div class="pt-5 w-full md:w-6/12 px-12 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 border shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-rose-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"
                  />
                </svg>
              </div>
              <h6 class="text-xl font-semibold">Integrity</h6>
              <p class="mt-12 mb-14 text-blueGray-500">
                Write a few lines about each one. A paragraph describing a feature will be enough.
                Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
        <div class="pt-5 w-full md:w-6/12 px-12 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg border-white"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"
                  />
                </svg>
              </div>
              <h6 class="text-xl font-semibold">Integrity</h6>
              <p class="mt-12 mb-14 text-blueGray-500">
                Write a few lines about each one. A paragraph describing a feature will be enough.
                Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- //About Us Values -->

    <!-- About Us Next To section -->
    <div class="flex m-20">
      <div class="md:w-6/12">
        <img
          class="rounded-bl-3xl"
          src="../../assets/images/about.jpg"
          alt=""
        
        />
        <img class="h-20 w-30 rounded-full bg-none -mt-10 place-content-end place-items-end" src="../../assets/images/tuxpi.com.1712064217.jpg" alt="">
      </div>
      <div class="md:w-6/12 ml-10">
        <h2 class="text-5xl mb-5 mt-5 font-bold text-sky-950">About Us</h2>
        <h2 class="uppercase text-xl mb-5 font-bold text-sky-500">Pro health</h2>
        <div class="flex items-center flex-shrink-0 text-gray-800">
          <a class="text-3xl font-bold leading-none" href="#">
            <svg
              class="h-6 mr-3 fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </a>
          <span class="text-md font-semibold text-xl text-center text-sky-950"
            >ProHealth is a team of experienced medical professionals
          </span>
        </div>
        <p class="-mr-5 text-md text-xl text-center">
          Dedicated to providing health and quality services
        </p>
      </div>
    </div>
    <!-- About Us Next To section -->

    <!-- Deparments section -->
    <div class="container rounded-3xl bg-sky-300 p-20 mx-10 mb-5">
      <h2 class="text-center justify-center text-5xl mb-10 mt-5 font-bold text-white">
        Departments
      </h2>
    </div>
    <div class="-mt-10 flex">
      <div class="md:w-2/12 border shadow-white text-white rounded-lg  justify-content-center bg-white hover:bg-sky-950   px-5 ml-12">
        <svg class="fill-sky-950 hover:fill-white h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
         <path d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"/>
        </svg>
        <h2 class="text-sky-950">Emergency Department</h2>
      
      </div>
      <div class="md:w-2/12border bg-white shadow-white text-white px-5 ml-5 rounded-lg ">
        <svg class="fill-sky-950 h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
         <path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"/>
        </svg>
        <h2 class="text-sky-950">Pediatric Department</h2>
      </div>
      <div class="md:w-2/12 border bg-white shadow-white text-white px-5 ml-5 rounded-lg ">
        <svg class="fill-sky-950 h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
         <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 352V128h6.9c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h0zM58.2 182.3c19.9-33.1 55.3-53.5 93.8-54.3V384h0v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2z"/>
        </svg>
        <h2 class="text-sky-950">Obgyn Department</h2>
      </div>
      <div class="md:w-2/12 border bg-white shadow-white text-white px-5 ml-5 rounded-lg ">
        <svg class="fill-sky-950 h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M341.1 140.6c-2 3.9-1.6 8.6 1.2 12c7 8.5 12.9 18.1 17.2 28.4L408 160.2V120c0-13.3 10.7-24 24-24s24 10.7 24 24v19.6l22.5-9.7c12.2-5.2 26.3 .4 31.5 12.6s-.4 26.3-12.6 31.5l-56 24-73.6 31.5c-.5 9.5-2.1 18.6-4.8 27.3c-1.2 3.8-.1 8 2.8 10.8C396.7 296.9 416 338.2 416 384c0 44.7-18.3 85-47.8 114.1c-9.9 9.7-23.7 13.9-37.5 13.9H181.3c-13.9 0-27.7-4.2-37.5-13.9C114.3 469 96 428.7 96 384c0-45.8 19.3-87.1 50.1-116.3c2.9-2.8 4-6.9 2.8-10.8c-2.7-8.7-4.3-17.9-4.8-27.3L70.5 198.1l-56-24C2.4 168.8-3.3 154.7 1.9 142.5s19.3-17.8 31.5-12.6L56 139.6V120c0-13.3 10.7-24 24-24s24 10.7 24 24v40.2L152.6 181c4.3-10.3 10.1-19.9 17.2-28.4c2.8-3.4 3.3-8.1 1.2-12C164 127.2 160 112.1 160 96c0-53 43-96 96-96s96 43 96 96c0 16.1-4 31.2-10.9 44.6zM224 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM288 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48 24v3.2c0 3.2 .8 6.3 2.3 9l9 16.9c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l9-16.9c1.5-2.8 2.3-5.9 2.3-9V120c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/>
        </svg>
        <h2 class="text-sky-950">Gynaecologist Department</h2>
      </div>
      <div class="md:w-2/12 border bg-white shadow-white text-white px-5 ml-5 rounded-lg ">
        <svg class="fill-sky-950 h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"/>
        </svg>
        <h2 class="text-sky-950">Cardiology Department</h2>
      </div>
      <div class="md:w-2/12 p-10 border bg-white shadow-white text-white px-5 ml-2 mr-35 rounded-lg  ">
        <svg class="fill-sky-950 h-10  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/>
        </svg>
        <h2 class="text-sky-950">Neurology Department</h2>
      </div>
    </div>
  </section>
</template>
