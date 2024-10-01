<template>
    <div>
        <el-page-header @back="handleBack" title="新闻管理">
            <template #content>
                <span class="text-large font-600 mr-3"> 编辑新闻 </span>
            </template>
        </el-page-header>
        <el-form ref="newsFormRef" style="max-width: 600px; width: 100%; " :model="newsForm" :rules="newsFormRules"
            label-width="auto " class="demo-ruleForm" status-icon>
            <el-form-item label="标题" prop="title">
                <el-input v-model="newsForm.title" />
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <Editor @event="handleEditorChange" :content="newsForm.content" v-if="newsForm.content"></Editor>
            </el-form-item>

            <el-form-item label="类别" prop="category">
                <el-select v-model="newsForm.category" placeholder="Select" style="width: 100%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="封面" prop="cover">
                <Upload :avatar="newsForm.cover" @kerwinchange="handleUploadChange"></Upload>
            </el-form-item>

            <el-form-item>
                <el-button class="submit_btn" type="primary" @click="submitForm()">
                    更新新闻
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Editor from '@/components/editor/Editor.vue'
import Upload from '@/components/upload/Upload.vue';
import upload from '@/util/upload';
import router from '@/router';
import { useRoute } from 'vue-router';
import axios from 'axios';
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
        { required: true, message: '请输入标题', trigger: 'blur' }
    ],
    content: [
        { required: true, message: '请输入内容', trigger: 'blur' }
    ],
    category: [
        { required: true, message: '请输入分类', trigger: 'blur' }
    ],
    cover: [
        { required: true, message: '请上传图片', trigger: 'blur' }
    ],
    file: [
        { required: true, message: '请输入标题', trigger: 'blur' }
    ],
    isPublish: [
        { required: true, message: '请输入标题', trigger: 'blur' }
    ],
})

//每次editor内容改变的回调
const handleEditorChange = (data) => {
    // console.log(data);
    newsForm.content = data
    // console.log(newsForm.content)

}

// 新闻类别
const options = [
    {
        label: '最新动态',
        value: 1,
    },
    {
        label: '典型案例',
        value: 2,
    },
    {
        label: '通知公告',
        value: 3,
    },
]

// 更改封面图片
const handleUploadChange = (file) => {
    // console.log(file)
    newsForm.cover = URL.createObjectURL(file)
    newsForm.file = file
}

// 提交表单
const submitForm = () => {
    newsFormRef.value.validate(async (valid) => {
        if (valid) {
            console.log(newsForm)
            // 提交至后台
            await upload('/adminapi/news/list', newsForm)
            router.back()
        }
    })
}

// 返回到NewsList页面
const handleBack = () => {
    router.back()
}

const route = useRoute()
onMounted(async () => {
    // console.log(route.params.id);
    const res = await axios(`/adminapi/news/list/${route.params.id}`);
    console.log(res.data.data[0]);
    Object.assign(newsForm, res.data.data[0])
})
</script>

<style lang="scss" scoped>
.el-form {
    margin-top: 50px;
}

.submit_btn {
    margin-left: 50px;
}
</style>