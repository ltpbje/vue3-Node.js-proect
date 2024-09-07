<template>
    <div>
        Login
        <button @click="handleLogin">login</button>
    </div>
</template>

<script setup>
const handleLogin = ()=>{
    localStorage.setItem('token','kerwin')
}
</script>