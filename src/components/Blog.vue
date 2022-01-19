<template>
  <div class="content blog" id="blog">
    <!-- title -->
    <Header :title="blog.header.title" :sub-title="blog.header.subtitle" />
    <div class="color-content">未完待续...</div>
  </div>
</template>

<script lang="ts">
import { Header } from "./module";
import { Module } from "../api/userInfo";

export default {
  components: {
    Header,
  },
  computed: {
    blog(): Module {
      return this.$store.getters.getModule("blog");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variable';

.blog {
  background: #fdfdfd;
}
</style>
