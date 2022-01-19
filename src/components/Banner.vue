<!-- 首屏banner -->

<template>
  <div class="banner" id="banner">
    <!-- 加载层 -->
    <div class="bg"><h1>{{TCollection.loading}}</h1></div>
    <!-- 背景层 -->
    <div data-aos="fade-in" class="bg">
      <div class="desc">
        <a-avatar src="/avatar.jpg" :size="160" />
        <h1>{{TCollection.title}}</h1>
      </div>
    </div>
    <!-- 指示图标 -->
    <a
      data-aos="fade-in"
      class="scroll-next animate__animated animate__bounce animate__infinite animate__slow"
      href="#about"
      v-smooth-scroll
    >
      <double-right-outlined :rotate="45" />
    </a>
    <!-- 脚贴 -->
    <div class="fork-me">
      <a href="https://gitlab.com/lifelearning/life-learning" class="fork-me-link" target="_blank">
        <div class="fork-me-text">{{TCollection.fork}}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapState } from 'vuex'
  import { DoubleRightOutlined } from '@ant-design/icons-vue'

  export default {
    computed: {
      ...mapState(['TCollection']),
    },
    components: {
      DoubleRightOutlined
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $--color-cyan url("@/assets/bg_banner.jpg") no-repeat center center scroll;
    background-size: cover;
    h1 {
      color: $--font-color;
      font-size: 2em;
      text-shadow: 0 0 5px $--color-gray;
    }
    .desc {
      margin-bottom: 30vh;
      text-align: center;
      h1 {
        font-size: 2.5em;
        margin-top: 20px;
        letter-spacing: 2px;
      }
    }
  }
  .scroll-next {
    position: absolute;
    bottom: 2vh;
    font-size: 1.5rem;
    color: $--font-color;
    padding: 0 10px;
  }
  .fork-me {
    position: absolute;
    transform: rotate(45deg);
    top: 30px;
    right: -80px;
    width: 300px;
    height: 60px;
    background: #f17c67;
    padding: 5px;
    .fork-me-link {
      display: block;
      width: 100%;
      height: 50px;
      text-align: center;
      border: #fff dashed 1px;
      .fork-me-text {
        line-height: 50px;
        color: ghostwhite;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}
</style>
