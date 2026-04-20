<template>
    <div class="container mt-5">

        
        <div class="row mb-4">
            <!-- ẢNH -->
            <div class="col-md-5">
                <img :src="post.image" class="img-fluid" alt="post image" />
            </div>

            
            <div class="col-md-7">
                <div v-if="post">
                    <h3 class="fw-bold mb-3">{{ post.title }}</h3>
                    <p style="white-space: pre-line">
                        {{ post.content }}
                    </p>
                </div>
                <div v-else class="text-center text-danger">
                    <h4>Bài viết không tồn tại </h4>
                    <router-link to="/news" class="btn btn-primary mt-3">
                        Quay lại trang tin tức
                    </router-link>
                </div>
            </div>
        </div>

        <hr />

        
        <h5 class="fw-bold mb-3">Bình luận</h5>

        <div v-if="comments.length">
            <div v-for="(c, index) in comments" :key="index" class="border rounded p-3 mb-2">
                <strong>{{ c.userName }}</strong>
                <p class="mb-0">{{ c.content }}</p>
            </div>
        </div>

        <p v-else>Chưa có bình luận</p>

        <!-- FORM COMMENT -->
        <div class="mt-3 mb-5">
            <textarea v-model="newComment" class="form-control mb-2" rows="3"
                placeholder="Nhập bình luận..."></textarea>

            <button class="btn btn-primary" @click="addComment">
                Gửi bình luận
            </button>
        </div>

    </div>
</template>
<script setup>
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
import { postDetails } from '../router/postDetail'

const route = useRoute()
const user = inject('user')

const postId = Number(route.params.id)
const post = postDetails.find(p => p.id === postId)

const comments = ref([...post.comments])
const newComment = ref('')

const addComment = () => {
    if (!user.value) {
        alert('Vui lòng đăng nhập để bình luận')
        return
    }

    if (!newComment.value.trim()) return

    comments.value.push({
        userName: user.value.name,
        content: newComment.value
    })

    newComment.value = ''
}
</script>
