<script lang="ts">
import ElementSectionComponent from "../components/ElementSectionComponent.vue"

export default {
  name: "Home",
  data() {
    return {
    }
  },
  props: ["data_row"],
  method: {
  },
  components: {
    ElementSectionComponent
  }
}
</script>

<template>
  <div class="container">
    
    <ElementSectionComponent :is_edit_home="false" :data_row="data_row"></ElementSectionComponent>
  </div>
</template>
