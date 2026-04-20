import img1 from '../assets/images/new1.jpg'
import img2 from '../assets/images/new2.jpg'
import img3 from '../assets/images/new3.jpg'

export const postDetails = [
  {
    id: 0,
    title: 'Chăm sóc sức khỏe mùa mưa',
    image: img1,
    content: `
      Mùa mưa là thời điểm độ ẩm tăng cao, tạo điều kiện thuận lợi cho vi khuẩn và virus phát triển. Để bảo vệ sức khỏe, bạn cần lưu ý:
      1. Giữ ấm cơ thể: Luôn mang theo áo mưa hoặc ô, tránh để cơ thể bị ngấm nước mưa quá lâu dẫn đến cảm lạnh.
      2. Chế độ ăn uống: Ưu tiên thực phẩm nóng, bổ sung thêm gừng, tỏi vào món ăn để tăng sức đề kháng. Hãy chắc chắn rằng bạn uống nước đã đun sôi.
      3. Vệ sinh môi trường: Diệt lăng quăng, bọ gậy xung quanh nơi ở để phòng tránh sốt xuất huyết - căn bệnh cực kỳ phổ biến trong mùa này.
      4. Ngủ đủ giấc: Một hệ miễn dịch khỏe mạnh bắt đầu từ một giấc ngủ chất lượng.
    `,
    comments: [
      {
        userName: 'Minh',
        content: 'Bài viết rất hay và mang tính thực tiễn cao.'
      },
      {
        userName: 'Hiếu',
        content: 'Cách trình bày rõ ràng, dễ hiểu'
      }
    ]
  },
  {
    id: 1,
    title: 'Dinh dưỡng cho sinh viên',
    image: img2,
    content: `
      Đời sống sinh viên thường gắn liền với mì tôm và đồ ăn nhanh, nhưng việc duy trì dinh dưỡng với ngân sách hạn hẹp là hoàn toàn có thể:
      - Tự nấu ăn tại nhà: Đây là cách tốt nhất để kiểm soát calo và vệ sinh. Các loại thực phẩm như trứng, đậu phụ, và rau muống rất rẻ nhưng giàu protein và chất xơ.
      - Quy tắc 1/2 đĩa rau: Trong mỗi bữa ăn, hãy cố gắng lấp đầy một nửa đĩa bằng rau xanh để tránh táo bón và thiếu hụt vitamin do học tập căng thẳng.
      - Uống đủ nước: Thay vì trà sữa hay nước ngọt, hãy luôn mang theo một bình nước lọc. Não bộ cần nước để tập trung ghi nhớ bài giảng.
      - Ăn sáng đầy đủ: Đừng bỏ bữa sáng! Một bắp ngô hay một gói xôi cũng đủ cung cấp năng lượng cho các tiết học kéo dài.
    `,
    comments: [
      {
        userName: 'Thủy',
        content: 'OK khá là hợp lí'
      },
      {
        userName: 'Huy',
        content: 'Tày quá anh ơi!!'
      },
    ]
  },
  {
    id: 2,
    title: 'Tập thể dục mỗi ngày',
    image: img3,
    content: `
      Bạn không cần phải đến phòng gym đắt tiền mới có thể khỏe mạnh. Tập thể dục mỗi ngày mang lại những lợi ích thần kỳ cho tâm trí:
      - 30 phút đi bộ: Chỉ cần 30 phút đi bộ nhanh mỗi ngày có thể giảm đáng kể nguy cơ mắc bệnh tim mạch và cải thiện tâm trạng nhờ giải phóng Endorphin.
      - Cải thiện sự tập trung: Đối với những người làm việc văn phòng, các bài tập giãn cơ giữa giờ giúp máu lưu thông lên não tốt hơn, giảm đau mỏi vai gáy.
      - Kiên trì là chìa khóa: Quan trọng không phải là bạn tập nặng bao nhiêu, mà là bạn duy trì nó đều đặn như thế nào. Hãy bắt đầu bằng những bài tập nhẹ nhàng như Yoga hoặc Cardio cơ bản tại nhà.
      - Giấc ngủ ngon hơn: Vận động thể chất giúp cơ thể đi vào giấc ngủ nhanh hơn và sâu hơn, giúp bạn tỉnh táo vào sáng hôm sau.
    `,
    comments: [
      {
        userName: 'Hào',
        content: 'Tập không đúng cách dễ chấn thương lắm nha mọi người ơi!'
      },
      {
        userName: 'Phước',
        content: 'Tôi thấy rất hữu ích, cảm ơn tác giả!'
      },
    ]
  }
]
