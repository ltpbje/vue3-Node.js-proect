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
                    <el-switch v-model="scope.row.isPublish" :active-value="1" :inactive-value="0"
                        @click="handleSwitchChange(scope.row)" />
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button :icon="View" circle size="small" type="success"
                        @click="handlePreview(scope.row)"></el-button>
                    <el-button :icon="Edit" circle size="small" @click="handleEdit(scope.row)"></el-button>

                    <el-popconfirm title="你确定要删除吗?" confirm-button-text="确定" cancel-button-text="取消"
                        @confirm="handleDelete(scope.row)">
                        <template #reference>
                            <el-button :icon="Delete" circle type="danger" size="small"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogVisible" title="预览新闻" width="50%">
            <div>
                <h2>{{ previewData.title }}</h2>
                <div style="font-size: 12px; color: gray;">{{ formatTime.getTime(previewData.editTime) }}</div>
                <el-divider>
                    <el-icon><star-filled /></el-icon>
                </el-divider>
                <div v-html="previewData.content" class="htmlcontent"></div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import formatTime from '@/util/formatTime'
import { View, Edit, Delete, StarFilled } from '@element-plus/icons-vue'
import router from '@/router';

// 格式化时间方法
const tableData = ref([])

// 预览数据
const previewData = ref({})
// 预览弹窗的显示与隐藏
const dialogVisible = ref(false)
onMounted(() => {
    getTableData()
})
// 获取表格数据
const getTableData = async () => {
    const res = await axios.get('/adminapi/news/list')
    // console.log(res.data)
    tableData.value = res.data.data
}


// 文章分类格式化 
const categoryFormat = (category) => {
    const arr = ['最新动态', '典型案例', '通知公告']
    return arr[category - 1]
}

// 是否发布开关切换
const handleSwitchChange = async (item) => {
    // 提交到后端 更新后端数据
    await axios.put('/adminapi/news/publish', {
        _id: item._id,
        isPublish: item.isPublish
    })

    // 重新获取表格数据
    getTableData()
}


const handlePreview = async (data) => {
    // console.log(data)
    previewData.value = data
    dialogVisible.value = true
}

// 删除回调
const handleDelete = async (item) => {
    // console.log(item)
    await axios.delete(`/adminapi/news/list/${item._id}`)
    await getTableData()
}


// 编辑新闻回调

const handleEdit = async (item) => {
    router.push(`/news-manage/editnews/${item._id}`)
}

</script>



<style lang="scss" scoped>
.el-table {
    margin-top: 50px;
}

::v-deep .htmlcontent img {
    max-width: 100%;
}
</style>