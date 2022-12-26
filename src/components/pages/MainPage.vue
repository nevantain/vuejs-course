<template>
    <div class="main_page_wrapper">
        <div class="hello">
            <p>Привет, этот сайт создан на VueJS в образовательных целях</p>
        </div>
    </div>
</template>
    
<script>
    
export default {
        
}
</script>
    
<style scoped>
.main_page_wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
}
.hello {
    font-size: 30px;
    position: absolute;
    top: 200px;
}
</style>