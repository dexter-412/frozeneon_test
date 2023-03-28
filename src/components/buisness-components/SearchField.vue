<template>
  <v-text-field
    label="Enter name"
    solo
    dense
    v-model="searchValue"
    append-icon="mdi-close"
    @click:append="searchValue=''"
    hide-details
  />
</template>

<script>
import {
  mapActions,
  mapMutations
} from "vuex";

export default {
  name: "SearchField",

  data: () => ({
    searchValue: "",
    debounceTimer: null
  }),

  methods: {
    ...mapActions('packages', ['searchPackages']),
    ...mapMutations('packages', ['SET_SEARCH_VALUE', 'CLEAR_SEARCH']),
  },

  watch: {
    searchValue() {
      if(!this.searchValue) {
        this.CLEAR_SEARCH();
        return;
      }

      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.SET_SEARCH_VALUE(this.searchValue);
        this.searchPackages();
      }, 400)
    }
  },
}
</script>

<style scoped>

</style>