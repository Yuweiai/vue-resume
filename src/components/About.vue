<template>
  <div class="content about" id="about">
    <!-- title -->
    <Header :title="about.header.title" :sub-title="about.header.subtitle" />
    <!-- 内容 description -->
    <a-row type="flex" justify="center" align="top">
      <!-- 头像 -->
      <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
        <img
          data-aos="fade-in"
          class="avatar"
          draggable="false"
          src="../assets/about/avatar_about.jpg"
        />
      </a-col>
      <!-- 内容 -->
      <a-col
        class="color-content col"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="14"
        :xl="16"
      >
        <!-- title -->
        <span data-aos="fade-in" class="title color-title">{{
          about.header.subtitle
        }}</span>
        <!-- 简介 -->
        <!-- 正文 -->
        <mavon-editor
          class="md"
          data-aos="fade-in"
          v-model="about.content.md"
          :subfield="false"
          defaultOpen="preview"
          :editable="false"
          :toolbarsFlag="false"
          :boxShadow="false"
          previewBackground="transparent"
        />
        <!-- 关键词 -->
        <a-row data-aos="fade-in" class="keys-row" type="flex" align="top">
          <a-col
            class="keys-col"
            v-for="(value, name) in about.keys"
            v-bind:key="name"
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
          >
            <span class="key">{{ name }}:</span>
            <a
              class="value"
              v-if="isUrl(value)"
              :href="(value.includes('@') ? 'mailto:' : '') + value"
              target="_blank"
              >{{ simplifyUrl(value) }}</a
            >
            <span v-else>{{ value }}</span>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
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
    about(): Module {
      return this.$store.getters.getModule("about");
    },
  },
  methods: {
    // 检测是否为url
    isUrl(url: string): boolean {
      const strRegex =
        "^(((https|http|ftp|rtsp|mms):)?//)" +
        "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
        "(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
        "|" + // 允许IP和DOMAIN（域名）
        "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
        "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
        "[a-z]{2,6})" + // first level domain- .com or .museum
        "(:[0-9]{1,4})?" + // 端口- :80
        "((/?)|" + // a slash isn't required if there is no file name
        "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
      const re = new RegExp(strRegex);
      return re.test(url);
    },
    // 简化url
    simplifyUrl(url: string): string {
      const strRegex = /^(((https|http|ftp|rtsp|mms):)?\/\/)?/;
      return url.replace(strRegex, "");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.about {
  background: #fdfdfd;
  .col {
    padding: 0 1rem;
  }
  .avatar {
    display: block;
    width: 100%;
    border-radius: 5px;
  }
  .title {
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  @media screen and (max-width: $--screen-md-min) {
    .col {
      padding: 0;
      &.color-content {
        margin-top: 1.5rem;
      }
    }
  }
  .md {
    background-color: skyblue;
  }
  .keys-row {
    margin: 1rem auto;
    .keys-col {
      margin: 0.5rem auto;
      word-break: break-all;
      padding-right: 1rem;
      .key {
        margin-right: 0.5rem;
        font-weight: bold;
      }
      .value {
        color: inherit;
        text-decoration: underline;
      }
    }
  }
}
</style>
