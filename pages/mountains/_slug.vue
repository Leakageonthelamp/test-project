<template>
  <div>
    <SocialHead
      :title="metaData.title"
      :description="metaData.description"
      :image="metaData.image"
    />
    <h1>{{ mountain.title }}</h1>
    <section>
      <img :src="mountain.image" :alt="mountain.title" />
      <p>{{ mountain.description }}</p>
    </section>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import meta from '@/assets/data/mock.json'

export default {
  async asyncData({ params }) {
    const mountain = await fetch(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    ).then((res) => res.json())
    return { mountain }
  },
  data: () => ({
    metaData: meta.mockData,
  }),
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.$route.fullPath,
        },
      ],
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>
