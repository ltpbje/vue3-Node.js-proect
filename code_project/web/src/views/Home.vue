<template>
    <div class="container">
        <el-carousel height="calc(100vh - 60px)">
            <el-carousel-item :key="1">
                <div :style="{ backgroundImage: `url(${home1})` }"></div>
            </el-carousel-item>

            <el-carousel-item :key="2">
                <div :style="{ backgroundImage: `url(${home2})` }"></div>
            </el-carousel-item>


            <el-carousel-item :key="3">
                <div :style="{ backgroundImage: `url(${home3})` }"></div>
            </el-carousel-item>
        </el-carousel>
        <div class="center">互联网+时代</div>

    </div>
</template>

<script setup>
import home1 from '@/assets/home1.jpg'
import home2 from '@/assets/home2.jpg'
import home3 from '@/assets/home3.jpg'
</script>

<style lang="scss" scoped>
.el-carousel div {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.container {
    position: relative;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 60px;
    color: white;
}
</style>