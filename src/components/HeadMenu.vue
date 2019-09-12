<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <el-menu-item :index="index" :disabled="Menu.display" v-for="(Menu , index) in Menus" :key="index" @click="chMenus(Menu.title)">{{Menu.title}}</el-menu-item>

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
    import PubSub from 'pubsub-js'
    export default {
        name: "HeadMenu",
        data() {
            return {
                activeIndex: 0,
                Menus:this.$store.state.Menus,
            }
        },
        mounted() {

        },
        methods:{
            chMenus(title){
                PubSub.publish("openMenus",title)
            }
        }

    }
</script>

<style scoped lang="less">
    @headerH: 90px;

    .el-menu--horizontal > .el-menu-item {
        height: @headerH;
        line-height: @headerH;
        color: #303133;
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
    .el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
        color: #3FB323;
    }
    .el-menu--horizontal>.el-submenu /deep/ .el-submenu__title {
        color: #303133;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu /deep/ .el-submenu__title:hover {
        background-color: #fff;
        color: #3FB323;
    }
    .el-submenu.is-active .el-submenu__title {
         border-bottom-color: transparent;
    }
    .el-menu--horizontal>.el-submenu.is-active /deep/ .el-submenu__title {
        border-bottom: none;
        color: #303133;
    }

</style>