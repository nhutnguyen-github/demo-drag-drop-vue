<script lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import ImageComponent from './ImageComponent.vue';
import ParagraphComponent from './ParagraphComponent.vue';

export default {
  name: "Column",
  data() {
    return {
      class_add: " bg-white",
      class_drag: new Map(),
      index_drop: 0
    }
  },
  props: ["is_edit_home", "data_item", "get_col_number",
          "get_class_col", "add_column", "index_col",
          "remove_column", "has_border", "status_dragging",
          "update_status_drag"],
  computed: {
    classColHome() {
      if (this.is_edit_home) {
        return " col-auto p-2"
      }
      return "col-auto py-2"
    },
    styleMinHeitgh() {
      if (this.is_edit_home) {
        return "min-height: 100px;"
      }
      return ""
    },
  },
  methods: {
    removeItem(idx: number) {
      this.data_item.splice(idx, 1)
    },
    addItem(idx: number, ele: any){
      this.data_item.splice(idx, 0, ele)  
    },
    addBorder() {
      if (this.get_col_number() < 4) {
        return this.has_border
      }
      return ""
    },
    dragOverItem(evt: any, idx_item: number) {
      evt.preventDefault()

      this.class_add = " bg-success text-white"
      this.index_drop = idx_item      
    },
    dragLeaveItem(evt: any) {
      evt.preventDefault()

      this.class_add = " bg-white"
      this.index_drop = -1      
    },
    onDrop(evt: any) {
      this.class_add = " bg-white"
      let data_drag = evt.dataTransfer.getData('item_side');
      if(data_drag == undefined || data_drag.length == 0){
        return
      }

      let ele = JSON.parse(data_drag)   
      this.addItem(this.index_drop, ele) 
      this.update_status_drag(1)     
    },
    dragStartFunct(evt: any, idx: number, tp_ele: string) {
      this.class_drag.set(idx, "bg-dark")
      this.update_status_drag(0);

      var ele = {
        type_ele: tp_ele,
        data_ele: this.data_item[idx].data_ele
      }

      evt.dataTransfer.dropEffect = 'copy'
      evt.dataTransfer.effectAllowed = 'copy'
      evt.dataTransfer.setData('item_side', JSON.stringify(ele))
    },
    dragEndFunct(evt: any, idx: number){
      if (this.status_dragging == 1) {
        this.removeItem(idx)

        this.$store.dispatch("EditHomeState/autoAddData")
      }

      this.update_status_drag(-1);
      this.class_drag.set(idx, "")      
    },
  },
  components: {
    ButtonComponent, ImageComponent, ParagraphComponent
  }
}
</script>

<template>
  <div :class="classColHome + get_class_col() + addBorder()" :style="styleMinHeitgh">
    <button v-if="is_edit_home" class="btn btn-light btn-sm w-100 mb-1 text-danger" title="Remove Column"
      @click="remove_column(index_col)">
      <i class="bi bi-trash"></i>
    </button>

    <div v-if="is_edit_home" :class="'pb-4 mb-1' + class_add" 
      @drop="onDrop($event)"
      @dragleave="dragLeaveItem($event)" 
      @dragover="dragOverItem($event, 0)" title="Add item" >
    </div>

    <div v-for="(item, i) in data_item" :key="i" class="w-100">
      <keep-alive>
        <component :is="item.type_ele" :data_ele="item.data_ele" :is_edit_home="is_edit_home" :remove_item="removeItem"
          :index_item="i" :add_item="addItem" :drag_start_funct="dragStartFunct" :drag_end_funct="dragEndFunct"
          :class_drag="class_drag" :update_status_drag="update_status_drag">
        </component>
      </keep-alive>
    </div>
  </div>

  <div v-if="is_edit_home && get_col_number() < 4" class="col-auto align-midle">
    <button class="btn btn-light w-100 text-success" title="Add column" @click="add_column(index_col + 1)">
      <i class="bi bi-plus"></i>
    </button>
  </div>
</template>