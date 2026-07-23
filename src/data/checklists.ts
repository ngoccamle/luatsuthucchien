import { LegalChecklist } from "../types";

export const LEGAL_CHECKLISTS: LegalChecklist[] = [
  {
    id: "checklist-hop-dong-thuong-mai",
    title: "Checklist 15 Điểm Rà Soát Hợp Đồng Thương Mại & Mua Bán",
    description: "Bộ kiểm tra toàn diện trước khi chốt hợp đồng thương mại cho doanh nghiệp, loại bỏ cạm bẫy phạt vi phạm, bất khả kháng và thẩm quyền giải quyết tranh chấp.",
    category: "Soạn thảo Hợp đồng",
    targetDocument: "Hợp đồng Mua bán / Dịch vụ Thương mại",
    sampleClause: `Điều khoản Tranh chấp Mẫu:
"Mọi tranh chấp phát sinh từ hoặc liên quan đến Hợp đồng này sẽ được giải quyết chung thẩm tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) bên cạnh Liên đoàn Thương mại và Công nghiệp Việt Nam theo Quy tắc tố tụng trọng tài của Trung tâm này. Số lượng trọng tài viên là [01 hoặc 03]. Địa điểm trọng tài là [Hà Nội / TP. Hồ Chí Minh]. Ngôn ngữ trọng tài là tiếng Việt."`,
    items: [
      {
        id: "item-1",
        label: "Thẩm quyền người ký kết hợp đồng",
        explanation: "Kiểm tra Giấy chứng nhận đăng ký doanh nghiệp, Điều lệ công ty hoặc Giấy ủy quyền hợp lệ của người đại diện theo pháp luật.",
        riskWarning: "Nếu ký không đúng thẩm quyền, hợp đồng có nguy cơ bị tuyên vô hiệu toàn bộ.",
        categoryTag: "Tư cách pháp lý"
      },
      {
        id: "item-2",
        label: "Mục đích & Đối tượng hợp đồng không vi phạm điều cấm",
        explanation: "Hàng hóa, dịch vụ kinh doanh thuộc ngành nghề được phép, không bị cấm hoặc kinh doanh có điều kiện chưa đáp ứng đủ.",
        riskWarning: "Vi phạm điều cấm của luật dẫn đến hợp đồng vô hiệu tuyệt đối.",
        categoryTag: "Nội dung"
      },
      {
        id: "item-3",
        label: "Đơn vị tiền tệ thanh toán",
        explanation: "Phải ghi bằng Đồng Việt Nam (VND) trừ các trường hợp ngoại lệ được Pháp luật Quản lý ngoại hối cho phép.",
        riskWarning: "Thỏa thuận giá bằng USD trên lãnh thổ Việt Nam sẽ làm vô hiệu điều khoản giá.",
        categoryTag: "Thanh toán"
      },
      {
        id: "item-4",
        label: "Giới hạn phạt vi phạm tối đa 8%",
        explanation: "Đối với hợp đồng thương mại giữa hai thương nhân, phạt vi phạm tối đa không quá 8% giá trị phần nghĩa vụ bị vi phạm (Điều 301 Luật Thương mại).",
        riskWarning: "Ghi phạt 20-30% sẽ bị Tòa án/Trọng tài giảm về tối đa 8%.",
        categoryTag: "Chế tài"
      },
      {
        id: "item-5",
        label: "Thỏa thuận áp dụng đồng thời Phạt vi phạm & Bồi thường thiệt hại",
        explanation: "Phải quy định rõ áp dụng cả hai chế tài phạt vi phạm và bồi thường thiệt hại thực tế phát sinh.",
        riskWarning: "Nếu không ghi rõ, Luật Thương mại định hướng chỉ được chọn 1 trong 2 chế tài.",
        categoryTag: "Chế tài"
      },
      {
        id: "item-6",
        label: "Điều khoản Sự kiện Bất khả kháng (Force Majeure)",
        explanation: "Định nghĩa rõ thiên tai, dịch bệnh, hành vi cấm của cơ quan nhà nước và thủ tục thông báo trong vòng 7 ngày.",
        riskWarning: "Thiếu thủ tục thông báo sẽ làm mất quyền miễn trừ trách nhiệm.",
        categoryTag: "Rủi ro"
      },
      {
        id: "item-7",
        label: "Cơ quan giải quyết tranh chấp (Tòa án vs Trọng tài)",
        explanation: "Chọn Tòa án cụ thể hoặc Trọng tài thương mại cụ thể (VIAC, v.v.). Tránh ghi chung chung 'Tòa án có thẩm quyền'.",
        riskWarning: "Thỏa thuận trọng tài không rõ ràng sẽ bị coi là vô hiệu/không thể thực hiện.",
        categoryTag: "Tranh chấp"
      }
    ]
  },
  {
    id: "checklist-tiep-xuc-khach-hang",
    title: "Checklist Buổi Tiếp Xúc Khai Thác Thông Tin Khách Hàng Lần Đầu",
    description: "Bộ câu hỏi và lưu trình làm việc dành cho Luật sư khi gặp khách hàng tư vấn vụ việc dân sự, đất đai hoặc thương mại.",
    category: "Tư vấn Khách hàng",
    targetDocument: "Biên bản Tiếp xúc & Phiếu Khai thác Thông tin",
    sampleClause: `Cam kết Bảo mật Thông tin Tư vấn:
"Mọi thông tin, tài liệu và diễn biến do Khách hàng cung cấp trong buổi tư vấn này được bảo mật tuyệt đối theo Quy tắc 12 Quy tắc Đạo đức Nghề nghiệp Luật sư Việt Nam. Luật sư không được tiết lộ cho bất kỳ bên thứ ba nào nếu không có sự đồng ý bằng văn bản của Khách hàng."`,
    items: [
      {
        id: "cx-1",
        label: "Xác minh tư cách đương sự & Xung đột lợi ích (Conflict of Interest)",
        explanation: "Tra cứu hệ thống xem tổ chức hành nghề luật sư đã từng tư vấn cho phía đối phương chưa.",
        riskWarning: "Tư vấn cho hai bên có xung đột lợi ích là vi phạm nghiêm trọng đạo đức nghề nghiệp.",
        categoryTag: "Chuẩn bị"
      },
      {
        id: "cx-2",
        label: "Lập Biên bản kiểm kê chứng cứ & Giấy tờ gốc",
        explanation: "Chỉ nhận bản photo hoặc lập biên bản xác nhận giao nhận bản gốc có mô tả tình trạng dấu mộc, chữ ký.",
        riskWarning: "Thất lạc giấy chứng nhận quyền sử dụng đất hoặc hợp đồng gốc mà không có biên bản sẽ gánh hậu quả pháp lý.",
        categoryTag: "Chứng cứ"
      },
      {
        id: "cx-3",
        label: "Xác định mốc Thời hiệu khởi kiện (Statute of Limitations)",
        explanation: "Tính toán chính xác thời hiệu khởi kiện còn hay hết (3 năm đối với tranh chấp hợp đồng, 2 năm đối với bồi thường ngoài hợp đồng).",
        riskWarning: "Khởi kiện khi đã hết thời hiệu có thể bị Tòa án đình chỉ giải quyết vụ án.",
        categoryTag: "Tố tụng"
      },
      {
        id: "cx-4",
        label: "Đánh giá 3 phương án: Hòa giải - Khiếu nại - Khởi kiện",
        explanation: "Phân tích ưu/nhược điểm, chi phí và thời gian của từng phương án cho khách hàng lựa chọn.",
        riskWarning: "Đưa khách hàng thẳng vào vụ kiện kéo dài 3-5 năm khi chưa thử đàm phán.",
        categoryTag: "Chiến lược"
      }
    ]
  },
  {
    id: "checklist-khoi-kien-dan-su",
    title: "Checklist Hồ Sơ Khởi Kiện Dân Sự & Chuẩn Bị Tố Tụng",
    description: "Danh mục kiểm tra hoàn chỉnh đơn khởi kiện, phụ lục tài liệu chứng cứ và thủ tục nộp đơn tại Tòa án Nhân dân.",
    category: "Tranh tụng & Tố tụng",
    targetDocument: "Hồ sơ Khởi kiện Dân sự",
    sampleClause: `Trích đoạn Yêu cầu Khởi kiện:
"Buộc Bị đơn (Công ty X) phải thanh toán cho Nguyên đơn (Ông Y) tổng số tiền là 1.250.000.000 VNĐ, bao gồm: 1.000.000.000 VNĐ tiền nợ gốc, 200.000.000 VNĐ tiền lãi chậm trả tính đến ngày khởi kiện và 50.000.000 VNĐ tiền phạt vi phạm hợp đồng."`,
    items: [
      {
        id: "kk-1",
        label: "Xác định chính xác Thẩm quyền Tòa án theo lãnh thổ",
        explanation: "Tòa án nơi Bị đơn cư trú/đặt trụ sở, hoặc Tòa án nơi có Bất động sản đối với tranh chấp bất động sản.",
        riskWarning: "Nộp sai Tòa án sẽ bị chuyển đơn hoặc trả lại đơn gây mất thời gian.",
        categoryTag: "Thẩm quyền"
      },
      {
        id: "kk-2",
        label: "Đơn khởi kiện đúng mẫu quy định của TAND Tối cao",
        explanation: "Sử dụng Mẫu số 23-DS ban hành kèm theo Nghị quyết 01/2017/NQ-HĐTP.",
        riskWarning: "Sử dụng mẫu đơn cũ không đầy đủ thông tin bắt buộc.",
        categoryTag: "Hình thức"
      },
      {
        id: "kk-3",
        label: "Xác nhận địa chỉ cư trú thực tế của Bị đơn",
        explanation: "Xin Giấy xác nhận thông tin về cư trú (Mẫu CT07) hoặc xác nhận của Công an xã/phường.",
        riskWarning: "Tòa án trả lại đơn nếu không ghi đúng địa chỉ Bị đơn.",
        categoryTag: "Đương sự"
      },
      {
        id: "kk-4",
        label: "Bản sao chứng thực Căn cước công dân / Đăng ký kinh doanh",
        explanation: "Kèm theo Giấy ủy quyền (nếu Luật sư làm Đại diện theo ủy quyền).",
        riskWarning: "Ủy quyền thiếu nội dung tham gia hòa giải hoặc nhận lại tài sản.",
        categoryTag: "Đại diện"
      }
    ]
  }
];
