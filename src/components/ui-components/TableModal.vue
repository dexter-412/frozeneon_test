<template functional>
<v-card>
  <v-card-title class="text-h5 mb-6 justify-center">Package details</v-card-title>
  <v-card-text>
    <v-row>
      <v-col>Name</v-col>
      <v-col>{{props.item.name}}</v-col>
    </v-row>
    <v-row>
      <v-col>Description</v-col>
      <v-col>{{props.item.description}}</v-col>
    </v-row>
    <v-row>
      <v-col>Created</v-col>
      <v-col>{{new Date(props.item.created)}}</v-col>
    </v-row>
    <v-row>
      <v-col>Modified</v-col>
      <v-col>{{new Date(props.item.modified)}}</v-col>
    </v-row>
    <v-row>
      <v-col>Download last month</v-col>
      <v-col>{{props.item.downloadsLast30Days}}</v-col>
    </v-row>
    <v-row v-if="props.item.homepage">
      <v-col>Homepage</v-col>
      <v-col>
        <a
          :href="props.item.homepage"
          target="_blank"
      >{{props.item.homepage}}</a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Keywords</v-col>
      <v-col>
        <v-chip
            class="mr-1"
            v-for="(item, index) in props.item.keywords"
            :key="index"
        >
          {{item}}
        </v-chip>
      </v-col>
    </v-row>
    <p
      v-if="props.item.readme"
      v-html="props.item.readme"
      class="mt-8"
    />
  </v-card-text>
</v-card>
</template>

<script>
export default {
name: "TableModal"
}
</script>

<style scoped>

</style>