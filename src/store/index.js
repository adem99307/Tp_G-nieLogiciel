import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data : [
            {
                "id": 2,
                "name_tache": "F",
                "time_tache": 3,
                "predecesseur": "B"
            },
            {
                "id": 3,
                "name_tache": "C",
                "time_tache": 4,
                "predecesseur": "A;H;B"
            },
            {
                "id": 4,
                "name_tache": "G",
                "time_tache": 3,
                "predecesseur": "R"
            },
            {
                "id": 5,
                "name_tache": "E",
                "time_tache": 3,
                "predecesseur": "G;S;R"
            },
            {
                "id": 6,
                "name_tache": "R",
                "time_tache": 3,
                "predecesseur": ""
            },
            {
                "id": 7,
                "name_tache": "S",
                "time_tache": 2,
                "predecesseur": "D;F"
            },
            {
                "id": 8,
                "name_tache": "H",
                "time_tache": 4,
                "predecesseur": "B"
            },
            {
                "id": 9,
                "name_tache": "A",
                "time_tache": 5,
                "predecesseur": "D;F;R"
            },
            {
                "id": 10,
                "name_tache": "B",
                "time_tache": 4,
                "predecesseur": ""
            }
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
