import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Menus: [
            {
                "id": "",
                "title": "协同办公",
                "img": "",
                "s_url": "",
                "display": false,
                "chMenus": [
                    {
                        "id": "",
                        "title": "行政管理",
                        "img": "el-icon-postcard",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "车辆管理",
                                "img": "el-icon-truck",
                                "s_url": "/xz/cars",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "办公用品",
                                "img": "",
                                "s_url": "/xz/supplies",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "资产管理",
                                "img": "",
                                "s_url": "/xz/fixedassets",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "证照借阅",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "档案管理",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "图书管理",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "会议管理",
                        "img": "el-icon-orange",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "会议日历",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "会议预约",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "会议纪要",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "人事管理",
                        "img": "el-icon-user",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "职工信息",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "请假考勤",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "绩效考核",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                ]
            },
            {
                "id": "",
                "title": "项目管理",
                "img": "",
                "s_url": "",
                "display": false,
                "chMenus": [
                    {
                        "id": "",
                        "title": "客户管理",
                        "img": "el-icon-user",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "客户信息",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "客户业务",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "合同管理",
                        "img": "el-icon-tickets",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "合同台帐",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                    {
                        "id": "",
                        "title": "项目管理",
                        "img": "el-icon-folder-checked",
                        "s_url": "",
                        "display": false,
                        "chMenus": [
                            {
                                "id": "",
                                "title": "项目一览",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "我负责的",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "我参加的",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "里程碑",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                            {
                                "id": "",
                                "title": "重大风险",
                                "img": "",
                                "s_url": "",
                                "display": false,
                            },
                        ]
                    },
                ]
            },
            {
                "id": "",
                "title": "网站管理"
            },
        ]
    },
    mutations: {},
    actions: {}
})
