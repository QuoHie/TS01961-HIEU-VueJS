<script setup>
import { inject, ref, watch } from 'vue'

const user = inject('user')

const form = ref({
  name: '',
  email: ''
})


watch(user, (newUser) => {
  if (newUser) {
    form.value.name = newUser.name
    form.value.email = newUser.email
  }
}, { immediate: true })

const updateProfile = () => {
  user.value.name = form.value.name
  alert('Cập nhật thông tin thành công')
}
</script>

<template>
  <div class="container mt-5" style="max-width:600px">
    <h3 class="mb-4">Quản lý thông tin cá nhân</h3>

    <div class="mb-3">
      <label>Họ tên</label>
      <input v-model="form.name" class="form-control" />
    </div>

    <div class="mb-3">
      <label>Email</label>
      <input class="form-control" :value="form.email" disabled />
    </div>

    <button class="btn btn-primary mb-5" @click="updateProfile">
      Cập nhật
    </button>
  </div>
</template>
