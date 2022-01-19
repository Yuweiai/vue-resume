# [漆鱼小筑](https://yuweiqin.com)

> 喝水不忘挖井人：该项目起源于 [Vuesume](https://github.com/manerfan/vuesume)
> - 但也希望可以看到，并非照搬源码(vite2 + vue3)
> - 正在全面学习vue3
> - 正在实践node编写接口


## 1. dependencies

```json
{
    "dependencies": {
        "@ant-design/icons-vue": "^6.0.1",
        "animate.css": "^4.1.1",
        "ant-design-vue": "^2.2.8",
        "aos": "^2.3.4",
        "axios": "^0.24.0",
        "json5": "^2.2.0",
        "lodash": "^4.17.21",
        "mavon-editor": "^3.0.0-beta",
        "v-smooth-scroll": "^2.0.0-beta.1",
        "vue": "^3.2.25",
        "vue-router": "^4.0.12",
        "vuex": "^4.0.2"
      },
}
```

1. @ant-design/icons-vue：Ant Design Icons for vue

2. animate.css：Just-add-water CSS animation

3. ant-design-vue：An enterprise-class UI components based on Ant Design and Vue

4. aos - Animate on scroll library：A small library to animate elements on your page as you scroll

5. axios：Promise based HTTP client for the browser and node.js

6. json5：The official reference implementation for JSON5 parsing and serialization libraries.

   > The JSON5 is a superset of JSON that aims to alleviate some of the limitations of JSON by expanding its syntax to include some productions from ECMAScript 5.1.

7. lodash：A modern JavaScript utility library delivering modularity, performance & extras.
8. mavon-editor：A markdown parser for Vue.
9. v-smooth-scroll：Lightweight Vue plugin for smooth-scrolling.
10. vue (**^3.2.25**)：Vue is a progressive framework for building user interface.
11. vue-router: The official router for Vue.js.
12. vuex：Vuex is a state management pattern + library for Vue.js applications. 

## 2. App.vue

```vue
<template>
	<div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    #app {
        color: '#fff';
        user-select: none;
        overflow-x: hidden;
    }
</style>
```

## 3. Home

### 3.1 布局

```js
- layout
    - header: 首屏<Banner />(.layout-header{height: 100vh})
    - layout: 正文
      - sider: [大屏]侧边栏菜单(.layout-sider)
		- affix<Menu />
      - layout: (.layout-content)
        - affix: [小屏]侧边栏抽屉固钉(.sider-menu-trigger)
        - content: 内容
        	- <About />: 简介
			- <Experience />: 经历
			- <Blog />: 博客
        - footer: 页脚<Footer />
	- drawer: [小屏]侧边栏抽屉菜单<Menu />
```

### 3.2 媒体查询

```scss
$--screen-sm-min: 768px;
$--screen-md-min: 992px;	// 1024 * 768
$--screen-lg-min: 1200px;	// 1280 * 1024
```

1. [bootstrap default breakpoints](https://github.com/twbs/bootstrap/issues/14894): 768px、992px、1200px

   > Remember, these are viewpoint dimensions, so 992px is for 1024px wide screens and 1200px is for 1280px wide screens.

   - 768px is the horizontal width of an iPad.
   - 992px is just under 1024 (the height of an iPad) to account for scrollbars on older laptops (which are usually around 20px wide).
   - Similarly, 1200px is just under a common resolution width of 1280px

2. [from waterwu](https://www.zhihu.com/question/25744494)

   > - xs: <575.98px  ——  适应竖屏下的手机
   > - sm: 576px ~ 767.98px  ——  适应较小的横屏下的手机
   > - md: 768px ~ 991.98px  ——  适应 iPad mini 以上的尺寸的竖屏展示，768 正好是 iPad 的水平宽度
   > - lg: > 992px  ——  适应横屏下的 iPad 及以上平板设备的尺寸
   > - xl: > 1200px  ——  适应 1280 以上的场景，通常为 PC/Mac 使用

3. 

   ```scss
   // < 768px
   @media screen and (max-width: $--screen-sm-min) {
       .layout-sider {
           display: none;
       }
   }
   
   // > 768px
   @media screen and (min-width: $--screen-sm-min) {
       .sider-menu-trigger {
           display: none;
       }
   }
   ```

   ```scss
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
   ```
   
   ```html
   <!-- 小屏侧边栏抽屉菜单 -->
   <a-drawer
       placement="left"
       :closable="true"
       :visible="menuDrawerVisible"
       @close="onMenuDrawerClose"
   >
       <Menu @menuClick="onMenuDrawerClose" />
   </a-drawer>
   
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
   ```

## 4. Banner

### 4.1 布局

```js
- div(.banner{position: relavite})(#banner)
    - div: 加载层(.bg{position: absolute})
		- h1
	- div: 背景层(.bg{position: absolute})(data-aos="fade-in")
		- avatar
		- h1
	- a: 指示图标(data-aos="fade-in")(anitemed bounce infinte slow)\
    	- double-right-outlined(rotate="45")
    - div: 脚贴
```

## 5. Menu

### 5.1 布局

```js
- layout(.layout-menu)
	- div: 头像
    	- avatar
		- span
	- layout-content(.menu): 菜单
    	- menu
			- menu-item(v-for)
				- icon
				- a(#id)
    - layout-footer(.footer)
		- <Social />
        - <Copyrights />
```



