<template>
  <div class="
    h-screen
    flex
    font-monos
    font-bold
  bg-black">
    <div class="
      w-72
      p-10
      pt-11
      text-center
      text-white">
      <h1>CENTRE</h1>
    </div>
    <div class="w-full my-10 mx-5">
      <ul class="flex flex-wrap">
        <li class="pr-4 pt-6" v-for="content in sortedItemsByName" :key="content.id">
          <nuxt-link class="
            w-24
            h-24
            p-1
            block
            border-4
            line-clamp-1
            rounded-sm
            hover:animate-ping
            hover:bg-white
            hover:border-white
            hover:text-black
            text-white" :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
      <details class="text-white pt-10">
        <summary class="
        w-56
        p-4
        border-4
        rounded-sm">kernelmode</summary>
        <details>
        <summary>Site Archive</summary>
        <a target="_blank" href="/archive/kernelmode-info/index.html">kernelmode.info</a>
        </details>
        <details>
        <summary>Complete KernelMode.info Download</summary>
        <a target="_blank" href="/archive/kernelmode-info.7z">KernelMode.info Download</a>
        </details>
      </details>
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