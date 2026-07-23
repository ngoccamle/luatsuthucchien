import React from "react";
import { Scale, BookOpen, CheckSquare, BrainCircuit, Bookmark, Search, Sparkles } from "lucide-react";

interface NavbarProps {
  activeTab: "blog" | "checklists" | "scenarios" | "ai-assistant" | "saved";
  setActiveTab: (tab: "blog" | "checklists" | "scenarios" | "ai-assistant" | "saved") => void;
  savedCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#E5E1D8] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab("blog")}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 bg-[#1A1A1A] flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif italic font-bold text-xl tracking-tight text-[#1A1A1A]">
                  Luật sư thực chiến
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#9A8C73] border border-[#E5E1D8] px-1.5 py-0.5 bg-[#FAF9F6]">
                  Legal Skills
                </span>
              </div>
              <p className="text-[11px] text-[#666666] tracking-wide hidden sm:block">Chuyên trang kỹ năng & kinh nghiệm nghề luật</p>
            </div>
          </div>

          {/* Quick Search Input (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
              <input
                type="text"
                placeholder="Tìm bài viết, kỹ năng, điều khoản, vụ án..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== "blog") setActiveTab("blog");
                }}
                className="w-full bg-[#F3F1ED] text-[#1A1A1A] placeholder-[#888888] text-xs rounded-none pl-9 pr-4 py-2 border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#1A1A1A]"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="flex items-center gap-2 sm:gap-6 text-[12px] sm:text-[13px] uppercase tracking-[0.12em] font-medium">
            <button
              onClick={() => setActiveTab("blog")}
              className={`py-2 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "blog"
                  ? "text-[#1A1A1A] border-[#1A1A1A] font-bold"
                  : "text-[#666666] border-transparent hover:text-[#1A1A1A]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bài viết & Kỹ năng</span>
              <span className="sm:hidden">Bài viết</span>
            </button>

            <button
              onClick={() => setActiveTab("checklists")}
              className={`py-2 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "checklists"
                  ? "text-[#1A1A1A] border-[#1A1A1A] font-bold"
                  : "text-[#666666] border-transparent hover:text-[#1A1A1A]"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Checklists</span>
              <span className="sm:hidden">Checklist</span>
            </button>

            <button
              onClick={() => setActiveTab("scenarios")}
              className={`py-2 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "scenarios"
                  ? "text-[#1A1A1A] border-[#1A1A1A] font-bold"
                  : "text-[#666666] border-transparent hover:text-[#1A1A1A]"
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5 text-[#9A8C73]" />
              <span className="hidden md:inline">Tình huống</span>
              <span className="md:hidden">Tình huống</span>
            </button>

            <button
              onClick={() => setActiveTab("ai-assistant")}
              className={`py-2 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "ai-assistant"
                  ? "text-[#1A1A1A] border-[#1A1A1A] font-bold"
                  : "text-[#666666] border-transparent hover:text-[#1A1A1A]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9A8C73]" />
              <span className="hidden sm:inline">Trợ lý AI</span>
              <span className="sm:hidden">AI</span>
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`relative py-2 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "saved"
                  ? "text-[#1A1A1A] border-[#1A1A1A] font-bold"
                  : "text-[#666666] border-transparent hover:text-[#1A1A1A]"
              }`}
              title="Bài viết đã lưu"
            >
              <Bookmark className="w-3.5 h-3.5" />
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#1A1A1A] text-white font-mono text-[10px]">
                  {savedCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
            <input
              type="text"
              placeholder="Tìm bài viết, kỹ năng, điều khoản..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== "blog") setActiveTab("blog");
              }}
              className="w-full bg-[#F3F1ED] text-[#1A1A1A] placeholder-[#888888] text-xs pl-9 pr-4 py-2 border border-[#E5E1D8] focus:outline-none focus:border-[#1A1A1A]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
