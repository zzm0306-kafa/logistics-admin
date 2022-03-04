<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened>
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>系统管理中心</span>
      </template>
      <el-menu-item index="2-1">组织结构</el-menu-item>
      <el-menu-item index="2-2">角色管理</el-menu-item>
      <el-submenu index="2-3">
        <template slot="title">权限管理</template>
        <el-submenu index="2-3-1">
          <template slot="title">管理员权限</template>
          <el-menu-item index="2-3-1-1">功能权限</el-menu-item>
          <el-menu-item index="2-3-1-2">数据权限</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3-2">
          <template slot="title">角色权限</template>
          <el-menu-item index="2-3-2-1">功能权限</el-menu-item>
          <el-menu-item index="2-3-2-2">数据权限</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3-3">
          <template slot="title">用户权限</template>
          <el-menu-item index="2-3-3-1">功能权限</el-menu-item>
          <el-menu-item index="2-3-3-2">数据权限</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2-4">信息管理</el-menu-item>
    </el-submenu>
      <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>系统维护平台</span>
      </template>
      <el-menu-item index="3-1">组织结构</el-menu-item>
      <el-menu-item index="3-2">角色管理</el-menu-item>
      <el-menu-item index="3-4">信息管理</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-folder-add"></i>
      <span slot="title">数据集成平台</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-circle-plus"></i>
        <span>医院字典管理</span>
      </template>
      <el-menu-item index="3-1">组织结构</el-menu-item>
      <el-menu-item index="3-2">角色管理</el-menu-item>
      <el-menu-item index="3-4">信息管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'AppAside'
}
</script>
<style lang="scss">
.app-aside {
  height: 100%;
  .el-meun {
    height: 100%;
    border-right: 0 none;
  }
}
</style>
