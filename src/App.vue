<template>
  <div id="app">
    <h1>物流管理系统</h1>
    <router-view />
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
  </div>
</template>

<style lang="scss">
  div{
    background-color: $primary-color;
  }
</style>
