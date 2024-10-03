<template>
    <div>
        <el-page-header @back="handleBack" title="产品管理">
            <template #content>
                <span class="text-large font-600 mr-3"> 编辑产品</span>
            </template>
        </el-page-header>

        <el-form ref="productFormRef" style="max-width: 600px" :model="productForm" :rules="productFormRules"
            label-width="auto" class="demo-ruleForm" status-icon>
            <el-form-item label="产品名称" prop="title">
                <el-input v-model="productForm.title" />
            </el-form-item>
            <el-form-item label="产品简要描述" prop="introduction">
                <el-input v-model="productForm.introduction" type="textarea" />
            </el-form-item>
            <el-form-item label="产品详细描述" prop="detail">
                <el-input v-model="productForm.detail" type="textarea" />
            </el-form-item>

            <el-form-item label="产品图片" prop="cover">
                <Upload :avatar="productForm.cover" @kerwinchange="handleChange"></Upload>
            </el-form-item>
            <el-form-item>
                <el-button class="submit_btn" type="primary" @click="submitForm()">
                    更新产品
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script setup>
import Upload from '@/components/upload/Upload.vue';
import store from '@/store';
import upload from '@/util/upload';
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
const productFormRef = ref()
const productForm = reactive({
    title: '',
    introduction: '',
    detail: '',
    cover: '', //保密
    file: null,
    username: store.state.userInfo.username
})

const productFormRules = reactive({
    title: [
        { required: true, message: '请输入名字', trigger: 'blur' },
    ],
    introduction: [
        { required: true, message: '请输入产品简要描述', trigger: 'blur' },
    ],
    detail: [
        { required: true, message: '请输入产品详细描述', trigger: 'blur' },
    ],
    cover: [
        { required: true, message: '请上传产品图片', trigger: 'blur' },
    ],
})
// 返回上一页
const handleBack = () => {
    router.back()
}
const handleChange = (file) => {
    // console.log(file)
    productForm.cover = URL.createObjectURL(file)
    productForm.file = file
}

const router = useRouter()
// 提交表单
const submitForm = () => {
    productFormRef.value.validate(async valiad => {
        if (valiad) {
            // 提交数据到后端
            console.log(productForm)
            await upload('/adminapi/product/list', productForm)
            // // 跳转到产品列表页
            router.push(`/product-manage/productlist`)

        }
    })
}
onMounted(() => {
    getData()
})
const route = useRoute()
const getData = async () => {
    const res = await axios.get(`/adminapi/product/list/${route.params.id}`)
    // console.log(res.data.data[0])
    Object.assign(productForm, res.data.data[0])
}
</script>


<style scoped lang="scss">
.demo-ruleForm {
    margin-top: 50px;
    margin-left: 12px;
}

.submit_btn {
    margin-left: 104px;
}
</style>