<!-- 菜单 -->

<template>
  <a-layout class="layout-menu">
    <!-- 头像 -->
    <div class="header">
      <a-avatar src="/avatar.jpg" :size="80" />
      <span>{{ TCollection.title }}</span>
    </div>
    <!-- 菜单 -->
    <a-layout-content class="menu">
      <a-menu>
        <!-- 动态配置 -->
        <a-menu-item v-for="item in menus" v-bind:key="item.id">
          <span>
            <home-outlined v-if="item.icon === 'home'" />
            <user-outlined v-if="item.icon === 'user'" />
            <idcard-outlined v-if="item.icon === 'idcard'" />
            <profile-outlined v-if="item.icon === 'profile'" />
          </span>
          <a v-smooth-scroll :href="`#${item.id}`" @click="closeMenuDrawer">{{
            item.name
          }}</a>
        </a-menu-item>
      </a-menu>
    </a-layout-content>
    <!-- 菜单页脚 -->
    <a-layout-footer class="footer">
      <!-- 社交 -->
      <a-row type="flex" justify="center" align="middle" :gutter="2">
        <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2" /></a-col>
      </a-row>
      <a-row type="flex" justify="center" align="middle" :gutter="2">
        <a-col span="24"
          ><Copyrights color="rgb(136,136,136)" :size="0.6"
        /></a-col>
      </a-row>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";
import { Social, Copyrights } from "./footer";
import {
  HomeOutlined,
  UserOutlined,
  IdcardOutlined,
  ProfileOutlined,
} from "@ant-design/icons-vue";

export default {
  computed: {
    ...mapState(["banner", "TCollection"]),
    ...mapGetters(["menus"]),
  },
  components: {
    Social,
    Copyrights,
    HomeOutlined,
    UserOutlined,
    IdcardOutlined,
    ProfileOutlined,
  },
  methods: {
    closeMenuDrawer() {
      this.$emit("menuClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.layout-menu {
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #fff;
  .header {
    margin: 2rem auto;
    span {
      display: block;
      margin-top: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: $--color-gray;
    }
  }
  .menu {
    a {
      margin-left: 0.7em;
    }
  }
  .footer {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 1rem;
    * {
      color: $--color-gray;
    }

    & > div {
      margin: 0.5rem auto;
    }
  }
}
</style>
