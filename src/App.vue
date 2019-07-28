<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  background-color: #4280e8;
  height: 60px;
  line-height: 60px;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  position: relative;
}
.container {
  position: absolute;
  top: 60px;
  bottom: 0;
}
.container .menu {
  height: 100%;
}
ul.el-menu {
  width: 240px;
  height: 100%;
}
</style>
<template>
  <div id="app">
    <!-- <div class="title">ECMAScript 6 入门</div>
    <el-row class="container">
      <el-col class="menu">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title"
                >分组一</template
              >
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title"
                >选项4</template
              >
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row> -->
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuData: [
        {
          name: 'letAndConst',
          title: 'let 和 const 命令',
          child: [
            {
              name: 'let',
              title: 'let命令',
              to: 'let'
            },
            {
              name: 'blockScope',
              title: '块级作用域',
              to: 'blockScope'
            },
            {
              name: 'const',
              title: 'const命令',
              to: 'const'
            },
            {
              name: 'topObject',
              title: '顶层对象的属性'
            },
            {
              name: 'globalThis',
              title: 'globalThis 对象'
            }
          ]
        }
      ]
    }
  },
  created () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

