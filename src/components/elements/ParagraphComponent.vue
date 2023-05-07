<script lang="ts">
import GroupButtonItem from './GroupButtonItem.vue'

export default {
  name: "Paragraph",
  data() {
    return {
      is_edit_content: false,
    }
  },
  props: ["data_ele", "is_edit_home", "remove_item",
          "index_item", "add_item", "drag_start_funct",
          "drag_end_funct", "class_drag", "update_status_drag"],
  methods: {
    saveContent() {
      this.is_edit_content = false
    },
    showEditContent() {
      if (!this.is_edit_home) {
        return
      }
      this.is_edit_content = true
    },
  },
  components: {
    GroupButtonItem
  }
}
</script>

<template>
  <div :draggable="is_edit_home" @dragstart="drag_start_funct($event, index_item, 'ParagraphComponent')"
    @dragend="drag_end_funct($event, index_item)" :class="class_drag.get(index_item)">
    <p v-if="!is_edit_content" @dblclick="showEditContent" class="mb-2">{{ data_ele.content }}</p>

    <div v-if="is_edit_content && is_edit_home" class="w-100 mb-1">
      <textarea rows="3" v-model="data_ele.content" class="form-input w-100" placeholder="Content paragraph"></textarea>
      <button @click="saveContent" class="btn btn-primary w-100">Save content</button>
    </div>

    <GroupButtonItem :is_edit_home="is_edit_home" :remove_item="remove_item" :index_item="index_item" :add_item="add_item"
      :class_drag="class_drag" :update_status_drag="update_status_drag">
    </GroupButtonItem>
  </div>
</template>