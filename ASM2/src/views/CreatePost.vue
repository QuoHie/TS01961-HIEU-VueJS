
<template>
  <div class="container mt-4">
    <div class="row">

      
      <div class="col-md-4">
        <h5 class="mb-3">
          {{ isEditing ? 'Cập nhật bài viết' : 'Thêm bài viết' }}
        </h5>

        <form @submit.prevent="submitPost">
          <div class="mb-3">
            <label class="form-label">Tiêu đề</label>
            <input
              v-model="post.title"
              type="text"
              class="form-control"
              placeholder="Nhập tiêu đề"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Nội dung</label>
            <textarea
              v-model="post.content"
              class="form-control"
              rows="4"
              placeholder="Nhập nội dung"
            ></textarea>
          </div>

          <button class="btn btn-success w-100 mb-4">
            {{ isEditing ? 'Cập nhật' : 'Thêm bài viết' }}
          </button>
        </form>
      </div>

      
      <div class="col-md-8">
        <h5 class="mb-3">Bài viết của bạn</h5>

        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th width="130">Hành động</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in userPosts()" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                <button
                  class="btn btn-warning btn-sm me-1"
                  @click="editPost(index)"
                >
                  Sửa
                </button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deletePost(index)"
                >
                  Xóa
                </button>
              </td>
            </tr>

            <tr v-if="userPosts().length === 0">
              <td colspan="4" class="text-center text-muted">
                Chưa có bài viết
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
import { initialPosts } from '../router/post'

const user = inject('user')

const posts = ref([...initialPosts])

const post = ref({
  title: '',
  content: ''
})

const isEditing = ref(false)
const editingIndex = ref(null)

const userPosts = () => {
  if (!user.value) return []
  return posts.value.filter(
    p => p.authorEmail === user.value.email
  )
}

const submitPost = () => {
  if (isEditing.value) {
    posts.value[editingIndex.value] = {
      ...post.value,
      authorEmail: user.value.email,
      authorName: user.value.name
    }
    isEditing.value = false
    editingIndex.value = null
  } else {
    posts.value.push({
      ...post.value,
      authorEmail: user.value.email,
      authorName: user.value.name
    })
  }
  resetForm()
}

const editPost = (index) => {
  post.value = { ...userPosts()[index] }
  editingIndex.value = posts.value.findIndex(
    p => p === userPosts()[index]
  )
  isEditing.value = true
}

const deletePost = (index) => {
  const realIndex = posts.value.findIndex(
    p => p === userPosts()[index]
  )
  posts.value.splice(realIndex, 1)
}

const resetForm = () => {
  post.value = { title: '', content: '' }
}
</script>


