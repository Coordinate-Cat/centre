<template>
  <main class="main">
    <h1 class="title text-center text-5xl">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <p class="category">{{ category && category.name }}</p>
    <div class="post m-24" v-html="body"></div>
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
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  }
}
</script>