<script lang="ts">
import ElementSectionComponent from "../components/ElementSectionComponent.vue"
import EditSectionComponent from "../components/EditSectionComponent.vue"

export default {
  name: "EditHomepage",
  data() {
    return {
      status_dragging: -1
    }
  },
  props: ["data_row"],
  method: {
    updateStatusDrag(status: number) {
      this.status_dragging = status
    }
  },
  components: {
    ElementSectionComponent,
    EditSectionComponent
  }
}
</script>

<template>
  <div class="container-fluid">
    <EditSectionComponent :status_dragging="status_dragging" :update_status_drag="updateStatusDrag">
    </EditSectionComponent>

    <ElementSectionComponent :is_edit_home="true" :data_row="data_row" :status_dragging="status_dragging"
      :update_status_drag="updateStatusDrag"></ElementSectionComponent>
  </div>
</template>

