<script lang="ts">
export default {
  data(){
    return {
      datadata: 0
    }
  },
  props:["prop_data"],
  computed:{
    computed_data() {
      console.log("computed_data")
    }
  },
  methods:{
    methods_data(){
      console.log("methods_data")
    }
  }
}
</script>

<template>

</template>