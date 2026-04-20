import { reactive } from 'vue'

export const auth = reactive({
  user: null, 

  login(userData) {
    this.user = userData
  },

  logout() {
    this.user = null
  },

  isLoggedIn() {
    return this.user !== null
  }
})
