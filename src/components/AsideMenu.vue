<template>
    <el-aside width="220px">
        <div class="my-aside-logo">
            <img src="../assets/中基地信logo2-透明底色.png">
        </div>
        <el-scrollbar style="height: 100%;overflow-x: hidden">
            <el-menu :default-openeds="[0]">
                <el-submenu :index="index" v-for="(_asideMenu , index) in asideMenu" :key="index">
                    <template slot="title"><i :class="_asideMenu.img"></i>{{_asideMenu.title}}</template>
                    <el-menu-item :index="index+'-'+_index" v-for="(__asideMenu , _index) in _asideMenu.chMenus" :key="_index">{{__asideMenu.title}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-scrollbar>

    </el-aside>
</template>

<script>
    export default {
        name: "asideMenu",
        props:{
            asideMenu:Array,
        },
        data(){

        }
    }
</script>

<style scoped>
    .el-aside {
        height: calc(100vh);
        overflow-y: hidden;
        background-color: white;
        border-right: 1px solid #EBEEF5;
    }

    .el-scrollbar__wrap {
        overflow-x: hidden;
    }

    .el-menu {
        border-right: none;

    }

    .my-aside-logo {
        height: 200px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #EBEEF5;
        background-color: white
    }
    .el-submenu .el-menu {
        border: none;
        background-color: #f8fdfb;
    }
</style>