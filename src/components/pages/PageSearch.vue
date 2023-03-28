<template>
  <div class="page-search mt-4">
    <v-container>
      <v-row>
        <v-col>
          <search-field />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <table-results />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import SearchField from "@/components/buisness-components/SearchField";
  import TableResults from "@/components/buisness-components/TableResults";

  export default {
    name: 'PageSearch',

    components: {
      TableResults,
      SearchField,
    },
  }
</script>
