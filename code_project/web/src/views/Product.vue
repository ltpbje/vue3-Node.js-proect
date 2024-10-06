<template>
    <div>
        <el-carousel direction="vertical" height="calc(100vh - 60px)" :autoplay="false" v-if="loopList.length">
            <el-carousel-item v-for="item in loopList" :key="item._id">
                <div class="item" :style="{ backgroundImage: `url(http://localhost:3000${item.cover})` }">
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <h2>{{ item.title }}</h2>
                            </div>
                        </template>
                        <div>{{ item.introduction }}</div>
                        <div class="detail">{{ item.detail }}</div>
                        <div class="more">
                            更多信息请访问
                            <br>
                            http://kerwin:8080
                        </div>
                    </el-card>
                </div>
            </el-carousel-item>

        </el-carousel>
        <el-empty description="暂无产品" v-else></el-empty>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
const loopList = ref([])

onMounted(async () => {
    const res = await axios.get('/webapi/product/list')
    console.log(res)
    loopList.value = res.data.data

})
</script>

<style lang="scss" scoped>
.item {
    height: 100%;
    width: 100%;
    background-size: cover;
}

.box-card {
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);

    .detail,
    .more {
        margin-top: 20px;
    }
}
</style>