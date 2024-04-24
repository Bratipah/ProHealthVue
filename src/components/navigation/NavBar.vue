<template>
  
  <section class="bg-sky-200 ">
  <nav
    class="flex items-center justify-between flex-wrap bg-sky-200  py-4 lg:px-12 shadow   "
  >
    <div
      class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0"
    >
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
        <a class="text-3xl font-bold leading-none" href="#">
          <svg 
          class="h-8  mr-1 fill-blue-900"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"> 
            <path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z"/>
          </svg>
        </a>
        <span class="text-md font-semibold text-blue-900 text-xl tracking-tight">ProHealth</span>
      </div>
      <div class="block lg:hidden">
        <button
          id="nav"
          class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Home</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>

    <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
      <div class="text-md font-normal text-black-200 lg:flex-grow">
        <a
          href="#values"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          About
        </a>
        <a
          href="#departments"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Departments
        </a>
        <a
          href="#awards"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Awards
        </a>
        <a
          href="#reviews"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
         Reviews
        </a>
        <a
          href="#appointment"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Find Doctor
        </a>
        <a
          href="#cta"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Call To Action
        </a>
        <a
          href="#blog"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Blog
        </a>
        <a
          href="#faq"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
         FAQs
        </a>
        <a
          href="#partners"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Partners
        </a>
        <a
          href="#footer"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-900 px-4 hover:font-semibold"
        >
          Contact
        </a>
      </div>
<!-- Navbar end icons -->
      <div class="hidden xl:flex items-center space-x-6 items-center">
        <!-- Sign In / Register      -->
        <div v-if="user" class="flex">
          <p class="text-blue-900 font-semibold mt-2"> Welcome,  {{user.name}}</p>
          <button  @click.prevent="signOut" class=" ml-5 btn btn-primary items-center hover:text-blue-900 hover:text-bold bg-blue-700 hover:bg-white px-4 py-1.5 rounded-lg text-white text-center">Log Out</button>

        </div>
        <div  v-if="!user">
          <router-link  class="flex items-center hover:text-blue-900  bg-blue-900 hover:bg-white px-4 py-2 rounded-lg text-white text-center" to="/login"> Sign In </router-link>
        </div>
       
        <!-- <router-view></router-view> -->
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
       
        <span class="flex absolute -mt-5 ml-4">
          <span
            class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"> </span>
        </span>
      </a>
      <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:text-gray-200" 
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
     
      </a>
    </div>
  </nav>
  <Homepage />
</section>
</template>


<script>
import { useStore} from "vuex";
// import { useRouter } from "vue-router";
import {computed} from "vue";


export default {
  name: "DashboardComponent",

  setup() {

  const store = useStore()
  // const router = useRouter()
    
  const signOut = async () => {
        await store.dispatch('logOut')
        // router.push('/')
  }
    return {
      signOut,     
      user: computed(() => store.state.user),
      authIsReady: computed(()=> store.state.authIsReady)
    }

 

 

 }



};
</script>
