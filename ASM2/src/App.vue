<script setup>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const isLoggedIn = ref(false)
const user = ref(null)

const loginSuccess = (userData) => {
  isLoggedIn.value = true
  user.value = userData
}

const logout = () => {
  isLoggedIn.value = false
  user.value = null
}
provide('user', user)
provide('isLoggedIn', isLoggedIn)
provide('logout', logout)
</script>

<template>
  <Header
    :isLoggedIn="isLoggedIn"
    :user="user"
    @logout="logout"
  />

  <router-view @login-success="loginSuccess" />

  <Footer />
</template>
