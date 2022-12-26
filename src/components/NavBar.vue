<template>
    <div class="navbar">
        <div class="main__text" @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <my-button style="margin-top: 0; margin-right: 10px;" @click="$router.push('/posts')">Посты</my-button>
            <my-button style="margin-top: 0; margin-right: 10px;" @click="$router.push('/about')">О сайте</my-button>
        </div>
    </div>
</template>
    
<script>
    
export default {
        
}
</script>
    
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: azure;
    padding: 10px;
}

.main__text {
    margin-left: 20px;
    font-size: 20px;
    cursor: pointer;
}

.navbar__btns {
    margin-right: 20px;
}
</style>