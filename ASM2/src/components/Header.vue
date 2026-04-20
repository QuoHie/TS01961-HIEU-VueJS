<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
    <div class="container-fluid px-4">

      
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/logoblog.png" alt="Logo" style="width:80px;">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link fw-semibold" to="/news">
              Tin tức
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link fw-semibold" to="/entertainment">
              Giải trí
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link fw-semibold" to="/about">
              Về chúng tôi
            </router-link>
          </li>

          
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link fw-semibold" to="/createpost">
              Tạo bài viết
            </router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link fw-semibold" to="/profile">
              Trang cá nhân
            </router-link>
          </li>
        </ul>

        
        <ul class="navbar-nav">
          
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link fw-semibold" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-semibold" to="/register">Đăng ký</router-link>
          </li>
        </template>

        
        <template v-else>
          <li class="nav-item">
            <span class="nav-link fw-semibold">
              Xin chào, {{ user?.name }}
            </span>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-danger btn-sm ms-2" @click="handleLogout">
              Đăng xuất
            </button>
          </li>
          </template>

        </ul>

      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  isLoggedIn: Boolean,
  user: Object
})
const emit = defineEmits(['logout'])

const handleLogout = () => {
  emit('logout')
}

</script>
