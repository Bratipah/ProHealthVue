<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/4 h-screen">
      <img src="../../assets/images/about.jpg" alt="" class="object-cover h-full w-full" />
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Create your account</h1>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form class="mt-6" action="#" @submit.prevent="Register">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              v-model="email"
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete="email"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Full Names</label>
            <input
              type="text"
              name=""
              id=""
              v-model="name"
              placeholder="Enter Full Names"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              type="password"
              name=""
              id=""
              v-model="password"
              placeholder="Enter Password"
              minlength="10"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name=""
              id=""
              v-model="password"
              placeholder="Confirm Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >Forgot Password?</a
            >
          </div>

          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Register
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full" />

        <button
          type="button"
          class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        >
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
              <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
              <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </svg>
            <span class="ml-4"> Log in with Google</span>
          </div>
        </button>

        <p class="mt-8">
          Already have an account?
          <RouterLink to="/login" class="text-blue-500 hover:text-blue-700 font-semibold"
            >Login to your account</RouterLink
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterComponent',
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()

    console.log(store.state.user)
    const router = useRouter()

    const Register = async () => {
      try {
        await store.dispatch('setPostRegister', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        router.push('/login')
      } catch (err) {
        err.value = err.message
      }
    }

    return { Register, name, email, password, error }
  }
}
</script>
