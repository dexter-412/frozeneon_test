<template>
  <v-app>
    <v-main>
      <page-search />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import PageSearch from './components/pages/PageSearch';
import AppFooter from "@/components/buisness-components/AppFooter";

export default {
  name: 'App',

  components: {
    AppFooter,
    PageSearch,
  },
};
</script>
