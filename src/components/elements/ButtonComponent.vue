<script lang="ts">
import GroupButtonItem from './GroupButtonItem.vue'

export default {
  name: "Button",
  data() {
    return {
      is_edit_msg: false,
    }
  },
  props: ["data_ele", "is_edit_home", "remove_item",
          "index_item", "add_item", "drag_start_funct",
          "drag_end_funct", "class_drag", "update_status_drag"],
  methods: {
    clickButton() {
      alert(this.data_ele.message)
    },
    saveMessage() {
      this.is_edit_msg = false
    },
    showEditMsg() {
      if (!this.is_edit_home) {
        return
      }
      this.is_edit_msg = true
    },
    doDragStart(evt:any, idx:number, tp_ele:string){
      this.drag_start_funct(evt, idx, tp_ele)
    }
  },
  components: {
    GroupButtonItem
  }
}
</script>

<template>
  <div :draggable="is_edit_home" @dragstart="drag_start_funct($event, index_item, 'ButtonComponent')"
    @dragend="drag_end_funct($event, index_item)" :class="class_drag.get(index_item)">
    <button class="btn btn-primary w-100 mb-2" @click="clickButton" @contextmenu.prevent="showEditMsg">Click here
    </button>

    <div v-if="is_edit_msg && is_edit_home" class="w-100 mb-1">
      <input type="text" v-model="data_ele.message" class="form-input w-100 mb-1" placeholder="Alert message" />
      <button @click="saveMessage" class="btn btn-primary w-100">Save message</button>
    </div>

    <GroupButtonItem :is_edit_home="is_edit_home" :remove_item="remove_item" :index_item="index_item" :add_item="add_item"
      :class_drag="class_drag" :update_status_drag="update_status_drag">
    </GroupButtonItem>
  </div>
</template>