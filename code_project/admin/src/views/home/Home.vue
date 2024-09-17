<template>
    <div>
        home
    </div>

</template>


<script setup>
import { useStore } from 'vuex'
const store = useStore()

console.log(store.state)

</script>