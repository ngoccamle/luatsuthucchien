import React from "react";
import { Scale, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-[#333333] mt-16 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#333333] pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center text-[#1A1A1A] font-bold">
              <Scale className="w-4 h-4 text-[#1A1A1A]" />
            </div>
            <span className="font-serif italic font-bold text-lg text-white">
              Luật sư thực chiến
            </span>
          </div>

          <div className="text-xs text-[#888888] text-center md:text-right">
            Chia sẻ kỹ năng thực hành nghề luật cho Luật sư tập sự, Luật sư trẻ và Chuyên viên pháp lý.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888888]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#9A8C73] shrink-0" />
            <span>Nội dung mang tính tham khảo chuyên môn nội bộ. Không phải lời khuyên pháp lý chính thức cho vụ việc cụ thể.</span>
          </div>

          <div className="flex items-center gap-1 font-mono text-[11px] text-[#888888] uppercase tracking-wider">
            <span>Luật Sư Thực Hành © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
