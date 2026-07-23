import { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "hop-dong-phat-vi-pham-thuong-thiet",
    title: "Kỹ năng Soạn thảo Điều khoản Phạt vi phạm & Bồi thường thiệt hại: Tránh 5 cạm bẫy vô hiệu",
    subtitle: "Sự khác biệt giữa Luật Thương mại và Bộ luật Dân sự, mức giới hạn phạt 8% và chiến lược gài bẫy bảo vệ quyền lợi doanh nghiệp.",
    category: "Soạn thảo Hợp đồng",
    experienceLevel: "Tập sự & Luật sư trẻ",
    readTime: 8,
    author: {
      name: "Luật sư Nguyễn Văn Hùng",
      title: "Luật sư Thành viên cấp cao",
      lawFirm: "VNH & Partners Law Firm",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    date: "20/07/2026",
    tags: ["Soạn thảo Hợp đồng", "Phạt vi phạm", "Bồi thường thiệt hại", "Tranh chấp thương mại"],
    views: 1420,
    likes: 184,
    isFeatured: true,
    summary: "Trong thực tế tư vấn, rất nhiều luật sư trẻ nhầm lẫn giữa quy định Phạt vi phạm trong Bộ luật Dân sự 2015 và Luật Thương mại 2005, dẫn đến việc điều khoản bị Tòa án tuyên vô hiệu hoặc giảm mức bồi thường.",
    keyTakeaways: [
      "Luật Thương mại khống chế mức phạt vi phạm tối đa 8% giá trị phần nghĩa vụ bị vi phạm (Điều 301).",
      "Bộ luật Dân sự 2015 không khống chế trần phạt vi phạm ngoại trừ hợp đồng xây dựng hoặc thương mại.",
      "Muốn đòi bồi thường thiệt hại trong quan hệ thương mại, hợp đồng BẮT BUỘC phải ghi rõ có áp dụng chế tài bồi thường thiệt hại song song với phạt vi phạm.",
      "Thiệt hại thực tế phải có nghĩa vụ chứng minh bao gồm: giá trị tổn thất thực tế, trực tiếp và khoản lợi trực tiếp đáng lẽ được hưởng."
    ],
    downloadChecklistId: "checklist-hop-dong-thuong-mai",
    contentMarkdown: `
### 1. Đặt vấn đề: Cạm bẫy nhầm lẫn giữa Luật Dân sự & Luật Thương mại

Một trong những sai sót phổ biến nhất của các Chuyên viên Pháp lý và Luật sư tập sự khi soạn thảo Hợp đồng mua bán / cung cấp dịch vụ là ghép chung câu thoại: *"Bên vi phạm sẽ chịu phạt 20% tổng giá trị hợp đồng và bồi thường toàn bộ thiệt hại xảy ra"*.

Khi phát sinh tranh chấp tại Tòa án hoặc Trọng tài, điều khoản này lập tức bị phía bên kia phản bác:
- **Nếu là quan hệ thương mại (giữa hai thương nhân)**: Điều 301 Luật Thương mại 2005 quy định: *"Mức phạt đối với vi phạm nghĩa vụ hợp đồng do các bên thỏa thuận trong hợp đồng, nhưng không quá 8% giá trị phần nghĩa vụ hợp đồng bị vi phạm"*. Mức 20% trên tổng giá trị hợp đồng sẽ bị Tòa án cắt giảm xuống tối đa 8% phần nghĩa vụ vi phạm!
- **Nếu là quan hệ dân sự thông thường**: Bộ luật Dân sự 2015 không quy định trần phạt, ngoại trừ hợp đồng xây dựng (Luật Xây dựng quy định phạt tối đa 12% giá trị hợp đồng bị vi phạm).

---

### 2. Sự kết hợp giữa Phạt vi phạm và Bồi thường thiệt hại

Điều 307 Luật Thương mại 2005 nêu rõ quy tắc vàng:
1. Trừ trường hợp có thỏa thuận khác, bên bị vi phạm **chỉ có quyền yêu cầu bồi thường thiệt hại** nếu các bên không có thỏa thuận về phạt vi phạm.
2. Trường hợp các bên **có thỏa thuận về phạt vi phạm** thì bên bị vi phạm có quyền áp dụng **cả phạt vi phạm và buộc bồi thường thiệt hại**, trừ khi hợp đồng có thỏa thuận khác.

> **Mẹo soạn thảo (Pro-tip):** Luôn tách riêng thành 2 khoản độc lập trong Điều khoản Vi phạm Hợp đồng:
> - **Khoản 1 (Phạt vi phạm):** Quy định rõ tỷ lệ phạt (ví dụ: 8% giá trị phần nghĩa vụ vi phạm đối với Hợp đồng Thương mại).
> - **Khoản 2 (Bồi thường thiệt hại):** Quy định rõ việc áp dụng chế tài phạt vi phạm KHÔNG làm mất đi quyền yêu cầu Bồi thường toàn bộ thiệt hại thực tế phát sinh.

---

### 3. Kỹ thuật cài đặt nghĩa vụ chứng minh thiệt hại

Thiệt hại bao gồm:
- Giá trị tổn thất thực tế, trực tiếp mà bên bị vi phạm phải chịu do bên vi phạm gây ra.
- Khoản lợi trực tiếp mà bên bị vi phạm đáng lẽ được hưởng nếu không có hành vi vi phạm.

**Kỹ năng thực chiến:** Khi bảo vệ bên bị vi phạm, bạn phải hướng dẫn khách hàng lưu giữ ngay lập tức:
1. Hóa đơn, chứng từ thanh toán cho bên thứ ba để khắc phục sự cố.
2. Các hợp đồng với đối tác tiếp theo bị hủy chuyến/bị phạt cọc do ảnh hưởng dây chuyền.
3. Văn bản lập biên bản xác nhận vi phạm có chữ ký của đại diện hai bên ngay tại thời điểm xảy ra vụ việc.

---

### 4. Mẫu điều khoản chuẩn tham khảo cho Luật sư

\`\`\`text
Điều X: Trách nhiệm do vi phạm hợp đồng
X.1 Phạt vi phạm: Nếu Bên B vi phạm bất kỳ nghĩa vụ nào theo Hợp đồng này, Bên A có quyền yêu cầu Bên B chịu phạt vi phạm bằng 8% (tám phần trăm) giá trị phần nghĩa vụ hợp đồng bị vi phạm.

X.2 Bồi thường thiệt hại: Việc thanh toán tiền phạt vi phạm nêu tại Khoản X.1 không miễn trừ cho Bên B nghĩa vụ Bồi thường toàn bộ thiệt hại thực tế, trực tiếp và các khoản lợi trực tiếp bị bỏ lỡ mà Bên A phải chịu do hành vi vi phạm của Bên B gây ra.

X.3 Thời hạn thanh toán: Tiền phạt và tiền bồi thường thiệt hại phải được chuyển khoản vào tài khoản của Bên A trong vòng 10 (mười) ngày làm việc kể từ khi nhận được Văn bản yêu cầu.
\`\`\`
`
  },
  {
    id: "ky-nang-tiep-xuc-khach-hang-lan-dau",
    title: "Kỹ năng Khai thác thông tin & Tiếp xúc khách hàng lần đầu: Từ hoài nghi đến chốt Retainer",
    subtitle: "Bộ 7 câu hỏi vàng giúp xác định đúng nhu cầu cốt lõi, đánh giá tính khả thi pháp lý và đàm phán thù lao hợp lý.",
    category: "Tư vấn Khách hàng",
    experienceLevel: "Tập sự & Luật sư trẻ",
    readTime: 10,
    author: {
      name: "Luật sư Trần Thị Mai Phương",
      title: "Luật sư Trưởng phòng Tư vấn Doanh nghiệp",
      lawFirm: "Phương Đông Legal",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    date: "18/07/2026",
    tags: ["Tư vấn Khách hàng", "Thương lượng Hợp đồng dịch vụ", "Kỹ năng giao tiếp", "Retainer Fee"],
    views: 2150,
    likes: 310,
    summary: "Buổi gặp mặt đầu tiên quyết định 80% khả năng khách hàng có ký hợp đồng dịch vụ pháp lý với bạn hay không. Đừng vội vàng trả lời ngay câu hỏi 'Vụ này thắng chắc không Luật sư?'!",
    keyTakeaways: [
      "Không bao giờ hứa hẹn kết quả 'Thắng chắc 100%' - đây vừa là vi phạm Quy tắc Đạo đức Nghề nghiệp vừa tạo rủi ro pháp lý.",
      "Áp dụng nguyên tắc 80/20: Dành 80% thời gian để lắng nghe và đặt câu hỏi gợi mở, 20% để tóm tắt và đưa ra định hướng.",
      "Phân biệt rõ giữa 'Điều khách hàng Muốn' (Want) và 'Sự thật Pháp lý có thể Đạt được' (Reality).",
      "Kỹ thuật báo phí retainer: Đưa ra 2-3 gói tùy chọn dịch vụ thay vì chỉ phát ra 1 con số duy nhất."
    ],
    downloadChecklistId: "checklist-tiep-xuc-khach-hang",
    contentMarkdown: `
### 1. Sai lầm phổ biến của Luật sư trẻ khi gặp Khách hàng

Khi khách hàng vừa ngồi xuống và trình bày vụ việc tranh chấp đất đai hay nợ nần, luật sư trẻ thường mắc 2 thái cực:
1. **Thái cực 1:** Nghe xong lập tức phán đoán ngay điều khoản luật, trích dẫn vội vã mà chưa đọc kỹ hồ sơ giấy tờ.
2. **Thái cực 2:** Sợ hãi không dám đưa ra nhận định sơ bộ, khiến khách hàng cảm thấy luật sư thiếu bản lĩnh và chuyên môn.

---

### 2. Quy trình 4 bước chuẩn hóa buổi tư vấn đầu tiên (First Consultation)

#### Bước 1: Thiết lập không gian và tính bảo mật (Confidentiality)
Hãy bắt đầu bằng câu nói:
> *"Mọi thông tin ông/bà chia sẻ trong buổi làm việc hôm nay đều được bảo mật tuyệt đối theo Quy tắc Đạo đức Nghề nghiệp Luật sư. Ông/bà có thể hoàn toàn yên tâm chia sẻ trung thực toàn bộ diễn biến, kể cả những chi tiết bất lợi nhất."*

#### Bước 2: Đặt 7 câu hỏi khai thác thông tin cốt lõi
1. **Câu hỏi diễn biến:** *"Tóm tắt ngắn gọn sự việc xảy ra từ mốc thời điểm nào?"*
2. **Câu hỏi hồ sơ:** *"Hiện tại ông/bà đang nắm giữ những tài liệu/chứng cứ gốc nào?"*
3. **Câu hỏi mục tiêu:** *"Mục tiêu mong muốn lớn nhất của ông/bà khi tìm đến Luật sư là gì? (Lấy lại tiền, bảo vệ danh dự, hay chỉ muốn kéo dài thời gian?)"*
4. **Câu hỏi lịch sử:** *"Trước khi gặp tôi, ông/bà đã gửi đơn thư hay làm việc với cơ quan chức năng/đối phương chưa?"*
5. **Câu hỏi điểm yếu:** *"Theo ông/bà, phía đối phương có thể vin vào lý do gì để phản bác lại chúng ta?"*
6. **Câu hỏi ngân sách & thời gian:** *"Ông/bà sẵn sàng đầu tư thời gian và nguồn lực trong bao lâu cho vụ việc này?"*
7. **Câu hỏi kỳ vọng:** *"Nếu kết quả đạt được 70-80% so với mong đợi, ông/bà có chấp nhận thương lượng hòa giải không?"*

---

### 3. Cách ứng xử với câu hỏi bẫy: "Vụ này thắng chắc bao nhiêu %?"

Quy tắc 9 Quy tắc Đạo đức và Ứng xử Nghề nghiệp Luật sư Việt Nam nghiêm cấm luật sư cam kết kết quả vụ việc. 

**Mẫu câu trả lời chuyên nghiệp:**
> *"Trong nghề luật, không có vụ kiện nào có kết quả 100% khi chưa có bản án hiệu lực của Tòa án. Nghĩa vụ của tôi là đánh giá trung thực các căn cứ pháp lý, rủi ro và xây dựng phương án tối ưu nhất. Dựa trên hồ sơ hiện có, chúng ta có 3 thế mạnh pháp lý A, B, C và 2 điểm rủi ro D, E cần khắc phục..."*

---

### 4. Kỹ thuật đàm phán Phí dịch vụ pháp lý (Fee Pitching)

Đừng đưa ra một con số duy nhất khiến khách hàng chỉ có lựa chọn "Đồng ý" hoặc "Từ chối". Hãy xây dựng **Option Matrix**:

| Gói Dịch Vụ | Phạm Vi Công Việc | Cơ Cấu Phí |
| :--- | :--- | :--- |
| **Gói 1: Tư vấn & Xây dựng Hồ sơ** | Nguồn tư vấn, soạn đơn khởi kiện, hướng dẫn thu thập chứng cứ | Phí cố định (Fixed Fee) |
| **Gói 2: Đại diện Tranh tụng Toàn diện** | Bao gồm Gói 1 + Luật sư tham gia làm việc với Tòa & Phiên tòa | Phí cố định + Phí thưởng theo kết quả (Success Fee) |
| **Gói 3: Cố vấn Chiến lược theo Giờ** | Tư vấn chuyên sâu theo giờ cho Doanh nghiệp | Hourly Rate ($100 - $200/h) |
`
  },
  {
    id: "ky-nang-hoi-nhan-chung-tai-phien-toa",
    title: "Kỹ năng Xét hỏi Nhân chứng & Đối đáp tại Phiên tòa Dân sự: Nghệ thuật Cross-Examination",
    subtitle: "Làm thế nào để bộc lộ mâu thuẫn trong lời khai của nhân chứng đối phương mà không bị Hội đồng Xét xử ngắt lời.",
    category: "Tranh tụng & Tố tụng",
    experienceLevel: "Kinh nghiệm trung cấp",
    readTime: 12,
    author: {
      name: "Luật sư Lê Hoàng Nam",
      title: "Chủ nhiệm Ban Tranh tụng",
      lawFirm: "Nam Ha Legal & Partners",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    date: "15/07/2026",
    tags: ["Tranh tụng", "Hỏi nhân chứng", "Phiên tòa dân sự", "Đối đáp Tòa án"],
    views: 3100,
    likes: 425,
    summary: "Hỏi nhân chứng tại Tòa án Việt Nam đòi hỏi sự tinh tế vượt trội so với phim ảnh nước ngoài. Một câu hỏi sai lầm có thể tạo cơ hội cho nhân chứng đối phương hợp thức hóa lời khai gian dối!",
    keyTakeaways: [
      "Chỉ đặt những câu hỏi mà bạn ĐÃ BIẾT TRƯỚC câu trả lời dựa trên tài liệu hồ sơ.",
      "Sử dụng câu hỏi đóng (Có/Không, Đúng/Sai) khi xét hỏi nhân chứng đối phương để kiểm soát diễn biến.",
      "Ngăn chặn nhân chứng giải thích dài dòng bằng cách nhắc nhở câu hỏi trọng tâm.",
      "Khi nhân chứng bất ngờ thay đổi lời khai so với Biên bản làm việc tại Cơ quan Điều tra/Tòa án, lập tức đề nghị HĐXX công bố công khai biên bản cũ."
    ],
    downloadChecklistId: "checklist-tranh-tung-phien-toa",
    contentMarkdown: `
### 1. Thực trạng xét hỏi tại Phiên tòa Dân sự Việt Nam

Nhiều Luật sư khi tham gia phiên tòa thường soạn sẵn một danh sách câu hỏi dài hàng trang giấy và đọc nguyên văn. HĐXX thường ngắt lời với lý do: *"Câu hỏi này đã có trong hồ sơ, đề nghị Luật sư chuyển sang câu hỏi khác"*.

Để xét hỏi hiệu quả, bạn phải phân biệt 2 nhóm câu hỏi:
- **Câu hỏi mở (Direct Examination):** Dành cho nhân chứng/nguyên đơn phía mình nhằm làm rõ tình tiết có lợi.
- **Câu hỏi xoáy/đóng (Cross Examination):** Dành cho nhân chứng/bị đơn phía đối phương nhằm bóc tách mâu thuẫn.

---

### 2. Quy tắc Vàng: Không đặt câu hỏi mà bạn chưa biết câu trả lời

Một luật sư trẻ hỏi nhân chứng đối phương: *"Tại sao ông lại có mặt tại văn phòng lúc 22h đêm đó?"*. 
Nhân chứng đáp: *"Vì ông Giám đốc bên Luật sư gọi điện đe dọa ép tôi đến!"* -> Luật sư tự đưa mình vào thế gậy ông đập lưng ông!

**Cách hỏi đúng chuẩn:**
1. *"Vào thời điểm 22h ngày 15/3, ông có mặt tại văn phòng đúng không?"* -> *"Đúng"*.
2. *"Thời điểm đó văn phòng đã khóa cửa ngoài đúng không?"* -> *"Đúng"*.
3. *"Theo Biên bản làm việc ngày 20/4 với Thẩm phán, ông khai ông đứng ngoài cửa sổ tầng 3 đúng không?"* -> *"Đúng"*.
4. *"Bản vẽ thiết kế tòa nhà thể hiện tầng 3 không có ban công ngoài cửa sổ đúng không?"* -> **Đã chốt xong mâu thuẫn, ngưng hỏi ngay lập tức!**

---

### 3. Kỹ thuật xử lý khi Nhân chứng ngoan cố hoặc trả lời né tránh

Khi nhân chứng trả lời: *"Tôi không nhớ rõ"* hoặc *"Chuyện xảy ra lâu rồi"*:
- **Bước 1:** Trích dẫn tài liệu: *"Tôi xin phép HĐXX dẫn chiếu Bộ hồ sơ chứng cứ trang 45..."*
- **Bước 2:** Đặt câu hỏi khẳng định mốc thời gian: *"Nghĩa là tại thời điểm lập văn bản này năm 2024, trí nhớ của ông chính xác hơn hiện tại đúng không?"*
- **Bước 3:** Chốt sự thật vào biên bản phiên tòa.

---

### 4. Bảng so sánh Chiến lược Xét hỏi

| Tiêu chí | Nhân chứng Bên Mình | Nhân chứng Bên Đối Phương |
| :--- | :--- | :--- |
| **Dạng câu hỏi** | Mở (Như thế nào, Lúc nào, Vì sao) | Đóng (Có/Không, Đúng/Sai) |
| **Mục đích** | Bổ sung chi tiết, tăng độ tin cậy | Tìm điểm bất hợp lý, làm giảm độ tin cậy |
| **Tốc độ hỏi** | Thong thả, để nhân chứng trình bày tự nhiên | Nhanh, dồn dập, không cho thời gian bịa đặt |
`
  },
  {
    id: "ky-nang-dam-phan-mna-hop-dong",
    title: "Kỹ năng Đàm phán Điều khoản Bảo đảm & Rủi ro trong Hợp đồng M&A Doanh nghiệp",
    subtitle: "Cách thiết lập cơ chế Escrow Account, Earn-out và W&I (Representations & Warranties) giúp bảo toàn vốn cho Bên Mua.",
    category: "Đàm phán & Thương lượng",
    experienceLevel: "Luật sư cao cấp / Trưởng nhóm",
    readTime: 11,
    author: {
      name: "Luật sư Đặng Minh Khôi",
      title: "Luật sư Điều hành",
      lawFirm: "Apex Global Law Firm",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    date: "12/07/2026",
    tags: ["Đàm phán", "M&A", "Hợp đồng mua bán doanh nghiệp", "Escrow"],
    views: 1890,
    likes: 270,
    summary: "Thương vụ M&A chỉ thật sự thành công khi rủi ro thuế và nợ ẩn (Hidden Liabilities) sau mua bán được kiểm soát tối đa bằng các điều khoản đàm phán sắc bén.",
    keyTakeaways: [
      "Sử dụng Tài khoản phong tỏa (Escrow Account) giữ lại 10-20% giá trị giao dịch trong 12-24 tháng sau Closing.",
      "Xây dựng danh mục Cam đoan & Bảo đảm (R&W) chi tiết đến từng khoản nợ thuế, bảo hiểm xã hội và tranh chấp lao động tiềm ẩn.",
      "Cơ chế Earn-out giúp điều chỉnh giá mua dựa trên doanh thu thực tế của công ty mục tiêu sau chuyển nhượng."
    ],
    downloadChecklistId: "checklist-mna-doanh-nghiep",
    contentMarkdown: `
### 1. Bản chất của cuộc đàm phán M&A: Bất cân xứng thông tin

Trong mua bán doanh nghiệp, Bên Bán luôn biết rõ những "vết nứt" tiềm ẩn trong công ty (nợ thuế chưa quyết toán, tranh chấp bản quyền phần mềm, hợp đồng lao động trái luật). Bên Mua chỉ nhìn thấy báo cáo tài chính đẹp đẽ.

Nhiệm vụ của Luật sư Bên Mua là đưa ra cấu trúc đàm phán **Cân bằng rủi ro (Risk Allocation Mechanisms)**.

---

### 2. Ba công cụ điều khoản bảo vệ cốt lõi

#### 1. Cam đoan và Bảo đảm (Representations & Warranties - R&W)
Luật sư phải yêu cầu Bên Bán cam đoan chi tiết:
- Công ty không có nghĩa vụ nợ thuế phát sinh ngoài Báo cáo tài chính đã kiểm toán.
- Không có bất kỳ khiếu nại, khiếu kiện nào của người lao động hoặc bên thứ ba chưa được công bố.

#### 2. Cơ chế Tài khoản Phong tỏa (Escrow Account)
Thay vì thanh toán 100% tiền mua cổ phần cho Bên Bán tại Ngày Hoàn tất (Closing Date):
- Thanh toán 80% ngay tại Closing.
- 20% còn lại gửi vào Tài khoản Phong tỏa (Escrow) mở tại Ngân hàng Thương mại. Số tiền này sẽ được giải tỏa sau 12-18 tháng nếu không phát sinh chi phí bồi thường nợ ẩn.

#### 3. Cam kết Giữ chân Nhân sự Cốt cán (Key Person Retention)
Trong các công ty công nghệ hoặc dịch vụ, giá trị nằm ở con người. Luật sư cần đàm phán hợp đồng lao động cam kết làm việc tối thiểu 3 năm đối với Đội ngũ Sáng lập (Founders) đi kèm điều khoản Cấm cạnh tranh (Non-compete Clause).
`
  },
  {
    id: "phuong-phap-nghien-cuu-an-le-hieu-qua",
    title: "Phương pháp Tra cứu & Áp dụng Án lệ tại Việt Nam: Từ Lý thuyết đến Luận cứ Tranh tụng",
    subtitle: "Cách trích dẫn Án lệ chuẩn xác khiến Hội đồng Xét xử chấp nhận và áp dụng vào bản án.",
    category: "Nghiên cứu Pháp lý",
    experienceLevel: "Tập sự & Luật sư trẻ",
    readTime: 7,
    author: {
      name: "ThS. Luật sư Lê Thanh Tùng",
      title: "Chuyên gia Nghiên cứu & Tranh tụng",
      lawFirm: "LexVietnam Research",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    date: "08/07/2026",
    tags: ["Nghiên cứu Pháp lý", "Án lệ", "Luận cứ tranh tụng", "Tòa án tối cao"],
    views: 1650,
    likes: 210,
    summary: "Mặc dù Án lệ đã được Tòa án Nhân dân Tối cao công bố rộng rãi, nhiều luật sư vẫn trích dẫn án lệ một cách hình thức mà không phân tích tính tương đồng của tình huống thực tế.",
    keyTakeaways: [
      "Xác định rõ 'Khái quát nội dung án lệ' và 'Quy tắc pháp lý' được rút ra.",
      "So sánh chi tiết 3 yếu tố: Tình tiết sự việc, Bản chất pháp lý, và Quy định pháp luật áp dụng giữa vụ việc của bạn và Án lệ.",
      "Luôn viện dẫn số Án lệ, Nghị quyết công bố và tình tiết tương đồng ngay trong phần mở đầu Luận cứ."
    ],
    downloadChecklistId: "checklist-nghien-cuu-an-le",
    contentMarkdown: `
### 1. Án lệ không phải là văn bản quy phạm pháp luật nhưng có giá trị bắt buộc

Theo Nghị quyết 04/2019/NQ-HĐTP của Hội đồng Thẩm phán TAND Tối cao: Thẩm phán, Hội đồng xét xử phải nghiên cứu, áp dụng án lệ để giải quyết vụ việc. Trường hợp không áp dụng án lệ thì phải nêu rõ lý do trong bản án.

---

### 2. Quy trình 4 bước viện dẫn Án lệ thuyết phục Tòa án

1. **Bước 1: Tra cứu theo từ khóa tình tiết cốt lõi (Fact-based search)**
   Đừng tìm theo tên tội danh chung chung. Hãy tìm theo hành vi cụ thể (ví dụ: *"chuyển nhượng đất khi chưa có sổ đỏ nhưng đã trả đủ tiền"*, *"đòi lại tài sản do người khác đứng tên giùm"*).
2. **Bước 2: Phân tích Quy tắc pháp lý (Legal Ratio)**
   Trích xuất đúng câu từ mang tính nguyên tắc mà Tòa án Tối cao đã kết luận.
3. **Bước 3: Lập Bảng So sánh Tương đồng (Fact Analogy Table)**
   Trình bày dưới dạng biểu bảng gửi kèm Luận cứ cho Thẩm phán.
4. **Bước 4: Đưa ra đề nghị áp dụng**
   Trình bày luận điểm: *"Do tình tiết vụ án hoàn toàn tương đồng với Án lệ số XY/202X/AL, kính đề nghị HĐXX áp dụng quy tắc pháp lý của Án lệ số XY để tuyên phán quyết..."*
`
  },
  {
    id: "quan-ly-ho-so-bao-mat-thong-tin",
    title: "Quản lý Hồ sơ Vụ án & Bảo mật Thông tin Khách hàng: Quy chuẩn thực hành Yêu cầu cho Luật sư",
    subtitle: "Xây dựng hệ thống lưu trữ hồ sơ song song (Physical & Digital) và bảo vệ bí mật kinh doanh.",
    category: "Quản lý Hồ sơ & Đạo đức",
    experienceLevel: "Tập sự & Luật sư trẻ",
    readTime: 6,
    author: {
      name: "Luật sư Hoàng Bích Ngọc",
      title: "Luật sư Quản hành",
      lawFirm: "Ngọc & Associates",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    date: "05/07/2026",
    tags: ["Quản lý hồ sơ", "Đạo đức nghề nghiệp", "Bảo mật thông tin", "Case Management"],
    views: 1280,
    likes: 165,
    summary: "Rò rỉ hồ sơ khách hàng không chỉ phá hủy uy tín cá nhân luật sư mà còn có thể bị truy cứu trách nhiệm hình sự hoặc xử lý kỷ luật từ Đoàn Luật sư.",
    keyTakeaways: [
      "Luôn lập Biên bản giao nhận giấy tờ gốc có chữ ký xác nhận của khách hàng.",
      "Đặt mã mã hóa cho file kỹ thuật số và hạn chế quyền truy cập folder hồ sơ trong nội bộ tổ chức hành nghề.",
      "Quy trình bàn giao và tiêu hủy hồ sơ hết thời hạn lưu trữ theo luật định."
    ],
    downloadChecklistId: "checklist-quan-ly-ho-so",
    contentMarkdown: `
### 1. Nguyên tắc cốt lõi: Không bao giờ giữ tài liệu gốc nếu không có biên bản

Rất nhiều luật sư gặp rắc rối khi khách hàng đổ lỗi: *"Tôi đã đưa cho Luật sư giấy chứng nhận quyền sử dụng đất gốc rồi sao giờ không thấy?"*.

**Quy tắc bất di bất dịch:**
- Luôn photo/scan tài liệu gốc ngay khi tiếp nhận.
- Trả lại bản gốc cho khách hàng nếu Tòa/Cơ quan chức năng chỉ yêu cầu đối chiếu.
- Nếu phải giữ bản gốc: Lập Biên bản giao nhận chứng cứ có số lượng trang, tình trạng tài liệu và chữ ký tươi của cả hai bên.

---

### 2. Số hóa hồ sơ theo mã định danh vụ việc (Case ID System)

Đặt tên thư mục theo chuẩn chuyên nghiệp:
\`\`\`text
[Năm]_[Mã Vụ Việc]_[Tên Khách Hàng]_[Nội Dung]
Ví dụ: 2026_DS04_NguyenVanA_TranhChapDatDai
  ├── 01_HoSoPhapLy_KhachHang
  ├── 02_ChungCu_Goc
  ├── 03_VanBan_ToTung_DaNop
  ├── 04_LuanCu_Va_NghienCuuPhapLy
  └── 05_TraoDoi_Email_Zalo
\`\`\`
`
  },
  {
    id: "ky-nang-soan-van-ban-khieu-nai-to-tung",
    title: "Kỹ năng Soạn thảo Đơn Khởi kiện & Văn bản Tố tụng: Đỉnh cao thuyết phục Thẩm phán",
    subtitle: "Cấu trúc 5 phần chuẩn mực giúp đơn khởi kiện không bị trả lại và rút ngắn thời gian thụ lý.",
    category: "Soạn thảo Hợp đồng",
    experienceLevel: "Kinh nghiệm trung cấp",
    readTime: 9,
    author: {
      name: "Luật sư Nguyễn Văn Hùng",
      title: "Luật sư Thành viên cấp cao",
      lawFirm: "VNH & Partners Law Firm",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    date: "01/07/2026",
    tags: ["Đơn khởi kiện", "Văn bản tố tụng", "Tố tụng dân sự", "Thẩm phán"],
    views: 2400,
    likes: 340,
    summary: "Thẩm phán xử lý hàng trăm vụ án mỗi năm. Một đơn khởi kiện dài dòng, lan man, thiếu căn cứ pháp lý sẽ khiến Tòa án kéo dài thời gian sửa đổi bổ sung đơn.",
    keyTakeaways: [
      "Mở đầu bằng tóm tắt quan hệ tranh chấp trong 3 dòng đầu tiên.",
      "Dẫn chiếu từng yêu cầu khởi kiện tương ứng với danh mục chứng cứ kèm theo (Phụ lục chứng cứ).",
      "Phân định rõ ràng giữa Thẩm quyền theo Tòa án, Thời hiệu khởi kiện và Tư cách tố tụng của các bên."
    ],
    downloadChecklistId: "checklist-khoi-kien-dan-su",
    contentMarkdown: `
### 1. Tại sao Đơn khởi kiện hay bị Tòa án trả lại?

Các lý do trả lại đơn khởi kiện phổ biến nhất theo Điều 192 Bộ luật Tố tụng Dân sự 2015:
1. Người khởi kiện không có quyền khởi kiện hoặc không đủ năng lực hành vi.
2. Chưa đủ điều kiện khởi kiện (ví dụ: Tranh chấp đất đai chưa qua hòa giải tại UBND cấp xã).
3. Vụ án không thuộc thẩm quyền giải quyết của Tòa án.
4. Đơn khởi kiện không ghi đúng, ghi đủ địa chỉ của người bị kiện.

---

### 2. Bố cục 5 phần chuẩn hóa cho Đơn Khởi kiện Dân sự

- **Phần 1: Thông tin Đương sự & Thẩm quyền Tòa án:** Xác định chính xác Tòa án Nhân dân cấp huyện/tỉnh có thẩm quyền theo nơi cư trú của Bị đơn hoặc nơi có bất động sản.
- **Phần 2: Tóm tắt Diễn biến Sự việc (Chronological Facts):** Trình bày sự việc theo thứ tự mốc thời gian rõ ràng.
- **Phần 3: Căn cứ Pháp lý khẳng định Hành vi Vi phạm (Legal Grounds):** Trích dẫn cụ thể điều khoản luật bị vi phạm.
- **Phần 4: Các Yêu cầu Khởi kiện Cụ thể (Specific Relief):** Liệt kê con số chính xác (Tiền gốc, tiền lãi, phí phạt...).
- **Phần 5: Danh mục Phụ lục Chứng cứ kèm theo (Exhibits Index):** Đánh số thứ tự từ Phụ lục 01 đến Phụ lục N.
`
  }
];
