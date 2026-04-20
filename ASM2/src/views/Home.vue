<template>
  <div class="blog-index">
    <div id="carouselExampleIndicators" class="carousel slide shadow-sm mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
       
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/banner1.png" class="d-block w-100 banner-img-small" alt="Nghiên cứu y khoa">
        </div>

        <div class="carousel-item">
          <img src="../assets/images/banner2.png" class="d-block w-100 banner-img-small" alt="Học lập trình">
        </div>

        <div class="carousel-item">
          <img src="../assets/images/banner3.png" class="d-block w-100 banner-img-small" alt="Việt Nam">
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8">
        <h2 class="text-purple mb-4 border-bottom pb-2"> Tin tức HOT</h2>

        <div class="mb-5 pb-4">
          <h3 class="text-purple fw-bold">
            Tiến trình nghiên cứu đột phá về hội chứng Lafora năm 2026
          </h3>
          <p class="text-muted small">
            <i class="bi bi-calendar"></i> Xuất bản: Ngày 20/01/2026 | <i class="bi bi-person"></i> Tác giả: Đội ngũ Y sinh học
          </p>

          <div class="row mt-4">
            <div class="col-md-12">
              <p class="lead-text">
                Hội chứng Lafora là một căn bệnh thoái hóa thần kinh hiếm gặp, nhưng những nghiên cứu mới
                nhất trong quý 1 năm 2026 đang mở ra một chương mới cho y học hiện đại.
              </p>
              <p>
                Các nhà khoa học đã tập trung vào việc ức chế enzyme tổng hợp glycogen trong não bộ. 
                Thay vì chỉ điều trị triệu chứng co giật, phương pháp mới nhắm trực tiếp vào việc ngăn chặn 
                sự tích tụ của các vật thể Lafora (tinh bột dư thừa) gây tổn thương tế bào thần kinh. 
                Các thử nghiệm lâm sàng giai đoạn II đã cho thấy sự cải thiện đáng kể về khả năng vận động 
                và nhận thức ở các bệnh nhân tham gia.
              </p>
              <p>
                Ngoài ra, sự hỗ trợ từ công nghệ AI trong việc phân tích cấu trúc protein đã rút ngắn thời 
                gian nghiên cứu từ 5 năm xuống còn 18 tháng. Đây là một minh chứng rõ rệt cho việc kết hợp 
                giữa sinh học phân tử và khoa học máy tính để giải quyết những bài toán khó nhất của nhân loại.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div class="mb-5 pb-4 mt-4">
          <h3 class="text-purple fw-bold">
            Lộ trình chinh phục VueJS 3 dành cho sinh viên CNTT
          </h3>
          <p class="text-muted small">
            Ngày 15/01/2026 / bởi Chuyên gia Đào tạo VueJS
          </p>

          <p class="mt-3">
            Trong kỷ nguyên của Single Page Applications (SPA), <strong>VueJS</strong> nổi lên 
            như một lựa chọn hàng đầu nhờ sự cân bằng giữa hiệu suất và tính dễ học. Đối với sinh 
            viên, việc nắm vững Vue không chỉ giúp hoàn thành đồ án tốt nghiệp mà còn là tấm vé thông 
            hành vào các tập đoàn công nghệ lớn.
          </p>
          <p>
            Lộ trình học tập hiệu quả bắt đầu từ việc hiểu rõ <strong>Reactivity System</strong> 
            và <strong>Composition API</strong>. Thay vì cách viết Options API cũ, Composition API 
            cho phép chúng ta tổ chức mã nguồn theo logic nghiệp vụ, giúp việc bảo trì và tái sử dụng
             component trở nên linh hoạt hơn bao giờ hết.
          </p>
          <p>
            Đừng quên thực hành với hệ sinh thái mạnh mẽ của Vue bao gồm:
          </p>
          <ul class="custom-list">
            <li><strong>Pinia:</strong> Quản lý state tập trung, thay thế cho Vuex với cú pháp tinh gọn.</li>
            <li><strong>Vue Router:</strong> Điều hướng mượt mà cho các ứng dụng đa trang.</li>
            <li><strong>Vite:</strong> Công cụ build thế hệ mới giúp tăng tốc độ phát triển lên gấp nhiều lần.</li>
          </ul>
          <p>
            Hãy bắt đầu từ những project nhỏ như Todo List, sau đó nâng cấp lên Dashboard quản lý thực tế để hiểu sâu về cách truyền dữ liệu giữa các Component (Props & Emits).
          </p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="sidebar-box p-4 rounded shadow-sm bg-light">
          <h4 class="text-purple mb-3 border-bottom pb-2">🎯 Về dự án này</h4>
          <p>
            Chào mừng bạn đến với không gian chia sẻ kiến thức của chúng tôi. Đây không chỉ là một blog cá nhân mà là một <strong>thư viện mở</strong> dành cho những tâm hồn đam mê công nghệ và nghiên cứu khoa học.
          </p>
          <p>
            Mục tiêu của chúng tôi là kết nối cộng đồng lập trình viên trẻ với những tiến bộ khoa học mới nhất, tạo ra một môi trường học tập đa chiều, nơi lý thuyết đi đôi với thực hành thực tiễn.
          </p>
          
          <h4 class="text-purple mt-5 mb-3 border-bottom pb-2">🚀 Tại sao chọn VueJS?</h4>
          <p>
            Theo thống kê năm 2025-2026, VueJS vẫn giữ vững vị thế trong top 3 framework frontend phổ biến nhất nhờ:
          </p>
          <ul class="list-unstyled">
            <li class="mb-2">✅ Dung lượng thư viện siêu nhẹ.</li>
            <li class="mb-2">✅ Tài liệu hướng dẫn cực kỳ chi tiết.</li>
            <li class="mb-2">✅ Cộng đồng hỗ trợ lớn mạnh tại Việt Nam.</li>
            <li class="mb-2">✅ Dễ dàng tích hợp vào các dự án sẵn có.</li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.text-purple {
  color: #8e44ad;
}

.lead-text {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  line-height: 1.6;
}

p {
  line-height: 1.8;
  color: #444;
  text-align: justify;
}

.blockquote-custom {
  padding: 1rem 1.5rem;
  border-left: 5px solid #8e44ad;
  background-color: #f8f0fb;
  font-style: italic;
  margin: 1.5rem 0;
}

.custom-list li {
  margin-bottom: 0.5rem;
  position: relative;
  list-style: none;
}

.custom-list li::before {
  content: "▹";
  color: #8e44ad;
  font-weight: bold;
  margin-right: 10px;
}

.sidebar-box {
  border: 1px solid #eee;
  position: sticky;
  top: 20px;
}

/* CHỈNH NHỎ BANNER TẠI ĐÂY */
.banner-img-small {
  height: 400px; /* Bạn có thể tăng giảm con số này (ví dụ 200px hoặc 300px) */
  object-fit: cover;
}

/* Chỉnh lại phần chữ đè lên banner cho gọn */
.custom-cap {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  bottom: 10px;
  border-radius: 8px;
}

.custom-cap h4 {
  font-size: 1.2rem;
  margin-bottom: 0;
}

/* Làm cho các nút điều hướng nhỏ lại tương ứng */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 2rem;
  height: 2rem;
}

p {
  line-height: 1.7;
  text-align: justify;
}

</style>