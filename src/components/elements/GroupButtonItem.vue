<script lang="ts">
export default {
  name: "GroupButtonItem",
  data() {
    return {
      class_add: " bg-white",
      index_drop: -1
    }
  },
  props: ["is_edit_home", "remove_item", "index_item", 
          "add_item", "class_drag", "update_status_drag"],
  methods: {
    dragOverItem(evt: any, idx_item: number) {
      evt.preventDefault()

      if (this.class_drag.get(this.index_item) == "bg-dark") {
        return
      }

      this.class_add = " bg-success text-white"
      this.index_drop = this.index_item + 1
    },
    dragLeaveItem(evt: any) {
      evt.preventDefault()

      this.class_add = " bg-white"
      this.index_drop = -1
    },
    onDrop(evt: any) {
      if (this.class_drag.get(this.index_item) == "bg-dark") {
        return
      }

      this.class_add = " bg-white"
      let item_side = evt.dataTransfer.getData('item_side');
      if (item_side == undefined || item_side.length == 0) {
        return
      }

      let ele = JSON.parse(item_side);
      this.add_item(this.index_drop, ele)
      this.update_status_drag(1)
    }
  }
}
</script>

<template>
  <div class="row ">
    <div class="col-12">
      <button v-if="is_edit_home" class="btn btn-light btn-sm w-100 text-danger" title="Remove Item"
        @click="remove_item(index_item)">
        <i class="bi bi-x-circle"></i>
      </button>
    </div>
  </div>

  <div class="row">
    <div v-if="is_edit_home" class="col-12 text-center" title="Add item">
      <div :class="'pb-4 my-1' + class_add" @drop="onDrop($event)"
        @dragleave="dragLeaveItem($event)" @dragover="dragOverItem($event, 0)">
      </div>
    </div>
  </div>
</template>