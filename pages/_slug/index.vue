<template>
  <main class="main h-full bg-black text-white">
    <h1 class="title mx-36">{{ title }}</h1>
    <p class="publishedAt mx-36 text-right font-semibold">{{ publishedAt }}</p>
    <p class="category mx-36 text-right font-semibold">Category : {{ category && category.name }}</p>
    <div class="post mx-36 font-bold" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params, $config, error }) {
    try {
      const { data } = await axios.get(
        `https://centre.microcms.io/api/v1/centre/${params.slug}`,
        { headers: { 'X-API-KEY': $config.apiKey } }
      )
      return data
    } catch (err) {
      error ({
        statusCode: err.response.data.status,
        message: err.response.data.message,
      });
    }
  }
}
</script>