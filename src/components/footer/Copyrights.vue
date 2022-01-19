<template>
  <a
    :style="{ color: color, 'font-size': size + 'em' }"
    :href="copyrights.url"
    target="_blank"
  >{{copyrights.desc}}</a>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    color: String,
    size: Number
  },
  computed: {
    ...mapState(['copyrights'])
  }
}
</script>
