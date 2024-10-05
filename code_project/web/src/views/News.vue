<template>
    <div class="container">
        <div class="news-header" :style="{
            backgroundImage: `url(${newsbg})`
        }">
        </div>
        <div class="search">
            <el-popover placement="bottom" width='50%' title="检索结果" :visible="visible">
                <template #reference>
                    <el-input v-model="searchText" placeholder="请输入新闻关键字" :prefix-icon="Search" type="search"
                        size="large" @input="visible = true" @blur="visible = false" />
                </template>
                <div v-if="searchnewsList.length">
                    <div v-for="data in searchnewsList" :key="data._id" class="search-item">
                        {{ data.title }}
                    </div>
                </div>
                <div v-else>
                    <el-empty description="暂无新闻" :image-size="50"></el-empty>

                </div>
            </el-popover>

        </div>

        <div class="topnews">
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in topNewsList" :key="item._id">
                    <el-card shadow="hover" style="max-width: 480px">

                        <div class="image" :style="{ backgroundImage: `url(http://localhost:3000${item.cover})` }">
                        </div>

                        <div style="padding: 14px;">
                            <span>{{ item.title }}</span>
                            <div class="bottom">
                                <time class="time">{{ whichTime(item.editTime) }}</time>
                            </div>

                        </div>
                    </el-card>
                </el-col>

            </el-row>
        </div>
    </div>
</template>

<script setup>
import newsbg from '@/assets/newsbg.jpg'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios';
import { ref, onMounted, computed } from 'vue'
import moment from 'moment';
moment.locale("zh-cn")
const searchText = ref('')
const visible = ref(false)
const newsList = ref([])
onMounted(async () => {
    const res = await axios.get('/webapi/news/list')
    newsList.value = res.data.data
})
const searchnewsList = computed(() => {
    return searchText.value ? newsList.value.filter(item => item.title.includes(searchText.value)) : []
})

const topNewsList = computed(() => {
    return newsList.value.slice(0, 4)
})

const whichTime = time => { return moment(time).format('YYYY年MM月DD日 HH:MM:SS') }
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}


.news-header {
    width: 100%;
    height: 400px;
    // background-size: cover;
    background-size: 100% 400px;
}

.search {
    position: absolute;
    top: 300px;
    width: 100%;
    text-align: center;

    .el-input {
        width: 50%;
    }
}

.search-item {
    height: 50px;
    line-height: 50px;

    &:hover {
        background-color: whitesmoke;
        color: red;
    }
}

.topnews {
    margin: 20px;

    .image {
        width: 100%;
        height: 150px;
        background-size: cover;
    }

    .time {
        font-size: 13px;
        color: gray;
    }
}
</style>