import { createStore } from "vuex"
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

const store = createStore({
    modules : {

    },
    state(){
        return{
            user: null,
            authIsReady: false
        }

    },
    actions: actions,
    mutations: mutations,
    getters: getters

})


export default store