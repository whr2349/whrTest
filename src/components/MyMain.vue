<template>
    <el-main>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
    export default {
        name: "MyMain"
    }
</script>

<style scoped>
    .el-main{
        height: calc(100vh - 91px);
    }
</style>