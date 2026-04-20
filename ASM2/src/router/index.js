import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Entertainment from '../views/Entertainment.vue'
import About from '../views/About.vue'
import CreatePost from '../views/CreatePost.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PostDetail from '../views/PostDetail.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/entertainment', component: Entertainment },
  { path: '/about', component: About },
  { path: '/createPost', component: CreatePost },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/news/:id', component: PostDetail },
  { path: '/profile', component: Profile },

  {
    path: '/profile', component: Profile,
    path: '/CreatePost', component: CreatePost,
    meta: { requiresAuth: true } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    next('/login')
  } else {
    next()
  }
})

export default router;
