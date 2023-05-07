<script lang="ts">
import no_image_available from '@/assets/images/no_image_available.jpg'

export default {
  name: "EditSectionComponent",
  props:["status_dragging", "update_status_drag"],
  methods: {
    startDrag(evt: any, type: string) {
      var ele = {};
      if (type == 'ParagraphComponent') {
        ele = {
          type_ele: "ParagraphComponent",
          data_ele: {
            content: "Content of paragraph is here."
          }
        }
      } else if (type == 'ButtonComponent') {
        ele = {
          type_ele: "ButtonComponent",
          data_ele: {
            message: "Please change the alert message."
          }
        }
      } else if (type == 'ImageComponent') {
        ele = {
          type_ele: "ImageComponent",
          data_ele: {
            url: no_image_available
          }
        }
      } else {
        return
      }

      evt.dataTransfer.dropEffect = 'copy'
      evt.dataTransfer.effectAllowed = 'copy'
      evt.dataTransfer.setData('item_side', JSON.stringify(ele))
      this.update_status_drag(0);
    },
    dragEndItem(){
      console.log(this.status_dragging)
      if(this.status_dragging == 1) {
        this.$store.dispatch("EditHomeState/autoAddData")
      }

      this.update_status_drag(-1);
    },
    takeUndo() {
      this.$store.dispatch("EditHomeState/decreaseIdx")
      this.$store.dispatch("EditHomeState/changeStep")
      console.log("takeUndo")
    },
    takeRedo() {
      this.$store.dispatch("EditHomeState/increaseIdx")
      this.$store.dispatch("EditHomeState/changeStep")
      console.log("takeRedo")
    }
  }
}
</script>

<template>
  <aside id="sidebar" class="container m-0 p-3 w-25 h-100 position-fixed end-0 top-0 text-light bg-dark">
    <div class="row just justify-content-center mb-3">
      <div class="col-md-4">
        <button class="btn btn-light w-100" @click="takeUndo()" title="Undo">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-light w-100" @click="takeRedo()">
          <i class="bi bi-arrow-clockwise"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-light w-100" draggable="true"
          @dragstart="startDrag($event, 'ParagraphComponent')">Paragraph</button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-light w-100" draggable="true"
          @dragstart="startDrag($event, 'ButtonComponent')">Button</button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-light w-100" draggable="true"
          @dragstart="startDrag($event, 'ImageComponent')">Image</button>
      </div>
    </div>
</aside></template>