<template>
  <div>
    <!-- <img src="~/assets/logo.svg" /> -->
    <h1>{{ title }} 👋</h1>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink
          :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
        >
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import meta from '@/assets/data/mock.json'

export default {
  async asyncData() {
    const mountains = await fetch('https://api.nuxtjs.dev/mountains').then(
      (res) => res.json()
    )
    return { mountains }
  },
  data() {
    return {
      title: 'Hello Nuxters!',
      metaData: meta.mockHome,
    }
  },
  head() {
    return this.$headUtil({
      title: this.metaData.title,
      description: this.metaData.description,
      urlPath: this.$route.fullPath,
      image: this.metaData.image,
    })
  },
}
</script>
