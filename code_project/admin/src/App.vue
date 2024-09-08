<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

/* 定义滚动条整体的样式 */
::-webkit-scrollbar {
  width: 2px;
  /* 滚动条的宽度 */
  height: 5px;
  /* 滚动条的高度 */
  position: absolute;
  /* 滚动条的位置 */
}

/* 定义滚动条的滑块部分的样式 */
::-webkit-scrollbar-thumb {
  background: #1890ff;
  /* 滑块的背景颜色 */
}

/* 定义滚动条的轨道部分的样式 */
::-webkit-scrollbar-track {
  background: #ddd;
  /* 轨道的背景颜色 */
}
</style>
