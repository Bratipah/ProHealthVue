import store from './index'
import { auth } from '../components/firebase/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
export default {
  async setPostRegister(context, { email, password, name }) {
    console.log('Registering...')

    const res = await createUserWithEmailAndPassword(auth, email, password, name)
    if (res) {
      await context.commit('setPostRegister', res.user)
    } else {
      throw new Error('Unable to Register User')
    }
  },

  async setGetLogin(context, { email, password }) {
    console.log('Login In...')

    const res = await signInWithEmailAndPassword(auth, email, password)
    if (res) {
      await context.commit('setGetLogin', res.user)
    } else {
      throw new Error('Unable to Log In')
    }
  },

  async setFetchUser() {
    console.log('Fetching Users...')
    const fetch = onAuthStateChanged(auth, (user) => {
      store.commit('setauthIsReady', true)
      store.commit('setFetchUser', user)
      fetch()
    })
  },

  async setSignOut(context) {
    console.log('Login Out...')
    await signOut(auth)
    context.commit('setSignOut', null)
  }
}
