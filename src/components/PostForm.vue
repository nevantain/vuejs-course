<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-model="post.title" :placeholder_text="placeholder_name"></my-input>
      <my-input v-model="post.body" :placeholder_text="placeholder_body"></my-input>
      <my-button @click="createPost">Создание</my-button>
    </form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                body: ''
            },
            placeholder_name: 'Название',
            placeholder_body: 'Описание'
        }
    },

    methods: {
        createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  width: 100%;
  padding: 20px;
}
</style>
