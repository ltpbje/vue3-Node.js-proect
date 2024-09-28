<template>
    <div>
        <el-page-header icon="" title="新闻管理">
            <template #content>
                <span class="text-large font-600 mr-3"> 新闻列表 </span>
            </template>
        </el-page-header>


        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="标题" />
            <el-table-column prop="category" label="分类">
                <template #default="scope">
                    {{ categoryFormat(scope.row.category) }}
                </template>
            </el-table-column>
            <el-table-column prop="editTime" label="更新时间">
                <template #default="scope">
                    {{ formatTime.getTime(scope.row.editTime) }}
                </template>
            </el-table-column>
            <el-table-column label="是否发布">
                <template #default="scope">
                    <el-switch v-model="scope.row.isPublish" :active-value="1" :inactive-value="0" />
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button :icon="Star" circle size="small" type="success"></el-button>
                    <el-button :icon="Edit" circle size="small"></el-button>
                    <el-button :icon="Delete" circle type="danger" size="small"></el-button>


                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import formatTime from '@/util/formatTime'
import { Star, Edit, Delete } from '@element-plus/icons-vue'

// 格式化时间方法
const tableData = ref([])

onMounted(() => {
    getTableData()
})
// 获取表格数据
const getTableData = async () => {
    const res = await axios.get('/adminapi/news/list')
    console.log(res.data)
    tableData.value = res.data.data
}


// 文章分类格式化 
const categoryFormat = (category) => {
    const arr = ['最新动态', '典型案例', '通知公告']
    return arr[category - 1]
}
</script>



<style lang="scss" scoped>
.el-table {
    margin-top: 50px;
}
</style>