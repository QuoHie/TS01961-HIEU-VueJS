<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">
      Thay đổi thông điệp
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Thông điệp ban đầu')

const updateMessage = () => {
  if (message.value === 'Thông điệp ban đầu'){
    message.value = 'Thông điệp đã được thay đổi'
  } else {
    message.value = 'Thông điệp ban đầu'
  }
}

</script>
