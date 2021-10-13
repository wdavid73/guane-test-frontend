<template>
  <div class="details">
    <h1>This is an details page {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Details",

  data() {
    return {
      character: {},
    };
  },
};
</script>

<style>
</style>
