import React, { useState, useEffect } from "react";
import { BlogPost, SkillCategory, ExperienceLevel } from "./types";
import { BLOG_POSTS } from "./data/blogPosts";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { CategoryFilter } from "./components/CategoryFilter";
import { BlogPostCard } from "./components/BlogPostCard";
import { BlogPostDetailModal } from "./components/BlogPostDetailModal";
import { ChecklistsView } from "./components/ChecklistsView";
import { PracticeScenariosView } from "./components/PracticeScenariosView";
import { AiLegalAssistantView } from "./components/AiLegalAssistantView";
import { SavedArticlesView } from "./components/SavedArticlesView";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<"blog" | "checklists" | "scenarios" | "ai-assistant" | "saved">("blog");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Tất cả");
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel | "Tất cả trình độ">("Tất cả trình độ");
  const [searchQuery, setSearchQuery] = useState("");

  // Persistent bookmarks & likes from localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("luatsuthuchanh_bookmarks");
      return saved ? JSON.parse(saved) : ["hop-dong-phat-vi-pham-thuong-thiet"];
    } catch {
      return ["hop-dong-phat-vi-pham-thuong-thiet"];
    }
  });

  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("luatsuthuchanh_likes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedPostDetail, setSelectedPostDetail] = useState<BlogPost | null>(null);
  const [targetChecklistId, setTargetChecklistId] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      localStorage.setItem("luatsuthuchanh_bookmarks", JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error("Failed to save bookmarks to localStorage", e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem("luatsuthuchanh_likes", JSON.stringify(likedIds));
    } catch (e) {
      console.error("Failed to save likes to localStorage", e);
    }
  }, [likedIds]);

  // Handle bookmark toggle
  const handleToggleBookmark = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  // Handle like toggle
  const handleToggleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedIds(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  // Filter blog posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchesLevel = selectedLevel === "Tất cả trình độ" || post.experienceLevel === selectedLevel;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.subtitle.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.tags.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const savedPosts = BLOG_POSTS.filter(p => bookmarkedIds.includes(p.id));

  const handleNavigateToChecklist = (checklistId: string) => {
    setTargetChecklistId(checklistId);
    setActiveTab("checklists");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans flex flex-col selection:bg-[#E5E1D8] selection:text-[#1A1A1A]">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={bookmarkedIds.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === "blog" && (
          <div className="space-y-6">
            <HeroBanner
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveTab("blog");
              }}
              onOpenAiAssistant={() => setActiveTab("ai-assistant")}
            />

            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedLevel={selectedLevel}
              onSelectLevel={setSelectedLevel}
              totalResultsCount={filteredPosts.length}
            />

            {/* Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard
                      key={post.id}
                      post={post}
                      onOpenDetail={setSelectedPostDetail}
                      isBookmarked={bookmarkedIds.includes(post.id)}
                      onToggleBookmark={handleToggleBookmark}
                      isLiked={likedIds.includes(post.id)}
                      onToggleLike={handleToggleLike}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border border-[#E5E1D8] p-8 space-y-3">
                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                    Không tìm thấy bài viết phù hợp
                  </h3>
                  <p className="text-[#666666] text-sm">
                    Thử thay đổi từ khóa tìm kiếm hoặc chọn chủ đề / đối tượng khác.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("Tất cả");
                      setSelectedLevel("Tất cả trình độ");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold text-xs cursor-pointer tracking-wider uppercase"
                  >
                    Xóa tất cả bộ lọc
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "checklists" && (
          <ChecklistsView initialChecklistId={targetChecklistId} />
        )}

        {activeTab === "scenarios" && (
          <PracticeScenariosView />
        )}

        {activeTab === "ai-assistant" && (
          <AiLegalAssistantView />
        )}

        {activeTab === "saved" && (
          <SavedArticlesView
            savedPosts={savedPosts}
            onOpenDetail={setSelectedPostDetail}
            onToggleBookmark={handleToggleBookmark}
            likedPostIds={likedIds}
            onToggleLike={handleToggleLike}
            onExplore={() => setActiveTab("blog")}
          />
        )}
      </main>

      {/* Article Detail Reader Modal */}
      <BlogPostDetailModal
        post={selectedPostDetail}
        onClose={() => setSelectedPostDetail(null)}
        isBookmarked={selectedPostDetail ? bookmarkedIds.includes(selectedPostDetail.id) : false}
        onToggleBookmark={(id) => handleToggleBookmark(id)}
        isLiked={selectedPostDetail ? likedIds.includes(selectedPostDetail.id) : false}
        onToggleLike={(id) => handleToggleLike(id)}
        onNavigateToChecklist={handleNavigateToChecklist}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
