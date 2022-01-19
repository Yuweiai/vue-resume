<template>
  <div class="social" :style="{ 'font-size': size + 'em' }">
    <template v-for="platform in social" v-bind:key="platform.name + platform.url">
      <a
        :style="{ color: color }"
        :href="(platform.name === 'mail' ? 'mailto:' : '') + platform.url"
        target="_blank"
      >
        <span>
          <github-outlined v-if="platform.name === 'github'" />
          <mail-outlined v-if="platform.name === 'mail'" />
        </span>
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { GithubOutlined, MailOutlined } from '@ant-design/icons-vue'

export default {
  props: {
    color: String,
    size: Number,
  },
  components: {
    GithubOutlined,
    MailOutlined
  },
  computed: {
    ...mapState(["social"]),
  },
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  justify-content: space-evenly;
}
</style>
