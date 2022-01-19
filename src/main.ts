import { createApp } from "vue";
import App from "./App.vue";
// 自定义样式
import '@/styles/main.scss'

// router
import router from "./router";

// vuex
import store from './store';
store.dispatch('init');

// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 平滑滚动(vue3)
import VueSmoothScroll from 'v-smooth-scroll'

// 动画
import 'animate.css'
// 滚动动画
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true,
  offset: 50,
  delay: 1000,
  duration: 1000
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);
app.use(VueSmoothScroll);
app.use(mavonEditor);

app.mount("#app");
