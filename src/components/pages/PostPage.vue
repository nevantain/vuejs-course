<template>
<div>
    <my-input v-model="searchQuery" :placeholder_text="searchText" style="margin-left: 20px; margin-right: 20px; width: 98%;"></my-input>
    <div class="app__butns">
      <my-button 
      @click="showDialog=true"
      >Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="showDialog">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list @remove="deletePost" :posts="sortedAndSearchedPosts" v-if="!isPostsLoading"/>
    <div class="loading-head" v-else>Идет загрузка..</div>
    <div class="page__wrapper">
      <div class="page__link"
        :class="{
          'current__page': page === pageNumber 
        }" 
        @click="changePage(pageNumber)"
        v-for="pageNumber in totalPages"
        :key="pageNumber">
        {{ pageNumber }}
      </div>
    </div>
</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'
  
export default {
  components: {
    PostList, PostForm
  },
  data () {
    return {
      posts: [],
      showDialog: false,
      isPostsLoaging: false,
      searchText: 'Введите запрос...',
      selectedSort: '',
      searchQuery: '',
      page: 0,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },

mounted () {
    this.fetchPosts(); 
},
  
methods: {
      createPost(post) {
        this.posts.push(post);
        this.showDialog = false;
      },
  
      deletePost (post) {
        this.posts = this.posts.filter(el => el.id !== post.id);  
      },
  
    async fetchPosts() {
        try {
          setTimeout(async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _limit: this.limit,
                _page: this.page              
              }
            });
            this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
            this.posts = res.data;
          }, 100)
        } catch (e) {
          console.log(e);
        }
    },
  
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts();
    }
},
  
computed: {
    sortedPosts () {
        return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
  
    sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
},
  
watch: {
  
}
}
</script>
  
<style>
  
.loading-head {
    width: 100vw;
    height: 100vh;
    padding-left: 15px;
    padding-top: 15px;
    background-color: azure;
}
  
.app__butns {
    margin-bottom: 15px; 
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
  
.page__wrapper {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
}
  
.page__link {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: auto;
    border: 1px black solid;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
}
  
.current__page {
    color: rgb(118, 115, 255);
    border: 2px rgb(118, 115, 255) solid;
}
  
.observer {
    height: 30px;
    margin-bottom: 20px;
}
</style>
  