<template>
  <div class="bg-black h-screen flex">
    <div class="w-52 px-10 pt-2 text-white text-center">
      <p>CENTRE</p>
    </div>
    <div class="w-full">
      <ul class="flex flex-wrap">
        <li class="pr-4" v-for="content in sortedItemsByName" :key="content.id">
          <nuxt-link class="
            w-20
            font-monos
            font-bold
            line-clamp-1
            block
            hover:bg-white
            text-center
            text-white
            h-full
            border-4
            rounded-lg
            hover:animate-ping
            hover:border-white
            hover:text-black
          " :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config, error }) {
    try {
      const { data } = await axios.get(
        'https://centre.microcms.io/api/v1/centre',
        { headers: { 'X-API-KEY': $config.apiKey } }
      )
      return data
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  },
  computed: {
    // reverseContents() {
    //     return this.contents.slice().reverse();
    // },
    sortedItemsByName(){
        return this.contents.sort((a, b) => {
          let textA = a.title.toUpperCase();
          let textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });;
    },
  }
}
</script>