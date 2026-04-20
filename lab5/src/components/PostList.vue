<template>
  <div>
    <h3>Danh sách bài viết</h3>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="p-3 mb-3"
      :class="{ highlight: index % 2 === 0 }"
      :style="{ backgroundColor: post.color }"
    >
      <h5>{{ post.title }}</h5>
      <p><strong>Tác giả:</strong> {{ post.author }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style>
.highlight {
  border: 2px solid black;
}
</style>
