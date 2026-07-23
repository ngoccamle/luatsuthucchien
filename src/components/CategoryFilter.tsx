import React from "react";
import { SkillCategory, ExperienceLevel } from "../types";
import { Filter, Users, Layers } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: SkillCategory;
  onSelectCategory: (category: SkillCategory) => void;
  selectedLevel: ExperienceLevel | "Tất cả trình độ";
  onSelectLevel: (level: ExperienceLevel | "Tất cả trình độ") => void;
  totalResultsCount: number;
}

const CATEGORIES: SkillCategory[] = [
  "Tất cả",
  "Soạn thảo Hợp đồng",
  "Tư vấn Khách hàng",
  "Tranh tụng & Tố tụng",
  "Đàm phán & Thương lượng",
  "Nghiên cứu Pháp lý",
  "Quản lý Hồ sơ & Đạo đức"
];

const LEVELS: (ExperienceLevel | "Tất cả trình độ")[] = [
  "Tất cả trình độ",
  "Tập sự & Luật sư trẻ",
  "Kinh nghiệm trung cấp",
  "Luật sư cao cấp / Trưởng nhóm"
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  totalResultsCount,
}) => {
  return (
    <div className="bg-white border-b border-[#E5E1D8] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Top Category Buttons Scrollable */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#9A8C73] uppercase tracking-[0.15em] pr-3 border-r border-[#E5E1D8] shrink-0">
            <Layers className="w-3.5 h-3.5 text-[#9A8C73]" />
            <span>Chuyên mục:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#1A1A1A] text-white font-bold"
                    : "bg-[#F3F1ED] text-[#555555] hover:bg-[#E5E1D8] hover:text-[#1A1A1A] border border-[#E5E1D8]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Level Filter & Result Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E5E1D8]">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9A8C73] flex items-center gap-1 shrink-0">
              <Users className="w-3.5 h-3.5" />
              <span>Đối tượng:</span>
            </span>

            {LEVELS.map((lvl) => {
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => onSelectLevel(lvl)}
                  className={`px-3 py-1 text-xs transition-all cursor-pointer font-medium ${
                    isSelected
                      ? "bg-[#1A1A1A] text-white font-bold"
                      : "text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F3F1ED]"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#666666] font-medium tracking-wide">
            Hiển thị <span className="font-bold text-[#1A1A1A]">{totalResultsCount}</span> bài viết
          </div>
        </div>

      </div>
    </div>
  );
};
