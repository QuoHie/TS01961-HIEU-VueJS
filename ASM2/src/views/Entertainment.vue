<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-purple fw-bold">
      Giải trí
    </h1>

    <div class="row">
      
      <div class="col-md-4">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(post, index) in posts"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="selectPost(index)"
            style="cursor: pointer"
          >
            {{ post.title }}
          </li>
        </ul>
      </div>

      
      <div class="col-md-8 mb-5">
        <div class="card p-4 shadow-sm">
          <h3 class="fw-bold">
            {{ currentPost.title }}
          </h3>

          <p class="text-muted mt-2">
            Ngày đăng: {{ currentPost.date }}
          </p>

          <p class="mt-3">
            {{ currentPost.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    title: 'Vì sao giải trí đúng cách giúp bạn học tập hiệu quả hơn?',
    date: '20/01/2026',
    content: 'Sau những giờ học và làm việc căng thẳng, việc dành thời gian giải trí hợp lý giúp não bộ được nghỉ ngơi và phục hồi năng lượng. Khi tinh thần thoải mái, khả năng tập trung và ghi nhớ cũng được cải thiện rõ rệt. Tuy nhiên, giải trí quá đà hoặc không kiểm soát thời gian lại có thể gây phản tác dụng, khiến bạn mất cân bằng giữa học tập và nghỉ ngơi.'
  },
  {
    title: 'Những thói quen giải trí lành mạnh bạn nên duy trì mỗi ngày',
    date: '21/01/2026',
    content: 'Giải trí không chỉ đơn thuần là xem video hay lướt mạng xã hội. Những hoạt động như nghe nhạc nhẹ, đọc sách, đi bộ hoặc tập thể dục ngắn cũng được xem là hình thức giải trí lành mạnh. Các thói quen này không chỉ giúp giảm căng thẳng mà còn cải thiện sức khỏe thể chất và tinh thần nếu được duy trì đều đặn.'
  },
  {
    title: 'Mạng xã hội ảnh hưởng thế nào đến đời sống tinh thần của giới trẻ?',
    date: '22/01/2026',
    content: 'Mạng xã hội mang lại nhiều lợi ích trong việc kết nối và giải trí, tuy nhiên nó cũng tiềm ẩn không ít tác động tiêu cực nếu sử dụng không hợp lý. Việc tiếp xúc quá nhiều với nội dung tiêu cực hoặc so sánh bản thân với người khác có thể gây áp lực tâm lý. Vì vậy, mỗi người cần học cách chọn lọc nội dung và kiểm soát thời gian sử dụng mạng xã hội.'
  },
  {
    title: 'Cân bằng giữa học tập, làm việc và giải trí – điều không hề dễ',
    date: '23/01/2026',
    content: 'Trong cuộc sống hiện đại, nhiều người rơi vào trạng thái quá tải vì không biết cách phân bổ thời gian hợp lý. Học tập và làm việc chiếm phần lớn quỹ thời gian, khiến việc giải trí bị xem nhẹ. Tuy nhiên, nếu biết sắp xếp thời gian khoa học, bạn hoàn toàn có thể vừa hoàn thành tốt công việc vừa duy trì tinh thần thoải mái và tích cực.'
  }
])



const currentIndex = ref(0)
const currentPost = ref(posts.value[0])

const selectPost = (index) => {
  currentIndex.value = index
  currentPost.value = posts.value[index]
}
</script>

<style scoped>
.text-purple {
  color: #b04aa3;
}

.list-group-item.active {
  background-color: #b04aa3;
  border-color: #b04aa3;
}
</style>
