import { PracticalScenario } from "../types";

export const PRACTICAL_SCENARIOS: PracticalScenario[] = [
  {
    id: "scen-1",
    title: "Tình huống 1: Khách hàng yêu cầu Luật sư giấu chứng cứ bất lợi trong vụ tranh chấp hợp đồng",
    category: "Quản lý Hồ sơ & Đạo đức",
    difficulty: "Tập sự & Luật sư trẻ",
    context: "Bạn đang đại diện cho Bên Mua (Công ty A) trong vụ tranh chấp Hợp đồng cung cấp thiết bị trị giá 5 tỷ đồng. Trong quá trình rà soát file email nội bộ do Giám đốc cung cấp, bạn phát hiện 1 email Giám đốc Công ty A đã xác nhận thừa nhận hàng hóa đợt 1 bị lỗi kỹ thuật do lỗi vận hành của Bên A (chứ không phải do lỗi nhà sản xuất Bên B như đơn khởi kiện trình bày). Giám đốc yêu cầu bạn xóa bỏ email này khỏi hồ sơ nộp Tòa.",
    clientGoal: "Thắng kiện 100%, buộc Bên B bồi thường thiệt hại và hủy email bất lợi.",
    legalConflict: "Quy tắc 11 & 14 Quy tắc Đạo đức Nghề nghiệp Luật sư nghiêm cấm luật sư tiêu hủy, làm sai lệch chứng cứ hoặc hỗ trợ khách hàng thực hiện hành vi trái pháp luật.",
    partnerAdvice: "Sự trung thực với Tòa án là sinh mệnh nghề nghiệp của Luật sư. Giấu chứng cứ không làm nó biến mất vì Bên B hoàn toàn có thể trích xuất log server hoặc nộp bản sao. Hãy chủ động điều chỉnh chiến lược tranh tụng sang đàm phán giảm bồi thườngThay vì cố tình che giấu.",
    options: [
      {
        id: "opt-1",
        choiceText: "Làm theo yêu cầu của Khách hàng, không nộp email này vào tập chứng cứ gửi Tòa án.",
        feedback: "Rất rủi ro! Nếu Bên B cung cấp được email này từ máy chủ của họ, bạn và khách hàng sẽ mất hoàn toàn uy tín trước Hội đồng xét xử. Khách hàng có thể bị phạt vì vi phạm nghĩa vụ cung cấp chứng cứ.",
        isRecommended: false,
        scoreExplanation: "Vi phạm nghĩa vụ tôn trọng sự thật khách quan và Quy tắc đạo đức nghề nghiệp."
      },
      {
        id: "opt-2",
        choiceText: "Giải thích rủi ro pháp lý cho Giám đốc, từ chối xóa chứng cứ và tư vấn chuyển hướng đàm phán hòa giải với Bên B.",
        feedback: "Chính xác tuyệt đối! Bạn vừa tuân thủ đạo đức nghề nghiệp, vừa bảo vệ khách hàng khỏi thảm họa tranh tụng nếu sự thật bị phanh phui tại phiên tòa.",
        isRecommended: true,
        scoreExplanation: "Đạt chuẩn bản lĩnh Luật sư: Tư vấn trung thực, thượng tôn pháp luật và chuyển hướng chiến lược khôn khéo."
      },
      {
        id: "opt-3",
        choiceText: "Đơn phương đơn thư từ chối đại diện và chấm dứt hợp đồng dịch vụ pháp lý ngay lập tức mà không giải thích.",
        feedback: "Chưa tối ưu. Luật sư cần giải thích lý do và tư vấn cho khách hàng hiểu trước khi quyết định đơn phương chấm dứt hợp đồng.",
        isRecommended: false,
        scoreExplanation: "Rút lui quá sớm khi chưa thực hiện nghĩa vụ giải thích rủi ro cho khách hàng."
      }
    ]
  },
  {
    id: "scen-2",
    title: "Tình huống 2: Đàm phán phạt vi phạm 20% trong Hợp đồng Dịch vụ Truyền thông",
    category: "Soạn thảo Hợp đồng",
    difficulty: "Kinh nghiệm trung cấp",
    context: "Bạn là Luật sư tư vấn cho Công ty X (Bên Thuê dịch vụ truyền thông). Phía Bên Y (Đơn vị Agency) gửi dự thảo hợp đồng dịch vụ trị giá 2 tỷ đồng, trong đó Điều 8 quy định: 'Nếu Bên X chậm thanh toán đợt 2 quá 5 ngày, Bên X chịu phạt vi phạm bằng 20% tổng giá trị hợp đồng (tương đương 400 triệu đồng)'.",
    clientGoal: "Bảo vệ Bên X khỏi mức phạt quá cao và đảm bảo hợp đồng hợp pháp.",
    legalConflict: "Theo Luật Thương mại 2005 (Điều 301), mức phạt vi phạm giữa hai thương nhân bị khống chế tối đa 8% giá trị phần nghĩa vụ bị vi phạm.",
    partnerAdvice: "Luật sư giỏi không chỉ phán 'Điều khoản này vi phạm luật' mà phải đưa ra phương án thay thế có lợi cho khách hàng mà phía đối phương vẫn chấp nhận được.",
    options: [
      {
        id: "opt-1",
        choiceText: "Chấp nhận giữ nguyên 20% vì khách hàng tự tin sẽ không thanh toán chậm.",
        feedback: "Rất nguy hiểm! Dù khách hàng tự tin, rủi ro biến động dòng tiền hoặc sự cố kỹ thuật ngân hàng hoàn toàn có thể xảy ra.",
        isRecommended: false,
        scoreExplanation: "Bỏ qua rủi ro hợp đồng nghiêm trọng."
      },
      {
        id: "opt-2",
        choiceText: "Yêu cầu sửa thành 8% tính trên số tiền đợt 2 bị chậm thanh toán (đúng Điều 301 Luật Thương mại), đồng thời bổ sung lãi chậm trả theo lãi suất ngân hàng.",
        feedback: "Xuất sắc! Việc sửa thành 8% tính trên 'phần nghĩa vụ bị vi phạm' (đợt 2) vừa đảm bảo hợp pháp vừa giảm mức phạt tối đa xuống hàng chục lần.",
        isRecommended: true,
        scoreExplanation: "Nắm vững quy định Luật Thương mại và áp dụng chuẩn xác vào đàm phán."
      },
      {
        id: "opt-3",
        choiceText: "Xóa bỏ hoàn toàn Điều khoản Phạt vi phạm ra khỏi hợp đồng.",
        feedback: "Thiếu tính khả thi đàm phán. Agency chắc chắn sẽ từ chối vì họ cần cơ chế bảo vệ dòng tiền.",
        isRecommended: false,
        scoreExplanation: "Phương án cực đoan làm tắc nghẽn đàm phán hợp đồng."
      }
    ]
  }
];
