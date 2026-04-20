<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5 text-purple fw-bold">
      Tin tức & Kiến thức cộng đồng
    </h1>

    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100 shadow-sm hover-card">
          <img :src="item.image" class="card-img-top" :alt="item.title" />

          <div class="card-body">
            <h6 class="card-title fw-bold text-dark">{{ item.title }}</h6>
            <p class="card-text text-secondary">{{ item.content }}</p>
          </div>

          <div class="card-footer bg-white border-0 pb-3">
            <router-link :to="`/news/${index}`" class="btn btn-info btn-sm w-100 text-white">
              Xem chi tiết
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


import img1 from '../assets/images/new1.jpg'
import img2 from '../assets/images/new2.jpg'
import img3 from '../assets/images/new3.jpg'
import img4 from '../assets/images/new4.jpg'
import img5 from '../assets/images/new5.jpg'
import img6 from '../assets/images/new6.jpg'
import img7 from '../assets/images/new7.jpg'
import img8 from '../assets/images/new8.jpg'

const items = ref([
  {
    image: img1,
    title: 'Chăm sóc sức khỏe mùa mưa',
    content: 'Một số lưu ý giúp phòng tránh bệnh khi thời tiết thay đổi.'
  },
  {
    image: img2,
    title: 'Dinh dưỡng cho sinh viên',
    content: 'Ăn uống hợp lý giúp tăng sức đề kháng và tập trung học tập.'
  },
  {
    image: img3,
    title: 'Tập thể dục mỗi ngày',
    content: 'Vận động 30 phút mỗi ngày giúp cải thiện sức khỏe.'
  },
  {
    image: img4,
    title: 'Giữ tinh thần tích cực',
    content: 'Tinh thần thoải mái giúp cuộc sống khỏe mạnh hơn.'
  },
  {
    image: img5,
    title: 'Ngủ đủ giấc',
    content: 'Ngủ đủ 7–8 tiếng giúp cơ thể phục hồi năng lượng.'
  },
  {
    image: img6,
    title: 'Uống đủ nước',
    content: 'Nước rất quan trọng cho hoạt động của cơ thể.'
  },
  {
    image: img7,
    title: 'Hạn chế đồ ăn nhanh',
    content: 'Ăn uống lành mạnh giúp phòng tránh nhiều bệnh.'
  },
  {
    image: img8,
    title: 'Khám sức khỏe định kỳ',
    content: 'Phát hiện sớm giúp điều trị bệnh hiệu quả hơn.'
  }
])
</script>


<style scoped>
.text-purple {
  color: #b04aa3;
}

.card-text {
  font-size: 14px;
}
</style>
