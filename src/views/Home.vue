<template>
    <div>
        <el-container>
            <aside-menu @openmenus="openMenus" :asideMenu="asideMenu"></aside-menu>
            <div style="width: calc(100% - 220px);background-color: #f4f6f7">
                <div class="my-header">
                    <div style="width: 300px;">
                        <el-input
                                placeholder="请输入内容"
                                v-model="appSeach">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <head-menu></head-menu>
                    <div class="block">
                        <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">消息<i class="el-icon-arrow-down el-icon--right"></i></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                                <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-avatar :size="50" shape="circle"
                                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <div class="right-exit"><i class="el-icon-switch-button"></i></div>

                    </div>

                </div>

                <el-main>
                    <el-scrollbar style="height: 100%;overflow-x: hidden">
                        <router-view></router-view>
                    </el-scrollbar>
                </el-main>

            </div>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HeadMenu from "../components/HeadMenu.vue"
    import AsideMenu from "../components/AsideMenu.vue"
    import PubSub from 'pubsub-js'
    // import MyMain from "../components/MyMain.vue"

    export default {
        name: 'home',
        components: {
            HeadMenu, AsideMenu
        },
        data() {
            return {
                appSeach: "",
                asideMenu:[
                    {
                        "id": "",
                        "title": "行政管理",
                        "img": "el-icon-postcard",
                        "url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "车辆管理",
                                "img": "el-icon-truck",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "办公用品",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "资产管理",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "证照借阅",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "档案管理",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "图书管理",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "会议管理",
                        "img": "el-icon-orange",
                        "url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "会议日历",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "会议预约",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "会议纪要",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "人事管理",
                        "img": "el-icon-user",
                        "url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "职工信息",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "请假考勤",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "绩效考核",
                                "img": "",
                                "url": "",
                                "display": false,
                            },
                        ]
                    },
                ],
            }
        },
        mounted(){
            PubSub.subscribe("openMenus",(msg, _title) =>{
                this.asideMenu = this.$store.state.Menus.filter(a => a.title==_title)[0].chMenus;
            })
        },
        methods:{

        },
    }
</script>
<style lang="less">
    .my-header {
        height: 90px;
        padding: 0px 20px;
        background-color: white;
        border-bottom: 1px solid #EBEEF5;
        /*box-shadow: 1px 1px greenyellow;*/
        display: flex;
    }
    .aside-menu{
        overflow-x: hidden;
    }
    .el-input {
        line-height: 90px;
    }

    .el-main {
        background-color: white;
        margin: 15px;
        border: 1px solid #EBEEF5;
        height: calc(100% - 121px);
    }

    .block {
        margin: auto 0px;
        display: flex;
        margin-left: auto;

        .el-dropdown {
            margin: auto 20px auto 10px;
        }

        .el-avatar {
            cursor: pointer;
        }

        .right-exit {
            cursor: pointer;
            margin: auto 10px auto 15px;
            font-size: 1.5em;
        }

        .right-exit:hover {
            color: #3FB323;
        }
    }
    .el-main /deep/.el-scrollbar__wrap {
        overflow-x: hidden;
    }

</style>