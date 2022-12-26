<template>
<div class="post">
    <div class="text">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
        <my-button @click="$emit('remove', post)" style="margin-top:0px">Удалить</my-button>
        <my-button @click="$router.push(`/posts/${post.id}`)" style="margin-top:0px; margin-left: 10px;">Открыть</my-button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
      
        }
    }
}
</script>

<style scoped>
.post {
    height: 150px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    margin-right: 15px;
}

.post__btns {
    display: flex;
}
</style>
