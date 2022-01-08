import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data : [
            {id: "1", duration: 1, name: "Task A"},
            {id: "2", duration: 4, name: "Task B"},
            {id: "3", duration: 3, name: "Task C"},
            {id: "4", duration: 1, name: "Task D"},
            {id: "5", duration: 5, name: "Task AD", dependsOn: ["1", "4"]},
            {id: "6", duration: 5, name: "Task BC", dependsOn: ["2", "3"]}
        ]
    },
    mutations: {
        SET_DATA(state,data)
        {
            state.data = data
        }
    },
    actions: {
    },
    modules: {
    }
})
