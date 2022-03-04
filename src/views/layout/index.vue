<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppAside from './components/AppAside'
export default {
  name: 'UserIndex',
  components: {
    AppAside
  }
}
</script>
<style lang="scss">
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #ffffff;
}
.el-header {
  background-color: #386bc6;
}
.el-main {
  background-color: darkgray;
}
</style>
