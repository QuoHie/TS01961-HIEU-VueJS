<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3 class="mb-4 text-center">Đăng nhập</h3>

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

      <small class="text-danger d-block mb-2" v-if="loginError">
        {{ loginError }}
      </small>

      <button class="btn btn-primary w-100 mb-5">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { users } from '../router/users'

const emit = defineEmits(['login-success'])
const router = useRouter()

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const loginError = ref('')

const login = () => {
  emailError.value = ''
  passwordError.value = ''
  loginError.value = ''

  if (!email.value) emailError.value = 'Email không được để trống'
  if (!password.value) passwordError.value = 'Mật khẩu không được để trống'

  if (emailError.value || passwordError.value) return

  const user = users.find(
    u => u.email === email.value && u.password === password.value
  )

  if (!user) {
    loginError.value = 'Sai email hoặc mật khẩu'
    return
  }

  emit('login-success', {
    name: user.name,
    email: user.email
  })

  router.push('/')
}
</script>
