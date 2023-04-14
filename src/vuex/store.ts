import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        phones: []
    },
    actions: {
        GET_PHONES_FROM_API({ commit }) {
            return axios('http://localhost:3000/phones', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_PHONES_TO_VUEX', response.data)
                })
        }
    },
    mutations: {
        SET_PHONES_TO_VUEX: (state, phones) => {
            state.phones = phones
        }
    },
    getters:{
        PHONES(state){
            return state.phones
        }
    }
})
export default store;
