<script lang="ts">
import RowComponent from './elements/RowComponent.vue';

export default {
  name: "ElementSectionComponent",
  data() {
    return {
    }
  },
  props: ["is_edit_home", "data_row", "status_dragging", 
          "update_status_drag"],
  computed: {
  },
  methods: {
    addRow(idx: number) {
      this.data_row.splice(idx, 0, { data_column: [{ data_item: [] }] })
      this.$store.dispatch("EditHomeState/autoAddData")
    },
    removeRow(idx: number) {
      if (this.data_row.length > 1) {
        this.data_row.splice(idx, 1)
        this.$store.dispatch("EditHomeState/autoAddData")
      }
    },
    getNumberRow() {
      return this.data_row.length
    },    
  },
  components: {
    RowComponent
  }
}
</script>

<template>
  <div v-if="is_edit_home" class="container-fluid pt-3 m-0 justify-content-start w-75">
    <div class="row">
      <div v-if="is_edit_home" class="col-12 align-midle mb-2">
        <button class="btn btn-light w-100 btn-sm " title="Add row" @click="addRow(0)">
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>

    <RowComponent v-for="(item, i) in data_row" :key="i" :data_column="item.data_column" :is_edit_home="is_edit_home"
      :add_row="addRow" :remove_row="removeRow" :index_row="i" :get_number_row="getNumberRow"
      :status_dragging="status_dragging" :update_status_drag="update_status_drag">
    </RowComponent>
  </div>
  <div v-else>
    <RowComponent v-for="(item, i) in data_row" :key="i" :data_column="item.data_column" :is_edit_home="is_edit_home">
    </RowComponent>
  </div>
</template>