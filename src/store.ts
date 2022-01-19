import { createStore } from 'vuex'
import lodash from 'lodash'
import { UserInfo } from './api/userInfo'
import api from './api'

const store = createStore({
  state: {
    TCollection: {
      title: '',
      loading: '',
      fork: '',
    },
    social: {},
    copyrights: {},
    banner: {
      anchor: {
        id: 'banner',
        icon: 'home',
        name: 'Home'
      }
    },
    modules: []
  },
  getters: {
    title(state): string {
      return state.TCollection.title;
    },
    menus(state): object[] {
      // 找到可展示的模块
      const modules = lodash.concat(
        [state.banner],
        lodash.filter(state.modules, 'display')
      )
      return lodash.map(modules, module => module.anchor)
    },
    moduleIds(state): string[] {
      // 找到可展示的模块
      const modules = lodash.filter(state.modules, "display");
      // 将模块中用于menu的字段抽出
      return lodash.map(modules, module => module.anchor.id);
    },
    getModule: (state: UserInfo) => (id: string) => {
      return lodash.find(state.modules, item => item.anchor.id === id)
    }
  },
  mutations: {
    init(state, userInfo) {
      state.TCollection = userInfo.TCollection;
      state.social = userInfo.social;
      state.copyrights = userInfo.copyrights;
      state.banner = userInfo.banner;
      state.modules = userInfo.modules;

      document.title = state.TCollection.title;
    }
  },
  actions: {
    init({commit}) {
      api.init((userInfo: UserInfo) => {
        commit('init', userInfo)
      })
    }
  }
})

export default store;
