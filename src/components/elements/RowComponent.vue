<script lang="ts">
import ColumnComponent from './ColumnComponent.vue';

export default {
  name: "Row",
  data() {
    return {
    }
  },
  props: ["is_edit_home", "data_column", "add_row",
          "remove_row", "index_row", "get_number_row",
          "status_dragging", "update_status_drag"],
  computed: {
    hasBorder() {
      if (this.is_edit_home) {
        return " border rounded"
      }
      return ""
    },
    classRowHome() {
      if (this.is_edit_home) {
        return " p-2 mb-2 d-flex align-items-center justify-content-center"
      }
      return ""
    }
  },
  methods: {
    addColumn(idx: number) {
      this.data_column.splice(idx, 0, {data_item:[]})
      this.$store.dispatch("EditHomeState/autoAddData")
    },
    removeColumn(idx: number) {
      this.data_column.splice(idx, 1)
      this.$store.dispatch("EditHomeState/autoAddData")
    },
    getColNumber() {
      return this.data_column.length
    },
    getClassCol() {
      if (this.data_column.length == 4) {
        return " col-md-3"
      } else if (this.data_column.length == 3) {
        if (this.is_edit_home) {
          return " col-md-3"
        } else {
          return " col-md-4"
        }
      } else if (this.data_column.length == 2) {
        if (this.is_edit_home) {
          return " col-md-4"
        } else {
          return " col-md-6"
        }
      } else {
        if (this.is_edit_home) {
          return " col-md-10"
        } else {
          return " col-md-12"
        }
      }
    },
    getClassRemoveRow() {
      if (this.get_number_row() > 1) {
        return " col-10"
      }
      return " col-12"
    }
  },
  components: {
    ColumnComponent
  },
}
</script>

<template>
  <div :class="'row' + classRowHome + hasBorder">
    <div v-if="is_edit_home && getColNumber() < 4" class="col-auto align-midle mb-2">
      <button class="btn btn-light w-100" title="Add column" @click="addColumn(0)">
        <i class="bi bi-plus"></i>
      </button>
    </div>

    <ColumnComponent v-for="(item, i) in data_column" :is_edit_home="is_edit_home" :data_item="item.data_item"
      :get_col_number="getColNumber" :get_class_col="getClassCol" :add_column="addColumn" :index_col="i"
      :remove_column="removeColumn" :has_border="hasBorder" :status_dragging="status_dragging"
      :update_status_drag="update_status_drag">
    </ColumnComponent>
  </div>

  <div class="row mb-2">
    <div v-if="is_edit_home" :class="'align-midle' + getClassRemoveRow()">
      <button class="btn btn-light w-100 btn-sm " title="Add row" @click="add_row(index_row + 1)">
        <i class="bi bi-plus"></i>
      </button>
    </div>
    <div v-if="is_edit_home && get_number_row() > 1" class="col-2 align-midle">
      <button v-if="is_edit_home" class="btn btn-light btn-sm w-100 mb-1 text-danger" title="Remove Row"
        @click="remove_row(index_row)">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>