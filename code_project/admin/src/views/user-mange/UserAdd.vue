<template>
    <div>
        <el-page-header icon="" title="用户管理">
            <template #content>
                <span class="text-large font-600 mr-3">添加用户</span>
            </template>
        </el-page-header>

        <el-form ref="userFormRef" style="max-width: 600px" :model="userForm" :rules="userFormRules" label-width="auto"
            class="demo-ruleForm" status-icon>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="userForm.password" type="password" />
            </el-form-item>
            <el-form-item label="性别" prop="role">
                <el-select v-model="userForm.role" placeholder="Select" style="width: 100%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="个人简介" prop="introduction">
                <el-input v-model="userForm.introduction" type="textarea" />
            </el-form-item>
            <el-form-item label="头像" prop="introduction">
                <Upload :avatar="userForm.avatar" @kerwinchange="handleChange"></Upload>
            </el-form-item>
            <el-form-item>
                <el-button class="submit_btn" type="primary" @click="submitForm()">
                    添加用户
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script setup>
import Upload from '@/components/upload/Upload.vue';
import { ref, reactive } from 'vue'
const userFormRef = ref()
const userForm = reactive({
    username: '',
    password: '',
    role: 2,//1.管理员 2.编辑
    introduction: '',
    avatar: '',
    file: null
})

const userFormRules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    role: [
        { required: true, message: '请选择权限', trigger: 'blur' },
    ],
    introduction: [
        { required: true, message: '请输入简介', trigger: 'blur' },
    ],
    avatar: [
        { required: true, message: '请上传头像', trigger: 'blur' },
    ],
})

// 角色选项
const options = [
    {
        label: '管理员',
        value: 1
    },
    {
        label: '编辑',
        value: 2
    }
]

const handleChange = (file) => {
    // console.log(file)
    userForm.avatar = URL.createObjectURL(file)
    userForm.file = file
}

// 提交表单
const submitForm = () => {
    userFormRef.value.validate(valiad => {
        if (valiad) {
            // 提交数据到后端
            console.log(userForm)
        }
    })
}
</script>


<style scoped lang="scss">
.demo-ruleForm {
    margin-top: 50px;
    margin-left: 12px;
}

.submit_btn {
    margin-left: 77px;
}
</style>