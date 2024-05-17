export default {
  async setPostRegister(state, payload) {
    console.log(payload)
    state.user = payload
    console.log('User has changed ', state.user)
  },

  async setGetLogin(state, payload) {
    console.log(payload)
    state.user = payload

    console.log('User has changed ', state.user)
  },

  async setFetchUser(state, payload) {
    console.log(payload)
    state.user = payload
    console.log('User has changed ', state.user)
  },

  async setauthIsReady(state, payload) {
    state.authIsReady = payload
    console.log('Auth Ready State : ', state.authIsReady)
  },

  async setSignOut(state, payload) {
    console.log(payload)
    state.user = payload
    console.log('User has changed ', state.user)
  }
}
