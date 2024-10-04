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

        <div class="topnews"></div>
    </div>
</template>

<script setup>
import newsbg from '@/assets/newsbg.jpg'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios';
import { ref, onMounted, computed } from 'vue'
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
    margin-top: 20px;
}
</style>