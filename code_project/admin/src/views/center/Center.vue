<template>
    <div>
        <el-page-header icon="" title="企业门户网站管理系统">
            <template #content>
                <span class="text-large font-600 mr-3"> 个人中心 </span>
            </template>
        </el-page-header>
        <el-row :gutter="20" class="el-row">
            <el-col :span="8">
                <el-card class="box-card">
                    <el-avatar :size="100" :src="avatarUrl" />
                    <h3>{{ store.state.userInfo.username }}</h3>
                    <h5>{{ store.state.userInfo.role === 1 ? '管理员' : '编辑' }}</h5>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card>


                    <template #header>
                        <div class="card-header">
                            <span>个人信息</span>
                        </div>
                    </template>
                </el-card>
            </el-col>

        </el-row>
    </div>

</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const avatarUrl = computed(() => store.state.userInfo.avatar ? store.state.userInfo.avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
</script>

<style lang="scss" scoped>
.el-row {
    margin-top: 20px;

    .box-card {
        text-align: center
    }
}
</style>
