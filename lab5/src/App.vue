<!-- <script setup>
import HelloWorld from './components/Bai3.vue'
</script>

<template>
  <HelloWorld />
</template> -->

<template>
  <div class="container mt-4">
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

const addPost = (post) => {
  posts.value.push(post)
}
</script>



