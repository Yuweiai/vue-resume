<template>
  <div class="header">
    <!-- title -->
    <a-row class="color-title">
      <a-col :span="24">
        <span>{{ title }}</span>
      </a-col>
    </a-row>
    <!-- subtitle -->
    <a-row class="color-content">
      <a-col :span="24">
        <h2>{{ subTitle }}</h2>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<style scoped lang="scss">
.header {
  border-left: 6px solid #e3872d;
  padding: 0.5em 0 0 1.5em;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30px;

  span {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 5px;
  }

  h2 {
    font-weight: 500;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
