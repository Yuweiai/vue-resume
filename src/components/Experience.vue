<template>
  <div id="experience" class="content experience">
    <!-- title -->
    <Header
      :title="experience.header.title"
      :sub-title="experience.header.subtitle"
    />
    <!-- 经历时间轴 -->
    <a-timeline>
      <a-timeline-item
        data-aos="fade-in"
        v-for="card in experience.cards"
        v-bind:key="card.title + card.subtitle"
      >
        <a-card class="experience-card" :bordered="true" style="width: 100%">
          <template v-slot:title>
            <h1 class="title">{{ card.title }}</h1>
            <span v-if="!!card.subtitle" class="sub-title">{{
              card.subtitle
            }}</span>
          </template>
          <mavon-editor
            v-model="card.md"
            class="md"
            data-aos="fade-in"
            :subfield="false"
            defaultOpen="preview"
            :editable="false"
            :toolbarsFlag="false"
            :boxShadow="false"
            previewBackground="transparent"
          />
        </a-card>
      </a-timeline-item>
    </a-timeline>
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
    experience(): Module {
      return this.$store.getters.getModule("experience");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variable";

.experience {
  background-color: #f7f7f7;
  .experience-card {
    .title {
      width: 100%;
      overflow: scroll;
      margin: 0;
    }

    .sub-title {
      width: 100%;
      font-size: 14px;
      display: block;
      margin-top: 0.5rem;
    }
  }
}
</style>
