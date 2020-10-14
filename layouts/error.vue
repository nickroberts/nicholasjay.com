<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="text-center">Page not found</h1>
    <h1 v-else class="text-center">An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
