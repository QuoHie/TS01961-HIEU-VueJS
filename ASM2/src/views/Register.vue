<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3 class="mb-4 text-center">Đăng ký tài khoản</h3>

    <form @submit.prevent="login">
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" />
        <small class="text-danger" v-if="emailError">{{ emailError }}</small>
      </div>

      <div class="mb-3">
        <label>Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" />
        <small class="text-danger" v-if="passwordError">{{ passwordError }}</small>
      </div>

      <div class="mb-3">
        <label>Tên</label>
        <input v-model="phone" type="text" class="form-control" />
      </div>

      <small class="text-danger d-block mb-2" v-if="loginError">
        {{ loginError }}
      </small>

      <button class="btn btn-primary w-100 mb-5">Đăng kí</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {
  emailError.value = ''
  passwordError.value = ''

  if (!email.value) {
    emailError.value = 'Email không được để trống'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không hợp lệ'
  }

  if (!password.value) {
    passwordError.value = 'Mật khẩu không được để trống'
  }

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
}
</script>
