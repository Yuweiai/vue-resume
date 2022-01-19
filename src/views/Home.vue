<!--页面整体布局:
  - layout
    - header: 首屏
    - layout: 正文
      - sider: 大屏侧边栏菜单
      - layout:
        - affix: 小屏侧边栏抽屉固钉
        - content: 内容
        - footer: 页脚
    - drawer: 小屏侧边栏抽屉菜单
-->
<template>
  <a-layout>
    <!-- 首屏 -->
    <a-layout-header class="layout-header"><Banner /></a-layout-header>
    <!-- 正文 -->
    <a-layout>
      <!-- 大屏侧边栏菜单 -->
      <a-layout-sider class="layout-sider" width="320"><a-affix><Menu /></a-affix></a-layout-sider>
      <!-- 正文部分 -->
      <a-layout class="layout-content">
        <!-- 小屏侧边栏抽屉固钉 -->
        <a-affix>
          <a-button
            :class="{
              'sider-menu-trigger': true,
              'drawer-closed': !menuDrawerVisible,
              'drawer-open': menuDrawerVisible,
            }"
            shape="circle"
            size="large"
            @click="toggleMenuDrawer"
          >
            <template #icon>
              <template v-if="menuDrawerVisible">
                <arrow-left-outlined />
              </template>
              <template v-if="!menuDrawerVisible">
                <bars-outlined />
              </template>
            </template>
          </a-button>
        </a-affix>
        <!-- 内容 -->
        <a-layout-content v-for="id in moduleIds" v-bind:key="id">
          <About v-if="id === 'about'" />
          <Experience v-if="id === 'experience'" />
          <Blog v-if="id === 'blog'" />
        </a-layout-content>
        <!-- 页脚 -->
        <!-- <a-layout-footer><Footer/></a-layout-footer> -->
      </a-layout>
    </a-layout>
    <!-- 小屏侧边栏抽屉菜单 -->
    <a-drawer
      placement="left"
      :closable="true"
      :visible="menuDrawerVisible"
      @close="onMenuDrawerClose"
    >
      <Menu @menuClick="onMenuDrawerClose" />
    </a-drawer>
  </a-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { Banner, Menu, About, Experience, Blog } from "@/components";
import { ArrowLeftOutlined, BarsOutlined } from "@ant-design/icons-vue";

export default {
  data() {
    return {
      menuDrawerVisible: false,
    }
  },
  methods: {
    toggleMenuDrawer() {
      this.menuDrawerVisible = !this.menuDrawerVisible;
    },
    onMenuDrawerClose() {
      this.menuDrawerVisible = false;
    }
  },
  components: {
    Banner,
    Menu,
    About,
    Experience,
    ArrowLeftOutlined,
    BarsOutlined,
    Blog
  },
  computed: {
    ...mapGetters(["moduleIds"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.layout-header {
  height: 100vh;
  padding: 0;
}
.layout-sider {
  box-shadow: 1px 0 5px #e0e0e0;
  z-index: 999;
}
.layout-content {
  position: relative;
  .sider-menu-trigger {
    position: absolute;
    top: 20px;
    z-index: 99999;
    &.drawer-closed {
      left: 20px;
    }
    &.drawer-open {
      left: 276px;
    }
  }
}

@media screen and (max-width: $--screen-sm-min) {
  .layout-sider {
    display: none;
  }
}

@media screen and (min-width: $--screen-sm-min) {
  .sider-menu-trigger {
    display: none;
  }
}
</style>
