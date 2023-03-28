<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="packagesList"
        hide-default-footer
        class="elevation-1 row-pointer mb-6"
        @click:row="openModal($event)"

    >
      <template v-slot:item.owner.name="{ item }">
        <v-img
            :src="item.owner.avatar"
            :width="20"
            cover
        />
        <span>{{item.owner.name}}</span>
      </template>
      <template v-slot:item.name="{ item }">
        <b>{{item.name}}</b>
      </template>
    </v-data-table>
    <v-pagination
        v-model="page"
        :length="countPackagesPages"
        @input="searchPackages(page - 1)"
        v-if="countPackagesPages"
    />
    <v-dialog max-width="1000" v-model="showDialog">
      <table-modal :item="selectedItem"/>
    </v-dialog>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";
import TableModal from "@/components/ui-components/TableModal";

export default {
  name: "TableResults",

  components: {TableModal},

  computed: {
    ...mapState('packages', ['packagesList']),
    ...mapState('packages', ['countPackagesPages']),
  },

  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Description', value: 'description', sortable: false },
      { text: 'Owner', value: 'owner.name', sortable: false },
      { text: 'DowPM', value: 'downloadsLast30Days', sortable: false },
    ],
    page: 1,
    showDialog: false,
    selectedItem: {}
  }),

  methods: {
    ...mapActions('packages', ['searchPackages']),
    openModal(event) {
      this.showDialog = true;
      this.selectedItem = event;
    },
  },

  watch: {
    packagesList: {
      handler(newList) {
        if (!newList.length)
        this.page = 1;
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.row-pointer {
  tbody {
    tr {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>