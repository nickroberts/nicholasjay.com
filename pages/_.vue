<template>
  <nuxt-content :document="page" />
</template>

<script>
const DEAFULT_PAGE_TITLE = 'Nicholas Jay'

export default {
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()

    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      page,
    }
  },
  head() {
    const title =
      this.page.title && this.page.title !== 'Home'
        ? `${DEAFULT_PAGE_TITLE} | ${this.page.title}`
        : DEAFULT_PAGE_TITLE
    return {
      title,
    }
  },
}
</script>
