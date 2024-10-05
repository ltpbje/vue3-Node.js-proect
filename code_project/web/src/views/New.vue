<template>
    <el-row>
        <el-col :span="17" :offset="1">
            <div>
                <h2>
                    {{ currentNews.title }}
                </h2>
                <div class="time">
                    {{ whichTime(currentNews.editTime) }}
                </div>
                <el-divider>
                    <el-icon><star-filled /></el-icon>
                </el-divider>
                <div class="content" v-html="currentNews.content"></div>
            </div>



        </el-col>
        <el-col :span="4" :offset="1" :pull="1">
            <el-card style="max-width: 480px">
                <template #header>
                    <div class="card-header">
                        <span>最近新闻</span>
                    </div>
                </template>
                <div v-for="item in topNews" :key="item._id" class="text item" style="padding: 14px;"
                    @click="handleChange(item._id)">
                    <span>{{ item.title }}</span>
                    <div class="bottom">
                        <time class="time">{{ whichTime(item.editTime) }}</time>
                    </div>
                </div>

            </el-card>

        </el-col>
    </el-row>
</template>

<script setup>
import axios from 'axios'
import moment from 'moment';
import { watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { StarFilled } from '@element-plus/icons-vue'
const route = useRoute()
const currentNews = ref({})
const topNews = ref([])
watchEffect(async () => {
    console.log(11);

    const res1 = await axios.get(`/webapi/news/list/${route.params.id}`)
    // console.log(res1.data.data[0])
    const res2 = await axios.get(`/webapi/news/toplist?limit=4`)
    // console.log(res2.data.data)

    currentNews.value = res1.data.data[0]
    topNews.value = res2.data.data
})


moment.locale("zh-cn")
const whichTime = time => { return moment(time).format('YYYY年MM月DD日 HH:MM:SS') }
const router = useRouter()
const handleChange = (id) => {
    router.push(`/news/${id}`)
}
</script>

<style lang="scss" scoped>
.el-row {
    margin-top: 30px;
}

.time {
    font-size: 13px;
    color: gray;
}

::v-deep.content {
    img {
        width: 100%;
    }
}
</style>