<template>
    <div>
        <el-page-header icon="" title="新闻管理">
            <template #content>
                <span class="text-large font-600 mr-3"> 创建新闻 </span>
            </template>
        </el-page-header>
        <el-form ref="newsFormRef" style="max-width: 600px" :model="newsForm" :rules="newsFormRules" label-width="auto"
            class="demo-ruleForm" status-icon>
            <el-form-item label="标题" prop="title">
                <el-input v-model="newsForm.title" />
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <Editor></Editor>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Editor from '@/components/editor/Editor.vue'
const newsFormRef = ref()
const newsForm = reactive({
    title: '',
    content: '',
    category: 1,// 1 最新动态 2 典型案例 3 通知公告
    cover: '',
    file: null,
    isPublish: 0 // 0 未发布  1 已发布
})
const newsFormRules = reactive({
    title: [
        { require: true, message: '请输入标题', trigger: 'blur' }
    ],
    content: [
        { require: true, message: '请输入内容', trigger: 'blur' }
    ],
    // category: [
    //     { require: true, message: '请输入分类', trigger: 'blur' }
    // ],
    // cover: [
    //     { require: true, message: '请上传图片', trigger: 'blur' }
    // ],
    // file: [
    //     { require: true, message: '请输入标题', trigger: 'blur' }
    // ],
    // isPublish: [
    //     { require: true, message: '请输入标题', trigger: 'blur' }
    // ],
})


</script>

<style lang="scss" scoped>
.el-form {
    margin-top: 50px;
}
</style>