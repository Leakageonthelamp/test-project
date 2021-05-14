<template>
  <div>
    {{ name }}
    <div>{{ metaData.title }}</div>
    <div>{{ metaData.description }}</div>
  </div>
</template>

<script>
import meta from '@/assets/data/mock.json'

export default {
  data: () => ({
    name: '',
    metaData: meta.mockData2,
  }),
  head() {
    return {
      title: this.metaData.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.metaData.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaData.description,
        },
        { hid: 'og:image', property: 'og:image', content: this.metaData.image },
      ],
    }
  },
  //   head() {
  //     return this.$headUtil({
  //       title: this.metaData.title,
  //       description: this.metaData.description,
  //       urlPath: this.$route.fullPath,
  //       image: this.metaData.image,
  //     })
  //   },
  mounted() {
    this.name = this.$route.params.services
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
