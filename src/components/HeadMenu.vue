<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">协同办公</el-menu-item>
        <el-menu-item index="2">项目管理</el-menu-item>
        <el-menu-item index="3">网站管理</el-menu-item>
        <el-submenu index="4">
            <template slot="title">我的工作台</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
            <el-submenu index="4-4">
                <template slot="title">选项4</template>
                <el-menu-item index="4-4-1">选项1</el-menu-item>
                <el-menu-item index="4-4-2">选项2</el-menu-item>
                <el-menu-item index="4-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "HeadMenu",
        data() {
            return {

                activeIndex: '1'

            }
        }
    }
</script>

<style scoped lang="less">
    @headerH: 90px;

    .el-menu--horizontal > .el-menu-item {
        height: @headerH;
        line-height: @headerH;
    }

    .my-header .el-menu--horizontal > .el-submenu /deep/ .el-submenu__title {
        height: @headerH;
        line-height: @headerH;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        outline: 0;
        color: #3FB323;
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: none;
        color: #3FB323;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-menu--horizontal>.el-menu-item {
      border-bottom: none;
    }
</style>