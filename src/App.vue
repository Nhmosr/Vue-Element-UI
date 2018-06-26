<template>
  <div id="app" class="app">
    <el-container style="height:100%">
        <el-header style="height:80px">
            <header-nav></header-nav>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <left-menu></left-menu>
            </el-aside>
            <el-main>
                 <router-view/>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import headerNav from './layout/header.vue'
import leftMenu from './layout/leftMenu.vue'
export default {
  name: 'App',
  components:{
    headerNav,
    leftMenu
  }
}
</script>
<style lang="scss">
@import url('./style/common.scss');
    html,
    body {
        width:100%;
        height: 100%;
        position: relative;
    }
    .app {
        width: 100%;
        height:100%;
        .el-header {
            background-color: #B3C0D1;
            height:80px;
        }
        .el-aside {
            background-color: #D3DCE6;
        }
        .el-main {
            background-color: #E9EEF3;
        }
    }   
</style>
