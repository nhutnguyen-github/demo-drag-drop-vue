<script lang="ts">
import no_image_available from './assets/images/no_image_available.jpg'
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
    }
  },
  computed: {
    data_row(): any {
      return this.$store.getters["EditHomeState/getStep"]
    }
  },
  mounted() {
    this.$store.dispatch("EditHomeState/addData", [{//rows
      data_column: [{ //columns
        data_item: [{
          type_ele: "ButtonComponent",
          data_ele: {
            message: "123456789"
          }
        }, {
          type_ele: "ImageComponent",
          data_ele: {
            url: "https://picsum.photos/200/300"
          }
        }, {
          type_ele: "ParagraphComponent",
          data_ele: {
            content: "Content of paragraph is here."
          }
        }]
      },
      { //columns
        data_item: [{
          type_ele: "ButtonComponent",
          data_ele: {
            message: "Please change the alert message."
          }
        }, {
          type_ele: "ImageComponent",
          data_ele: {
            url: no_image_available
          }
        }, {
          type_ele: "ParagraphComponent",
          data_ele: {
            content: "Content of paragraph is here."
          }
        }]
      }]
    }])
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Demo drag-drop</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/edit-homepage" class="nav-link">Edit homepage</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView :data_row="data_row" />
</template>

