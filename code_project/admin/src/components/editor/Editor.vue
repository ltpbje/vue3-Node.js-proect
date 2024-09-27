<template>
    <div id="myeditor">

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import E from "wangeditor"
const emit = defineEmits()
onMounted(() => {
    const editor = new E("#myeditor")
    editor.create()

    // 配置 onchange 回调函数
    editor.config.onchange = function (newHtml) {
        console.log("change 之后最新的 html", newHtml);
        // 子传父
        emit('event', newHtml)
    };
})
</script>
