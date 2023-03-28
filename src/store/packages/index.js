import axios from "axios";

import {apiURL} from "@/utils/consts";
import {
    SET_SEARCH_VALUE,
    SET_LIST_PACKAGES,
    SET_COUNT_PACKAGES_PAGES,
    CLEAR_SEARCH
} from "@/store/packages/mutatation-types";

export default {
    namespaced: true,

    state: {
        searchValue: "",
        packagesList: [],
        countPackagesPages: 0
    },

    mutations: {
        [SET_SEARCH_VALUE](state, value) {
            state.searchValue = value;
            },
        [SET_LIST_PACKAGES](state, packages) {
            state.packagesList = packages;
             },
        [SET_COUNT_PACKAGES_PAGES](state, count) {
            state.countPackagesPages = count;
           },
        [CLEAR_SEARCH](state) {
            state.packagesList = [];
            state.countPackagesPages = 0;
            state.searchValue = "";
        }
    },

    actions: {
        searchPackages({commit, state}, page = 0) {
            axios.post(apiURL,
                {
                    query: state.searchValue,
                    page,
                    hitsPerPage: 10,
                }
                ).then((response) => {
                commit(SET_LIST_PACKAGES, response.data.hits);
                commit(SET_COUNT_PACKAGES_PAGES, response.data.nbPages);
            }).catch((err) => {
                console.error(err);
            })
        },
    }
}