import React from "react";
import { ShieldCheck, Award, FileText, Users, Compass, ArrowRight } from "lucide-react";

interface HeroBannerProps {
  onSelectCategory: (cat: any) => void;
  onOpenAiAssistant: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectCategory, onOpenAiAssistant }) => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Headline & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#282828] border border-[#3E3E3E] text-[#9A8C73] text-[11px] font-bold uppercase tracking-[0.15em]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9A8C73]" />
              <span>Chuyên trang Kỹ năng & Kinh nghiệm Nghề Luật Sư</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-white">
              Biến kiến thức luật thành <span className="italic font-normal text-[#D4CEBF] underline decoration-[#9A8C73] underline-offset-8">Kỹ năng thực chiến</span> sắc bén
            </h1>

            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-2xl">
              Tổng hợp kinh nghiệm nghiệp vụ từ các Luật sư cấp cao về <strong className="text-white font-semibold">Tư vấn Khách hàng</strong>, <strong className="text-white font-semibold">Soạn thảo Hợp đồng</strong>, <strong className="text-white font-semibold">Tranh tụng tại Tòa</strong> và <strong className="text-white font-semibold">Đàm phán Thương mại</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAiAssistant}
                className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F3F1ED] text-[#1A1A1A] font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#1A1A1A]" />
                <span>Hỏi Trợ Lý AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectCategory("Soạn thảo Hợp đồng")}
                className="flex items-center gap-2 px-5 py-3 bg-[#262626] hover:bg-[#333333] text-[#CCCCCC] hover:text-white border border-[#404040] text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#9A8C73]" />
                <span>Kỹ năng Soạn Hợp Đồng</span>
              </button>
            </div>

            {/* Quick Topic Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-[#888888]">
              <span className="font-bold text-[#AAAAAA] uppercase tracking-wider text-[11px]">Chủ đề hot:</span>
              <button 
                onClick={() => onSelectCategory("Soạn thảo Hợp đồng")}
                className="hover:text-white hover:border-[#888888] bg-[#262626] text-[#CCCCCC] px-3 py-1 border border-[#3A3A3A] text-[12px]"
              >
                Phạt vi phạm 8%
              </button>
              <button 
                onClick={() => onSelectCategory("Tư vấn Khách hàng")}
                className="hover:text-white hover:border-[#888888] bg-[#262626] text-[#CCCCCC] px-3 py-1 border border-[#3A3A3A] text-[12px]"
              >
                Báo phí Retainer
              </button>
              <button 
                onClick={() => onSelectCategory("Tranh tụng & Tố tụng")}
                className="hover:text-white hover:border-[#888888] bg-[#262626] text-[#CCCCCC] px-3 py-1 border border-[#3A3A3A] text-[12px]"
              >
                Hỏi nhân chứng tại Tòa
              </button>
              <button 
                onClick={() => onSelectCategory("Đàm phán & Thương lượng")}
                className="hover:text-white hover:border-[#888888] bg-[#262626] text-[#CCCCCC] px-3 py-1 border border-[#3A3A3A] text-[12px]"
              >
                Thỏa thuận Escrow M&A
              </button>
            </div>
          </div>

          {/* Key Metric Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#242424] border border-[#383838] p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#383838]">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9A8C73] font-bold">Chất Lượng Thực Chiến</span>
                <Award className="w-5 h-5 text-[#9A8C73]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#1A1A1A] border border-[#333333]">
                  <div className="text-3xl font-serif text-white">20+</div>
                  <div className="text-xs text-[#888888] mt-1">Bài viết Kỹ năng Thực chiến</div>
                </div>

                <div className="p-4 bg-[#1A1A1A] border border-[#333333]">
                  <div className="text-3xl font-serif text-white">100%</div>
                  <div className="text-xs text-[#888888] mt-1">Đồng hành cùng Luật sư Trưởng</div>
                </div>

                <div className="p-4 bg-[#1A1A1A] border border-[#333333]">
                  <div className="text-3xl font-serif text-white">15+</div>
                  <div className="text-xs text-[#888888] mt-1">Checklists Kiểm tra Văn bản</div>
                </div>

                <div className="p-4 bg-[#1A1A1A] border border-[#333333]">
                  <div className="text-3xl font-serif text-white">AI</div>
                  <div className="text-xs text-[#888888] mt-1">Trợ lý Hỏi đáp Tình huống 24/7</div>
                </div>
              </div>

              <div className="text-xs text-[#888888] pt-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#888888] shrink-0" />
                <span>Dành cho Tập sự, Luật sư Trẻ và Chuyên viên Pháp lý doanh nghiệp.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
