<script lang="ts">
import GroupButtonItem from './GroupButtonItem.vue'

export default {
  name: "Image",
  data() {
    return {
      is_edit_url: false,
    }
  },
  props: ["data_ele", "is_edit_home", "remove_item",
          "index_item", "add_item", "drag_start_funct",
          "drag_end_funct", "class_drag", "update_status_drag"],
  computed: {
  },
  methods: {
    saveUrl() {
      this.is_edit_url = false
    },
    showEditUrl() {
      if (!this.is_edit_home) {
        return
      }
      this.is_edit_url = true
    },
  },
  components: {
    GroupButtonItem
  }
}
</script>

<template>
  <div :draggable="is_edit_home" @dragstart="drag_start_funct($event, index_item, 'ImageComponent')"
    @dragend="drag_end_funct($event, index_item)" :class="class_drag.get(index_item)">
    <div class="w-100 mb-2 align-midle text-center" draggable="false">
      <img @dblclick="showEditUrl" :src="data_ele.url" height="200" />
    </div>

    <div v-if="is_edit_url && is_edit_home" class="w-100 mb-1">
      <input type="text" v-model="data_ele.url" class="form-input w-100 mb-1" placeholder="URL image" />
      <button @click="saveUrl" class="btn btn-primary w-100">Save url</button>
    </div>

    <GroupButtonItem :is_edit_home="is_edit_home" :remove_item="remove_item" :index_item="index_item" :add_item="add_item"
      :class_drag="class_drag" :update_status_drag="update_status_drag">
    </GroupButtonItem>
  </div>
</template>