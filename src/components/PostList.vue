<template>
<div class="post-list">
    <h3 v-if="posts.length > 0">Список постов</h3>
    <h3 v-else>Список постов пуст</h3>
    <transition-group name="post-list">
        <post-item @remove="$emit('remove', post)" v-for="post in posts" :key="post.id" :post="post"/>
    </transition-group>
</div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },

    data () {
        return {

        }
    },

    watch: {
      
    }
}
</script>

<style scoped>
.post-list {
    padding: 20px;
    background-color: azure;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0.2;
}
</style>
